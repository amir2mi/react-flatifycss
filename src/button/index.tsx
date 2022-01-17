import React from 'react';
import classNames from 'classnames';
import { FlatifyGeneralProps } from '../interfaces';
import { generalClasses } from '../classes';

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

export function Button({
  bordered,
  children,
  color,
  disabled,
  onClick,
  outline,
  roundness,
  secondaryText,
  size,
  state,
  style,
  text,
  variant,
}: ButtonProps) {
  return (
    <button
      className={classNames(generalClasses({ color, size, style, roundness }), {
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
      })}
      disabled={disabled || state === 'disabled'}
      onClick={onClick}
    >
      {text && text}
      {children && children}
      {secondaryText && <span className="secondary-text">{secondaryText}</span>}
    </button>
  );
}
