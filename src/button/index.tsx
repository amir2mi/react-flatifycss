import React from 'react';
import clsx from 'clsx';
import styled from 'styled-components';
import { Loading } from '../loading';
import { FlatifyGeneralProps } from '../interfaces';
import { generalClasses } from '../classes';

export interface ButtonProps
  extends FlatifyGeneralProps,
    Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'color'> {
  bordered?: boolean;
  buttonStyle?: boolean;
  children?: React.ReactNode;
  disabled?: boolean;
  href?: string;
  loading?: boolean;
  spinnerLoading?: boolean;
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

export const Button = React.forwardRef((props: ButtonProps, ref: any) => {
  const {
    bordered,
    buttonStyle,
    children,
    disabled,
    loading,
    outline,
    secondaryText,
    spinnerLoading,
    state,
    text,
    variant,
    ...rest
  } = props;

  return (
    <ButtonWrapper
      {...rest}
      ref={ref}
      disabled={disabled || state === 'disabled'}
      className={clsx(
        {
          button: variant !== 'tertiary',
          bordered: bordered,
          outline: outline,
          active: state === 'active',
          disabled: state === 'disabled',
          static: state === 'static',
          'no-style': buttonStyle === false,
          'style-accent': variant === 'primary',
          'style-light': variant === 'secondary',
          'link-button': variant === 'tertiary',
          'two-layer-button': secondaryText,
          'overlay-layer': loading,
        },
        ...generalClasses(props)
      )}
    >
      {text}
      {children}
      {secondaryText && <span className="secondary-text">{secondaryText}</span>}
      {loading && <Loading spinner={spinnerLoading} />}
    </ButtonWrapper>
  );
});
