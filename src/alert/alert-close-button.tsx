import React from 'react';
import clsx from 'clsx';
import styled from 'styled-components';
import { FlatifyGeneralProps } from '../interfaces';
import { generalClasses } from '../classes';

export interface AlertCloseButtonProps
  extends FlatifyGeneralProps,
    Omit<React.HTMLAttributes<HTMLButtonElement>, 'color'> {
  children?: React.ReactNode;
  floating?: boolean;
  label: string;
}

const AlertCloseButtonWrapper = styled.button`
  ${({ sx }: AlertCloseButtonProps) => (sx ? sx : '')}
`;

export default function AlertCloseButton(props: AlertCloseButtonProps) {
  const { children, floating, label, ...rest } = props;

  return (
    <AlertCloseButtonWrapper
      {...rest}
      aria-label={label}
      className={clsx(
        'close-button',
        floating && 'floating',
        ...generalClasses(props)
      )}
    >
      {children}
    </AlertCloseButtonWrapper>
  );
}
