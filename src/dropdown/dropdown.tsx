import React, { ElementType, useEffect, useState } from 'react';
import { usePopper } from 'react-popper';
import clsx from 'clsx';
import getUniqueID from '../utils/id-generator';
import { FlatifyGeneralProps } from '../interfaces';
import { generalClasses } from '../classes';
import { generalAttributes } from '../attributes';

interface DropdownProps extends FlatifyGeneralProps {
  autoClose?: boolean | 'outside' | 'inside';
  children?: string | React.ReactNode;
  hoverShowDelay?: number;
  hoverHideDelay?: number;
  isHoverable?: boolean;
  id: string;
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

export default function Dropdown(props: DropdownProps) {
  const {
    id,
    autoClose,
    children,
    className,
    hoverShowDelay,
    hoverHideDelay,
    isHoverable,
    offsetX,
    offsetY,
    placement,
  } = props;

  // visibility toggle
  const [isOpen, setOpen] = useState<boolean>(false);
  const [isFocused, setFocused] = useState<boolean>(false);

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

  // Show/hide on hover with enter/leave delay
  let mouseEnterTimeout: NodeJS.Timeout;
  let mouseLeaveTimeout: NodeJS.Timeout;
  const hoverability = isHoverable
    ? {
        onMouseEnter: () => {
          clearTimeout(mouseLeaveTimeout);
          clearTimeout(mouseEnterTimeout);
          mouseEnterTimeout = setTimeout(
            () => setOpen(true),
            hoverShowDelay || 200
          );
        },
        onFocus: () => {
          setFocused(true);
          setOpen(true);
        },
        onMouseLeave: () => {
          clearTimeout(mouseEnterTimeout);
          clearTimeout(mouseLeaveTimeout);
          mouseLeaveTimeout = setTimeout(
            () => !isFocused && setOpen(false),
            hoverHideDelay || 400
          );
        },
        onBlur: (e: any) => {
          if (
            !e.currentTarget
              .closest('.dropdown-wrapper')
              .contains(e.relatedTarget)
          ) {
            clearTimeout(mouseEnterTimeout);
            clearTimeout(mouseLeaveTimeout);
            setFocused(false);
            setOpen(false);
          }
        },
      }
    : {};

  // arrow direction should be opposite of placement
  let arrowDirection: string = placement || 'bottom';

  const buttonId: string = getUniqueID(id);

  const closeDropdown = () => setOpen(false);

  // keyup event handler
  const handleKeyUp = (e: KeyboardEvent) => {
    if (e.key === 'Escape' && autoClose !== false) closeDropdown();
  };

  // click event handlers
  const outsideClicked = (e: any) => {
    const thisDropdownWrapper = `#wrapper-${id}`;
    if (e.target.closest(thisDropdownWrapper)) return;
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
  }, [handleKeyUp, outsideClicked]);

  useEffect(() => {
    // update popper before & after animation
    if (update) {
      update();
      setTimeout(() => update(), 320);
    }
  }, [isOpen]);

  return (
    <div
      {...generalAttributes(props)}
      id={`wrapper-${id}`}
      className={clsx('dropdown-wrapper', ...generalClasses(props), className)}
    >
      {React.Children.map(children, (child: any) => {
        if (child.props && child.props.__TYPE === 'DropdownButton') {
          return React.cloneElement(child, {
            innerRef: setReferenceElement,
            id: buttonId,
            isOpen: isOpen,
            className: `arrow-${arrowDirection}`,
            onClick: () => !isHoverable && setOpen((isOpen) => !isOpen),
            ...hoverability,
          });
        }
        return null;
      })}

      {React.Children.map(children, (child: any) => {
        if (child.props && child.props.__TYPE === 'DropdownBody') {
          return React.cloneElement(child, {
            ...attributes.popper,
            innerRef: setPopperElement,
            isOpen: isOpen,
            arrowInnerRef: setArrowElement,
            arrowStyles: styles.arrow,
            style: styles.popper,
            buttonId: buttonId,
            onClick: () => insideClicked(),
          });
        }
        return null;
      })}
    </div>
  );
}
