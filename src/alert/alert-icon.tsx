import React from 'react';
import clsx from 'clsx';
import { FlatifyGeneralProps } from '../interfaces';
import { generalClasses } from '../classes';
import { generalAttributes } from '../attributes';

interface AlertIconProps
  extends FlatifyGeneralProps,
    Omit<React.HTMLAttributes<HTMLElement>, 'color'> {
  children: React.ReactNode;
}

export default function AlertIcon(props: AlertIconProps) {
  const { children, ...rest } = props;

  return (
    <div
      {...rest}
      {...generalAttributes(props)}
      className={clsx('alert-svg', ...generalClasses(props))}
    >
      {children}
    </div>
  );
}
