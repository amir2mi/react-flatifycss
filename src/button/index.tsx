import React, { ElementType } from 'react';
import clsx from 'clsx';
import { FlatifyGeneralProps } from '../interfaces';
import { generalClasses } from '../classes';
import { generalAttributes } from '../attributes';

interface ButtonProps extends FlatifyGeneralProps {
  bordered?: boolean;
  children?: React.ReactNode;
  disabled?: boolean;
  href?: string;
  onClick?: () => void;
  outline?: boolean;
  secondaryText?: React.ReactNode | string;
  state?: 'active' | 'static' | 'disabled';
  tagName?: ElementType;
  text?: string;
  variant?: 'primary' | 'secondary' | 'tertiary';
}

export function Button(props: ButtonProps) {
  const {
    bordered,
    children,
    disabled,
    href,
    onClick,
    outline,
    secondaryText,
    state,
    tagName,
    text,
    variant,
  } = props;

  const Button = tagName || 'button';

  return (
    <Button
      {...generalAttributes(props)}
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
      href={href}
      disabled={disabled || state === 'disabled'}
      onClick={onClick}
    >
      {text}
      {children}
      {secondaryText && <span className="secondary-text">{secondaryText}</span>}
    </Button>
  );
}
