import React from 'react';
import clsx from 'clsx';
import { FlatifyGeneralProps } from '../interfaces';
import { generalClasses } from '../classes';
import { generalAttributes } from '../attributes';

interface AlertCloseButtonProps
  extends FlatifyGeneralProps,
    Omit<React.HTMLAttributes<HTMLButtonElement>, 'color'> {
  children?: React.ReactNode;
  floating?: boolean;
  label: string;
}

export default function AlertCloseButton(props: AlertCloseButtonProps) {
  const { children, floating, label, ...rest } = props;

  return (
    <button
      {...rest}
      {...generalAttributes}
      className={clsx(
        'close-button',
        floating && 'floating',
        ...generalClasses(props)
      )}
      aria-label={label}
    >
      {children}
    </button>
  );
}
