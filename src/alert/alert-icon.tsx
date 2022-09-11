import React from 'react';
import clsx from 'clsx';
import styled from 'styled-components';
import { FlatifyGeneralProps } from '../interfaces';
import { generalClasses } from '../classes';

export interface AlertIconProps
  extends FlatifyGeneralProps,
    Omit<React.HTMLAttributes<HTMLElement>, 'color'> {
  children: React.ReactNode;
  __TYPE: 'AlertIcon';
}

const AlertIconWrapper = styled.div`
  ${({ sx }: AlertIconProps) => (sx ? sx : '')}
`;

export default function AlertIcon(props: AlertIconProps) {
  const { children, __TYPE, ...rest } = props;

  return (
    <AlertIconWrapper
      {...rest}
      className={clsx('alert-svg', ...generalClasses(props))}
    >
      {children}
    </AlertIconWrapper>
  );
}

AlertIcon.defaultProps = {
  // parent uses this type name to detect if alert has icon to add the specific className.
  __TYPE: 'AlertIcon',
};
