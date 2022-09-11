import React from 'react';
import clsx from 'clsx';
import styled from 'styled-components';
import { FlatifyGeneralProps } from '../interfaces';
import { generalClasses } from '../classes';

export interface ModalHeaderProps
  extends FlatifyGeneralProps,
    Omit<React.HTMLAttributes<HTMLElement>, 'color'> {
  children?: React.ReactNode;
}

const ModalHeaderWrapper = styled.header`
  ${({ sx }: ModalHeaderProps) => (sx ? sx : '')}
`;

export default function ModalHeader(props: ModalHeaderProps) {
  const { children, ...rest } = props;

  return (
    <ModalHeaderWrapper
      {...rest}
      className={clsx('modal-header', ...generalClasses(props))}
    >
      {children}
    </ModalHeaderWrapper>
  );
}
