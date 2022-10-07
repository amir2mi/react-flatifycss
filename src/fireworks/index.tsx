import React from 'react';
import clsx from 'clsx';
import styled from 'styled-components';
import { FlatifyGeneralProps } from '../interfaces';
import { generalClasses } from '../classes';

export interface FireworksProps
  extends FlatifyGeneralProps,
    Omit<React.HTMLAttributes<HTMLElement>, 'color'> {
  delay?: number;
  duration?: number;
  repeatCount?: number;
  simple?: boolean;
}

const FireworksWrapper = styled.div`
  ${({ delay }: FireworksProps) =>
    delay ? `--flatify__firework-animation-delay: ${delay}ms;` : ''}
  ${({ duration }: FireworksProps) =>
    duration ? `--flatify__firework-animation-duration: ${duration}ms;` : ''} 
  ${({ repeatCount }: FireworksProps) =>
    repeatCount
      ? `--flatify__firework-animation-iteration-count: ${repeatCount};`
      : ''}
  ${({ sx }: FireworksProps) => (sx ? sx : '')}
`;

export function Fireworks(props: FireworksProps) {
  const { simple, ...rest } = props;

  return (
    <FireworksWrapper
      {...rest}
      aria-hidden="true"
      className={clsx('fireworks', generalClasses(props), simple && 'simple')}
    >
      {[...new Array(5)].map((a, i) => (
        <span key={a + i} className="spark" />
      ))}
    </FireworksWrapper>
  );
}
