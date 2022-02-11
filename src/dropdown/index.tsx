import React, { ElementType, useEffect, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { usePopper } from 'react-popper';
import classNames from 'classnames';
import getUniqueID from '../utils/id-generator';
import { FlatifyGeneralProps } from '../interfaces';
import { generalClasses } from '../classes';
import { generalAttributes } from '../attributes';

interface DropdownProps extends FlatifyGeneralProps {
  autoClose?: boolean | 'outside' | 'inside';
  buttonArrow?: boolean;
  buttonLabel?: string | React.ReactNode;
  children?: string | React.ReactNode;
  isMenu?: boolean;
  offsetX?: number;
  offsetY?: number;
  placement?: 'top' | 'bottom' | 'left' | 'right';
  tagName?: ElementType;
}

interface PopperOptionsProps {
  arrowElement: HTMLElement | null;
  offsetX: number | undefined;
  offsetY: number | undefined;
  placement: 'top' | 'bottom' | 'left' | 'right' | undefined;
}

const popperOptions = ({
  arrowElement,
  placement,
  offsetX,
  offsetY,
}: PopperOptionsProps) => {
  return {
    placement: placement || 'bottom',
    modifiers: [
      {
        name: 'arrow',
        options: { element: arrowElement && arrowElement, padding: 15 },
      },
      {
        name: 'computeStyles',
        options: {
          // because of show/hide animation that works with transform property, it should be false
          gpuAcceleration: false,
        },
      },
      {
        name: 'offset',
        options: {
          offset: [
            typeof offsetX === 'number' ? offsetX : 0,
            typeof offsetY === 'number' ? offsetY : 20,
          ],
        },
      },
    ],
  };
};

export function Dropdown(props: DropdownProps) {
  const {
    autoClose,
    buttonArrow,
    buttonLabel,
    children,
    className,
    isMenu,
    offsetX,
    offsetY,
    placement,
    tagName,
  } = props;

  // visibility toggle
  const [isOpen, setOpen] = useState<boolean>(false);

  // Popper js
  const [referenceElement, setReferenceElement] = useState<HTMLElement | null>(
    null
  );
  const [popperElement, setPopperElement] = useState<HTMLElement | null>(null);
  const [arrowElement, setArrowElement] = useState<HTMLElement | null>(null);
  const { styles, attributes, update } = usePopper(
    referenceElement,
    popperElement,
    popperOptions({ arrowElement, placement, offsetX, offsetY })
  );

  // arrow direction should be opposite of placement
  let arrowDirection: string = 'bottom';
  switch (placement) {
    case 'top':
      arrowDirection = 'bottom';
      break;
    case 'bottom':
      arrowDirection = 'top';
      break;
    case 'left':
      arrowDirection = 'right';
      break;
    case 'right':
      arrowDirection = 'left';
      break;
  }

  const DropdownBody: ElementType = tagName || (isMenu ? 'ul' : 'div');
  const DropdownArrow: ElementType = isMenu ? 'li' : 'div';
  const buttonId: string = getUniqueID(JSON.stringify(buttonLabel));

  const closeDropdown = () => setOpen(false);

  // keyup event handler
  const handleKeyUp = (e: KeyboardEvent) => {
    if (e.key === 'Escape' && autoClose !== false) closeDropdown();
  };

  // click event handlers
  const outsideClicked = () => {
    if (autoClose === true || autoClose === 'outside') closeDropdown();
  };
  const insideClicked = () => {
    if (autoClose === true || autoClose === 'inside') closeDropdown();
  };

  useEffect(() => {
    // listen when document is clicked to close dropdown
    document.addEventListener('click', outsideClicked);

    // listen when user presses escape key to close dropdown
    document.addEventListener('keyup', handleKeyUp);

    return () => {
      // clean up the event listeners
      document.removeEventListener('click', outsideClicked);
      document.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  return (
    <div
      className={classNames('dropdown-wrapper', className)}
      {...generalAttributes(props)}
      onClick={(e) => e.stopPropagation()}
    >
      <button
        ref={setReferenceElement}
        id={buttonId}
        aria-expanded={false}
        className={classNames(
          'button dropdown-toggle',
          {
            'arrow-button': buttonArrow,
            'arrow-flip': buttonArrow && isOpen,
            ['arrow-' + arrowDirection]: buttonArrow && placement,
          },
          ...generalClasses(props)
        )}
        onClick={() => {
          setOpen((old) => !old);

          // update popper after animation
          update && setTimeout(() => update(), 320);
        }}
      >
        {buttonLabel}
      </button>

      <CSSTransition
        in={isOpen}
        timeout={300}
        classNames={{
          enterDone: 'show',
          exitActive: 'show dropdown-will-be-hidden',
        }}
      >
        <DropdownBody
          ref={setPopperElement}
          style={styles.popper}
          {...attributes.popper}
          className={classNames(
            'dropdown',
            { 'menu-items-wrapper': isMenu },
            ...generalClasses(props)
          )}
          aria-labelledby={buttonId}
          onClick={() => {
            // check if the dropdown should be closed depending on autoClose
            insideClicked();
          }}
        >
          {children}
          <DropdownArrow aria-hidden="true" data-popper-placement="right">
            <span
              ref={setArrowElement}
              style={styles.arrow}
              className="pointer-arrow"
            ></span>
          </DropdownArrow>
        </DropdownBody>
      </CSSTransition>
    </div>
  );
}
