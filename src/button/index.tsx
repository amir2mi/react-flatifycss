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
  state?: 'default' | 'active' | 'static' | 'disabled';
  text?: string;
}

export function Button({
  bordered,
  children,
  color,
  disabled,
  onClick,
  outline,
  roundness,
  state,
  style,
  text,
}: ButtonProps) {
  return (
    <button
      className={classNames(
        'button',
        generalClasses({ style, color, roundness }),
        {
          bordered: bordered,
          outline: outline,
          active: state === 'active',
          disabled: state === 'disabled',
          static: state === 'static',
        }
      )}
      disabled={disabled || state === 'disabled'}
      onClick={() => onClick && onClick()}
    >
      {text && text}
      {children && children}
    </button>
  );
}
