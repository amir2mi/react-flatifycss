import React from 'react';
import clsx from 'clsx';
import { FlatifyGeneralProps } from '../interfaces';
import { generalClasses } from '../classes';
import { generalAttributes } from '../attributes';

interface AlertProps
  extends FlatifyGeneralProps,
    Omit<React.HTMLAttributes<HTMLElement>, 'color'> {
  children: React.ReactNode;
  icon?: React.ReactNode;
}

export default function Alert(props: AlertProps) {
  const { children, icon, ...rest } = props;

  return (
    <div
      {...rest}
      {...generalAttributes(props)}
      className={clsx('alert', icon && 'has-icon', ...generalClasses(props))}
      role="alert"
    >
      {icon && <div className="alert-svg">{icon}</div>}
      {children}
    </div>
  );
}
