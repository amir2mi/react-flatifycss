import React from 'react';
import clsx from 'clsx';
import styled from 'styled-components';
import { FlatifyGeneralProps } from '../interfaces';
import { generalClasses } from '../classes';

interface ButtonGroupProps
  extends FlatifyGeneralProps,
    Omit<React.HTMLAttributes<HTMLElement>, 'color'> {
  children?: React.ReactNode;
  vertical?: boolean;
}

const ButtonGroupWrapper = styled.div`
  ${({ sx }: ButtonGroupProps) => (sx ? sx : '')}
`;

export function ButtonGroup(props: ButtonGroupProps) {
  const { children, vertical, ...rest } = props;

  return (
    <ButtonGroupWrapper
      {...rest}
      className={clsx(
        'button-group',
        { vertical: vertical },
        ...generalClasses(props)
      )}
    >
      {children}
    </ButtonGroupWrapper>
  );
}
