import React from 'react';
import clsx from 'clsx';
import styled from 'styled-components';
import { FlatifyGeneralProps } from '../interfaces';
import { generalClasses } from '../classes';

interface ButtonProps
  extends FlatifyGeneralProps,
    Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'color'> {
  bordered?: boolean;
  children?: React.ReactNode;
  disabled?: boolean;
  href?: string;
  onClick?: () => void;
  outline?: boolean;
  secondaryText?: React.ReactNode | string;
  state?: 'active' | 'static' | 'disabled';
  text?: string;
  variant?: 'primary' | 'secondary' | 'tertiary';
}

const ButtonWrapper = styled.button`
  ${({ sx }: ButtonProps) => (sx ? sx : '')}
`;

export function Button(props: ButtonProps) {
  const {
    bordered,
    children,
    disabled,
    outline,
    secondaryText,
    state,
    text,
    variant,
    ...rest
  } = props;

  return (
    <ButtonWrapper
      {...rest}
      disabled={disabled || state === 'disabled'}
      className={clsx(
        {
          button: variant !== 'tertiary',
          bordered: bordered,
          outline: outline,
          active: state === 'active',
          disabled: state === 'disabled',
          static: state === 'static',
          'style-accent': variant === 'primary',
          'style-light': variant === 'secondary',
          'link-button': variant === 'tertiary',
          'two-layer-button': secondaryText,
        },
        ...generalClasses(props)
      )}
    >
      {text}
      {children}
      {secondaryText && <span className="secondary-text">{secondaryText}</span>}
    </ButtonWrapper>
  );
}
