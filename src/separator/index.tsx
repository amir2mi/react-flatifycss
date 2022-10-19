import React from 'react';
import clsx from 'clsx';
import styled from 'styled-components';
import { FlatifyGeneralProps } from '../interfaces';
import { generalClasses } from '../classes';

export interface SeparatorProps
  extends FlatifyGeneralProps,
    Omit<React.HTMLAttributes<HTMLHRElement>, 'color'> {
  type?: 'dots' | 'short' | 'line';
}

const SeparatorWrapper = styled.hr`
  ${({ sx }: SeparatorProps) => (sx ? sx : '')}
`;

export function Separator(props: SeparatorProps) {
  const { children, type, ...rest } = props;

  return (
    <SeparatorWrapper
      {...rest}
      className={clsx(
        'separator',
        {
          dots: type === 'dots',
          short: type === 'short',
        },
        ...generalClasses(props)
      )}
    />
  );
}
