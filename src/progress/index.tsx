import React from 'react';
import clsx from 'clsx';
import { FlatifyGeneralProps } from '../interfaces';
import { generalClasses } from '../classes';
import { generalAttributes } from '../attributes';

interface ProgressProps
  extends FlatifyGeneralProps,
    Omit<React.HTMLAttributes<HTMLDivElement>, 'color'> {
  bordered?: boolean;
  children?: React.ReactNode;
  max?: number;
  min?: number;
  processing?: boolean;
  value: number;
}

export function Progress(props: ProgressProps) {
  const { bordered, children, processing, max = 100, min = 0, value } = props;

  let widthPercent = ((value - min) / (max - min)) * 100;
  widthPercent = widthPercent > 100 ? 100 : widthPercent;

  return (
    <div
      {...generalAttributes(props)}
      className={clsx('progress', ...generalClasses(props), {
        bordered: bordered,
        processing: processing,
      })}
    >
      <div
        className="progress-bar"
        role="progressbar"
        aria-valuenow={value}
        aria-valuemin={min || 0}
        aria-valuemax={max || 100}
        style={{ width: `${widthPercent}%` }}
      >
        {children}
      </div>
    </div>
  );
}
