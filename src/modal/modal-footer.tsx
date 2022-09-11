import React from 'react';
import clsx from 'clsx';
import styled from 'styled-components';
import { FlatifyGeneralProps } from '../interfaces';
import { generalClasses } from '../classes';

export interface ModalFooterProps
  extends FlatifyGeneralProps,
    Omit<React.HTMLAttributes<HTMLElement>, 'color'> {
  children?: React.ReactNode;
}

const ModalFooterWrapper = styled.footer`
  ${({ sx }: ModalFooterProps) => (sx ? sx : '')}
`;

export default function ModalFooter(props: ModalFooterProps) {
  const { children, ...rest } = props;

  return (
    <ModalFooterWrapper
      {...rest}
      className={clsx('modal-footer', ...generalClasses(props))}
    >
      {children}
    </ModalFooterWrapper>
  );
}
