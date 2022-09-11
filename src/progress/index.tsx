import React from 'react';
import clsx from 'clsx';
import styled from 'styled-components';
import { FlatifyGeneralProps } from '../interfaces';
import { generalClasses } from '../classes';

export interface ProgressProps
  extends FlatifyGeneralProps,
    Omit<React.HTMLAttributes<HTMLElement>, 'color'> {
  bordered?: boolean;
  children?: React.ReactNode;
  duration?: number;
  max?: number;
  min?: number;
  processing?: boolean;
  value: number;
}

const ProgressWrapper = styled.div`
  ${({ duration }: ProgressProps) =>
    duration ? `--flatify__progress-animation-duration: ${duration}ms;` : ''}
  ${({ sx }: ProgressProps) => (sx ? sx : '')}
`;

export function Progress(props: ProgressProps) {
  const {
    bordered,
    children,
    processing,
    max = 100,
    min = 0,
    value,
    ...rest
  } = props;

  let widthPercent = ((value - min) / (max - min)) * 100;
  widthPercent = widthPercent > 100 ? 100 : widthPercent;

  return (
    <ProgressWrapper
      {...rest}
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
    </ProgressWrapper>
  );
}
