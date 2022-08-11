import React from 'react';
import clsx from 'clsx';
import { FlatifyGeneralProps } from '../interfaces';
import { generalClasses } from '../classes';
import { generalAttributes } from '../attributes';

export interface DropdownButtonProps
  extends FlatifyGeneralProps,
    Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'color'> {
  children?: React.ReactNode;
  hasArrow?: boolean;
  innerRef?: React.Ref<HTMLButtonElement>;
  isButton?: boolean;
  isOpen?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLButtonElement>) => void;
  onFocus?: (event: React.FocusEvent<HTMLButtonElement>) => void;
  onMouseEnter?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onMouseLeave?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function DropdownButton(props: DropdownButtonProps) {
  const {
    hasArrow,
    children,
    isOpen,
    isButton,
    onClick,
    onBlur,
    onFocus,
    onMouseEnter,
    onMouseLeave,
    innerRef,
  } = props;

  return (
    <button
      {...generalAttributes(props)}
      ref={innerRef}
      aria-expanded={isOpen}
      className={clsx(
        'dropdown-toggle',
        isButton !== false && 'button',
        hasArrow && 'arrow-button',
        isOpen && 'active',
        isOpen && hasArrow && 'arrow-flip',
        ...generalClasses(props)
      )}
      onClick={onClick}
      onFocus={onFocus}
      onBlur={onBlur}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </button>
  );
}

DropdownButton.defaultProps = {
  __TYPE: 'DropdownButton',
};
