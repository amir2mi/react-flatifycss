import React from 'react';
import clsx from 'clsx';
import { FlatifyGeneralProps } from '../interfaces';
import { generalClasses } from '../classes';
import { generalAttributes } from '../attributes';

export interface DropdownButtonProps
  extends FlatifyGeneralProps,
    Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'color'> {
  arrowClassName?: string;
  buttonStyle?: boolean;
  children?: React.ReactNode;
  hasArrow?: boolean;
  innerRef?: React.Ref<HTMLButtonElement>;
  isOpen?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLButtonElement>) => void;
  onFocus?: (event: React.FocusEvent<HTMLButtonElement>) => void;
  onMouseEnter?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onMouseLeave?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  __TYPE: 'DropdownButton';
}

export default function DropdownButton(props: DropdownButtonProps) {
  const {
    arrowClassName,
    buttonStyle,
    children,
    hasArrow,
    innerRef,
    isOpen,
    __TYPE,
    ...rest
  } = props;

  return (
    <button
      {...rest}
      {...generalAttributes(props)}
      ref={innerRef}
      aria-expanded={isOpen}
      className={clsx(
        'dropdown-toggle',
        ...generalClasses(props),
        arrowClassName,
        {
          active: isOpen,
          button: buttonStyle !== false,
          'no-style': !buttonStyle,
          'arrow-button': hasArrow,
          'arrow-flip': isOpen && hasArrow,
        }
      )}
    >
      {children}
    </button>
  );
}

DropdownButton.defaultProps = {
  __TYPE: 'DropdownButton',
};
