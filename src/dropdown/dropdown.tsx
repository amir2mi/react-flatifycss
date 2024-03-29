import React, { useEffect, useState, useRef, useCallback } from 'react';
import { usePopper } from 'react-popper';
import clsx from 'clsx';
import styled from 'styled-components';
import getUniqueID from '../utils/id-generator';
import { FlatifyGeneralProps } from '../interfaces';
import { generalClasses } from '../classes';

export interface DropdownProps extends FlatifyGeneralProps {
  autoClose?: boolean | 'outside' | 'inside';
  children?: React.ReactNode;
  hoverShowDelay?: number;
  hoverHideDelay?: number;
  isHoverable?: boolean;
  id: string;
  offsetX?: number;
  offsetY?: number;
  showAnimation?: string;
  hideAnimation?: string;
  placement?: 'top' | 'bottom' | 'left' | 'right';
}

export interface PopperOptionsProps {
  arrowElement: HTMLElement | null;
  offsetX: number | undefined;
  offsetY: number | undefined;
  placement: 'top' | 'bottom' | 'left' | 'right' | undefined;
}

const DropdownWrapper = styled.div`
  ${({ showAnimation }: DropdownProps) =>
    showAnimation
      ? `--flatify__dropdown-animation-show: ${showAnimation};`
      : ''}
  ${({ hideAnimation }: DropdownProps) =>
    hideAnimation
      ? `--flatify__dropdown-animation-hide: ${hideAnimation};`
      : ''}
  ${({ sx }: DropdownProps) => (sx ? sx : '')}
`;

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
    ...rest
  } = props;

  // arrow direction should be opposite of placement
  let arrowDirection: string = placement || 'bottom';
  const buttonId: string = getUniqueID(id);

  /**
   * States
   */
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

  /*
    Show/hide on hover with enter/leave delay.
    Dropdown button and body are separate so they have separate delays and works with each other.
  */
  const enterTimeout = useRef<NodeJS.Timeout | null>(null);
  const leaveTimeout = useRef<NodeJS.Timeout | null>(null);
  const buttonHoverability = useRef<Object>({});
  const bodyHoverability = useRef<Object>({});

  const hoverability = {
    onButtonMouseEnter: () => {
      leaveTimeout.current && clearTimeout(leaveTimeout.current);
      enterTimeout.current && clearTimeout(enterTimeout.current);
      enterTimeout.current = setTimeout(
        () => setOpen(true),
        hoverShowDelay || 200
      );
    },
    onBodyMouseEnter: () => {
      leaveTimeout.current && clearTimeout(leaveTimeout.current);
      enterTimeout.current && clearTimeout(enterTimeout.current);
      setOpen(true);
    },
    onFocus: () => {
      // no need to delay for keyboard folks
      leaveTimeout.current && clearTimeout(leaveTimeout.current);
      setOpen(true);
    },
    onMouseLeave: () => {
      enterTimeout.current && clearTimeout(enterTimeout.current);
      leaveTimeout.current && clearTimeout(leaveTimeout.current);
      leaveTimeout.current = setTimeout(
        () => setOpen(false),
        hoverHideDelay || 400
      );
    },
    onBlur: (e: any) => {
      if (
        !e.currentTarget.closest('.dropdown-wrapper').contains(e.relatedTarget)
      ) {
        enterTimeout.current && clearTimeout(enterTimeout.current);
        leaveTimeout.current && clearTimeout(leaveTimeout.current);
        setOpen(false);
      }
    },
  };

  buttonHoverability.current = isHoverable ? hoverability : {};
  bodyHoverability.current = isHoverable ? hoverability : {};

  /**
   * Methods
   */
  const closeDropdown = () => setOpen(false);

  // keyup event handler
  const handleKeyUp = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape' && autoClose !== false) closeDropdown();
    },
    [autoClose]
  );

  // click event handlers
  const outsideClicked = useCallback(
    (e: any) => {
      const thisDropdownWrapper = `#wrapper-${id}`;
      if (e.target.closest(thisDropdownWrapper)) return;
      if (autoClose === true || autoClose === 'outside') closeDropdown();
    },
    [autoClose, id]
  );
  const insideClicked = () => {
    if (autoClose === true || autoClose === 'inside') closeDropdown();
  };

  /**
   * Side effects
   */
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
  }, [isOpen, update]);

  return (
    <DropdownWrapper
      {...rest}
      id={`wrapper-${id}`}
      className={clsx('dropdown-wrapper', ...generalClasses(props), className)}
    >
      {React.Children.map(children, (child: any) => {
        if (child.props && child.props.__TYPE === 'DropdownButton') {
          return React.cloneElement(child, {
            innerRef: setReferenceElement,
            id: buttonId,
            isOpen: isOpen,
            arrowClassName: `arrow-${arrowDirection}`,
            onClick: () => !isHoverable && setOpen(isOpen => !isOpen),
            ...buttonHoverability.current,
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
            ...bodyHoverability.current,
          });
        }
        return null;
      })}
    </DropdownWrapper>
  );
}
