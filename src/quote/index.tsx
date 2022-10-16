import React from 'react';
import clsx from 'clsx';
import styled from 'styled-components';
import { FlatifyGeneralProps } from '../interfaces';
import { generalClasses } from '../classes';

export interface QuoteProps
  extends FlatifyGeneralProps,
    Omit<React.HTMLAttributes<HTMLElement>, 'color'> {
  children?: React.ReactNode;
  cite?: string;
  hasIcon?: boolean;
  icon?: string;
  large?: boolean;
}

const QuoteWrapper = styled.blockquote`
  ${({ icon }: QuoteProps) =>
    icon
      ? `--flatify__blockquote-icon: url("data:image/svg+xml; utf8, ${icon.replaceAll(
          '"',
          "'"
        )};")`
      : ''}
  ${({ sx }: QuoteProps) => (sx ? sx : '')}
`;

export function Quote(props: QuoteProps) {
  const { children, cite, hasIcon, icon, large, ...rest } = props;

  return (
    <QuoteWrapper
      {...rest}
      className={clsx(
        'quote',
        ...generalClasses(props),
        large && 'large',
        !hasIcon && !icon && 'no-icon'
      )}
    >
      {children}
      {cite && <cite>{cite}</cite>}
    </QuoteWrapper>
  );
}
