import React from 'react';
import classNames from 'classnames';
import { FlatifyGeneralProps } from '../interfaces';
import { generalClasses } from '../classes';

interface ButtonGroupProps extends FlatifyGeneralProps {
  children?: React.ReactNode;
  vertical?: boolean;
}

export function ButtonGroup(props: ButtonGroupProps) {
  const { children, id, vertical } = props;

  return (
    <div
      id={id}
      className={classNames(
        'button-group',
        { vertical: vertical },
        ...generalClasses(props)
      )}
    >
      {children && children}
    </div>
  );
}
