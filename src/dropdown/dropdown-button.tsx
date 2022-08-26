import React from 'react';
import clsx from 'clsx';
import { FlatifyGeneralProps } from '../interfaces';
import { generalClasses } from '../classes';

export interface DropdownButtonProps
  extends FlatifyGeneralProps,
    Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'color'> {
  arrowClassName?: string;
  buttonStyle?: boolean;
  children?: React.ReactNode;
  hasArrow?: boolean;
  innerRef?: React.Ref<HTMLButtonElement>;
  isOpen?: boolean;
  onButtonMouseEnter?: (event: React.MouseEvent<HTMLElement>) => void;
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
    onButtonMouseEnter,
    __TYPE,
    ...rest
  } = props;

  return (
    <button
      {...rest}
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
      onMouseEnter={onButtonMouseEnter}
    >
      {children}
    </button>
  );
}

DropdownButton.defaultProps = {
  __TYPE: 'DropdownButton',
};
