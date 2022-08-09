import React from 'react';
import clsx from 'clsx';
import { FlatifyGeneralProps } from '../interfaces';
import { generalClasses } from '../classes';
import { generalAttributes } from '../attributes';

interface DropdownButtonProps extends FlatifyGeneralProps {
  children?: React.ReactNode;
  hasArrow?: boolean;
  innerRef?: React.Ref<HTMLButtonElement>;
  isOpen?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function DropdownButton(props: DropdownButtonProps) {
  const { hasArrow, children, isOpen, onClick, innerRef } = props;

  return (
    <button
      {...generalAttributes(props)}
      ref={innerRef}
      aria-expanded={isOpen}
      className={clsx(
        'button dropdown-toggle',
        hasArrow && 'arrow-button',
        isOpen && 'active',
        isOpen && 'arrow-flip',
        ...generalClasses(props)
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

DropdownButton.defaultProps = {
  __TYPE: 'DropdownButton',
};
