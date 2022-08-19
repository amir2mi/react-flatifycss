import React from 'react';
import clsx from 'clsx';
import styled from 'styled-components';
import { FlatifyGeneralProps } from '../interfaces';
import { generalClasses } from '../classes';
import { generalAttributes } from '../attributes';

interface FireworksProps
  extends FlatifyGeneralProps,
    Omit<React.HTMLAttributes<HTMLDivElement>, 'color'> {
  delay?: number;
  duration?: number;
  repeat?: number;
  simple?: boolean;
}

const FireworksWrapper = styled.div`
  ${(props: FireworksProps) => (props.sx ? props.sx : '')}
  ${(props: FireworksProps) =>
    props.delay ? `--flatify__firework-animation-delay: ${props.delay}ms;` : ''}
  ${(props: FireworksProps) =>
    props.duration
      ? `--flatify__firework-animation-duration: ${props.duration}ms;`
      : ''} 
  ${(props: FireworksProps) =>
    props.repeat
      ? `--flatify__firework-animation-iteration-count: ${props.repeat};`
      : ''}
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
