import React from 'react';
import classNames from 'classnames';
import { FlatifyGeneralProps } from '../interfaces';
import { generalClasses } from '../classes';
import { generalAttributes } from '../attributes';

interface ButtonProps extends FlatifyGeneralProps {
  bordered?: boolean;
  children?: React.ReactNode;
  disabled?: boolean;
  onClick?: () => void;
  outline?: boolean;
  secondaryText?: React.ReactNode | string;
  state?: 'active' | 'static' | 'disabled';
  text?: string;
  variant?: 'primary' | 'secondary' | 'tertiary';
}

export function Button(props: ButtonProps) {
  const {
    bordered,
    children,
    disabled,
    onClick,
    outline,
    secondaryText,
    state,
    text,
    variant,
  } = props;

  return (
    <button
      {...generalAttributes(props)}
      className={classNames(
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
      disabled={disabled || state === 'disabled'}
      onClick={onClick}
    >
      {text}
      {children}
      {secondaryText && <span className="secondary-text">{secondaryText}</span>}
    </button>
  );
}
