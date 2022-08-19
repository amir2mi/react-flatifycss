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
  simple?: boolean;
}

const FireworksWrapper = styled.div`
  ${props: FireworksProps =>
    props.delay && `--flatify__firework-animation-delay: ${props.delay}s;`}
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
