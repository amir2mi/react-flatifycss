import React from 'react';
import clsx from 'clsx';
import styled from 'styled-components';
import { FlatifyGeneralProps } from '../interfaces';
import { generalClasses } from '../classes';

export interface ToastIconProps
  extends FlatifyGeneralProps,
    Omit<React.HTMLAttributes<HTMLElement>, 'color'> {
  children: React.ReactNode;
}

const ToastIconWrapper = styled.div`
  ${({ sx }: ToastIconProps) => (sx ? sx : '')}
`;

export default function AlertIcon(props: ToastIconProps) {
  const { children, ...rest } = props;

  return (
    <ToastIconWrapper
      {...rest}
      className={clsx('toast-svg', ...generalClasses(props))}
    >
      {children}
    </ToastIconWrapper>
  );
}
