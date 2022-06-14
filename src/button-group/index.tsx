import React from 'react';
import clsx from 'clsx';
import { FlatifyGeneralProps } from '../interfaces';
import { generalClasses } from '../classes';
import { generalAttributes } from '../attributes';

interface ButtonGroupProps extends FlatifyGeneralProps {
  children?: React.ReactNode;
  vertical?: boolean;
}

export function ButtonGroup(props: ButtonGroupProps) {
  const { children, vertical } = props;

  return (
    <div
      className={clsx(
        'button-group',
        { vertical: vertical },
        ...generalClasses(props)
      )}
      {...generalAttributes(props)}
    >
      {children && children}
    </div>
  );
}
