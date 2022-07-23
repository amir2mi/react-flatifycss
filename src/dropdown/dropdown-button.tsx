import React from 'react';
import clsx from 'clsx';
import { FlatifyGeneralProps } from '../interfaces';
import { generalClasses } from '../classes';
import { generalAttributes } from '../attributes';

interface DropdownButtonProps extends FlatifyGeneralProps {
  arrow?: boolean;
  children?: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  innerRef?: React.Ref<HTMLButtonElement>;
  isOpen?: boolean;
}

export default function DropdownButton(props: DropdownButtonProps) {
  const { arrow, children, isOpen, onClick, innerRef } = props;

  return (
    <button
      {...generalAttributes(props)}
      ref={innerRef}
      aria-expanded={isOpen}
      className={clsx(
        'button dropdown-toggle',
        arrow && 'arrow-button',
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
