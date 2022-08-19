import React from 'react';
import clsx from 'clsx';
import { FlatifyGeneralProps } from '../interfaces';
import { generalClasses } from '../classes';
import { generalAttributes } from '../attributes';

interface FireworksProps
  extends FlatifyGeneralProps,
    Omit<React.HTMLAttributes<HTMLDivElement>, 'color'> {
  delay?: number;
  simple?: boolean;
}

export function Fireworks(props: FireworksProps) {
  const { delay, simple, ...rest } = props;

  return (
    <div
      {...rest}
      {...generalAttributes(props)}
      aria-hidden="true"
      className={clsx('fireworks', generalClasses(props), simple && 'simple')}
    >
      {[...new Array(5)].map(() => (
        <span className="spark" />
      ))}
    </div>
  );
}
