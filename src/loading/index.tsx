import React from 'react';
import clsx from 'clsx';
import { FlatifyGeneralProps } from '../interfaces';
import { generalClasses } from '../classes';
import { generalAttributes } from '../attributes';

interface LoadingProps extends FlatifyGeneralProps {
  isStopped?: boolean;
}

export function Loading(props: LoadingProps) {
  const { isStopped } = props;

  return (
    <span
      {...generalAttributes(props)}
      className={clsx(
        'loading',
        {
          'stop-animation': isStopped,
        },
        ...generalClasses(props)
      )}
      aria-hidden
    ></span>
  );
}
