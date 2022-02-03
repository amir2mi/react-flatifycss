import React from 'react';
import classNames from 'classnames';
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
      className={classNames(
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
