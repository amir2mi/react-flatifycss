import React from 'react';
import clsx from 'clsx';
import styled from 'styled-components';
import { FlatifyGeneralProps } from '../interfaces';
import { generalClasses } from '../classes';

export interface HighlightProps
  extends FlatifyGeneralProps,
    Omit<React.HTMLAttributes<HTMLElement>, 'color'> {
  children?: React.ReactNode;
  inline?: boolean;
}

const HighlightWrapper = styled.mark`
  ${({ sx }: HighlightProps) => (sx ? sx : '')}
`;

export function Highlight(props: HighlightProps) {
  const { inline, ...rest } = props;

  return (
    <HighlightWrapper
      {...rest}
      className={clsx('mark', ...generalClasses(props), inline && 'inline')}
    />
  );
}
