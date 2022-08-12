import React from 'react';
import clsx from 'clsx';
import { CSSTransition } from 'react-transition-group';
import { FlatifyGeneralProps } from '../interfaces';
import { generalClasses } from '../classes';
import { generalAttributes } from '../attributes';

interface AlertProps
  extends FlatifyGeneralProps,
    Omit<React.HTMLAttributes<HTMLElement>, 'color'> {
  children: React.ReactNode;
  show?: boolean;
}

export default function Alert(props: AlertProps) {
  const { children, show, ...rest } = props;

  return (
    <CSSTransition
      in={show !== false}
      timeout={300}
      unmountOnExit
      classNames={{
        exitActive: 'alert-will-be-removed',
      }}
    >
      <div
        {...rest}
        {...generalAttributes(props)}
        className={clsx('alert has-icon', ...generalClasses(props))}
        role="alert"
      >
        {children}
      </div>
    </CSSTransition>
  );
}
