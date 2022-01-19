import React from 'react';
import classNames from 'classnames';
import { FlatifyGeneralProps } from '../interfaces';
import { generalClasses } from '../classes';

interface ButtonGroupProps extends FlatifyGeneralProps {
  children?: React.ReactNode;
}

export function ButtonGroup(props: ButtonGroupProps) {
  const { children } = props;

  return (
    <div className={classNames({}, generalClasses(props))}>
      {children && children}
    </div>
  );
}
