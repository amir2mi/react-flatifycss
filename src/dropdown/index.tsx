import React, { ElementType, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { usePopper } from 'react-popper';
import classNames from 'classnames';
import getUniqueID from '../utils/id-generator';
import { FlatifyGeneralProps } from '../interfaces';
import { generalClasses } from '../classes';

interface DropdownProps extends FlatifyGeneralProps {
  buttonArrow?: boolean;
  buttonLabel?: string | React.ReactNode;
  children?: string | React.ReactNode;
  tagName?: ElementType;
  isMenu?: boolean;
}

export function Dropdown(props: DropdownProps) {
  const { buttonArrow, buttonLabel, children, className, id, isMenu, tagName } =
    props;

  // visibility toggle
  const [isOpen, setOpen] = useState<boolean>(false);
  // Popper js
  const [referenceElement, setReferenceElement] = useState<HTMLElement | null>(
    null
  );
  const [popperElement, setPopperElement] = useState<HTMLElement | null>(null);
  const [arrowElement, setArrowElement] = useState<HTMLElement | null>(null);
  const { styles, attributes, forceUpdate } = usePopper(
    referenceElement,
    popperElement,
    {
      modifiers: [
        { name: 'arrow', options: { element: arrowElement, padding: 15 } },
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
            offset: [0, 20],
          },
        },
      ],
    }
  );

  const DropdownBody = tagName || 'ul';
  const buttonId = getUniqueID(JSON.stringify(buttonLabel));

  return (
    <div id={id} className={classNames('dropdown-wrapper', className)}>
      <button
        ref={setReferenceElement}
        id={buttonId}
        aria-expanded={false}
        className={classNames(
          'button dropdown-toggle',
          {
            'arrow-button': buttonArrow,
          },
          ...generalClasses(props)
        )}
        onClick={() => {
          setOpen((old) => {
            if (old === false && forceUpdate) {
              forceUpdate();
            }

            return !old;
          });
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
        >
          {children}
          <div aria-hidden="true">
            <span
              ref={setArrowElement}
              style={styles.arrow}
              className="pointer-arrow"
            ></span>
          </div>
        </DropdownBody>
      </CSSTransition>
    </div>
  );
}
