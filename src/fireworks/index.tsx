import React from 'react';
import clsx from 'clsx';
import styled from 'styled-components';
import { FlatifyGeneralProps } from '../interfaces';
import { generalClasses } from '../classes';
import { generalAttributes } from '../attributes';

interface FireworksProps
  extends FlatifyGeneralProps,
    Omit<React.HTMLAttributes<HTMLElement>, 'color'> {
  delay?: number;
  duration?: number;
  repeat?: number;
  simple?: boolean;
}

const FireworksWrapper = styled.div`
  ${({ sx }: FireworksProps) => (sx ? sx : '')}
  ${({ delay }: FireworksProps) =>
    delay ? `--flatify__firework-animation-delay: ${delay}ms;` : ''}
  ${({ duration }: FireworksProps) =>
    duration ? `--flatify__firework-animation-duration: ${duration}ms;` : ''} 
  ${({ repeat }: FireworksProps) =>
    repeat ? `--flatify__firework-animation-iteration-count: ${repeat};` : ''}
`;

export function Fireworks(props: FireworksProps) {
  const { simple, ...rest } = props;

  return (
    <FireworksWrapper
      {...rest}
      {...generalAttributes(props)}
      aria-hidden="true"
      className={clsx('fireworks', generalClasses(props), simple && 'simple')}
    >
      {[...new Array(5)].map(() => (
        <span className="spark" />
      ))}
    </FireworksWrapper>
  );
}
