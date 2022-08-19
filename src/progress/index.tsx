import React from 'react';
import clsx from 'clsx';
import { FlatifyGeneralProps } from '../interfaces';
import { generalClasses } from '../classes';
import { generalAttributes } from '../attributes';

interface ProgressProps
  extends FlatifyGeneralProps,
    Omit<React.HTMLAttributes<HTMLDivElement>, 'color'> {
  bordered?: boolean;
  max?: number;
  min?: number;
  processing?: boolean;
  value: number;
}

export default function Progress(props: ProgressProps) {
  const { bordered, processing, max, min, value } = props;

  return (
    <div {...generalAttributes(props)} className="progress">
      <div
        className={clsx('progress-bar', ...generalClasses(props), {
          bordered: bordered,
          processing: processing,
        })}
        role="progressbar"
        aria-valuenow={value}
        aria-valuemin={min || 0}
        aria-valuemax={max || 100}
      />
    </div>
  );
}
