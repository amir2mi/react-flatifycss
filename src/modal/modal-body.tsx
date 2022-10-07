import React from 'react';
import clsx from 'clsx';
import styled from 'styled-components';
import { FlatifyGeneralProps } from '../interfaces';
import { generalClasses } from '../classes';

export interface ModalBodyProps
  extends FlatifyGeneralProps,
    Omit<React.HTMLAttributes<HTMLElement>, 'color'> {
  children?: React.ReactNode;
}

const ModalBodyWrapper = styled.div`
  ${({ sx }: ModalBodyProps) => (sx ? sx : '')}
`;

export default function ModalBody(props: ModalBodyProps) {
  const { children, ...rest } = props;

  return (
    <ModalBodyWrapper
      {...rest}
      className={clsx('modal-body', ...generalClasses(props))}
    >
      {children}
    </ModalBodyWrapper>
  );
}
