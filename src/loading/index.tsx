import React from 'react';
import clsx from 'clsx';
import styled from 'styled-components';
import { FlatifyGeneralProps } from '../interfaces';
import { generalClasses } from '../classes';

export interface LoadingProps
  extends FlatifyGeneralProps,
    Omit<React.HTMLAttributes<HTMLElement>, 'color'> {
  dotWidth?: string;
  dotHeight?: string;
  dotStartScale?: number;
  duration?: number;
  spinner?: boolean;
  stopped?: boolean;
}

const LoadingWrapper = styled.span`
  ${({ dotWidth }: LoadingProps) =>
    dotWidth ? `--flatify__loading-dot-width: ${dotWidth};` : ''}
  ${({ dotHeight }: LoadingProps) =>
    dotHeight ? `--flatify__loading-dot-height: ${dotHeight};` : ''} 
  ${({ dotStartScale }: LoadingProps) =>
    dotStartScale
      ? `--flatify__loading-dot-animation-start-scale: ${dotStartScale};`
      : ''}
  ${({ duration }: LoadingProps) =>
    duration
      ? `--flatify__loading-dot-animation-duration: ${duration}ms; --flatify__loading-spinner-animation-duration: ${duration}ms;`
      : ''}
  ${({ sx }: LoadingProps) => (sx ? sx : '')}
`;

export function Loading(props: LoadingProps) {
  const { spinner, stopped, ...rest } = props;

  return (
    <LoadingWrapper
      {...rest}
      aria-hidden
      className={clsx(...generalClasses(props), {
        loading: !spinner,
        spinner: spinner,
        'stop-animation': stopped,
      })}
    />
  );
}
