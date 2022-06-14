import React from 'react';
import clsx from 'clsx';
import { FlatifyGeneralProps } from '../interfaces';
import { generalClasses } from '../classes';
import { generalAttributes } from '../attributes';

interface ToggleSwitchProps extends FlatifyGeneralProps {
  checked?: boolean;
  children?: string | React.ReactNode;
  defaultChecked?: boolean;
  disabled?: boolean;
  isAfterLabel?: boolean;
  label?: string;
  name?: string;
  onChange?: (checked: boolean) => void;
  required?: boolean | undefined;
  state?: 'valid' | 'warning' | 'invalid';
  type?: 'checkbox' | 'radio';
}

export function ToggleSwitch(props: ToggleSwitchProps) {
  const {
    checked,
    defaultChecked,
    disabled,
    children,
    label,
    isAfterLabel,
    name,
    onChange,
    required,
    state,
    type,
  } = props;

  return (
    <label
      {...generalAttributes(props)}
      className={clsx(
        'toggle-wrapper',
        { [state + '']: state },
        ...generalClasses(props)
      )}
    >
      {isAfterLabel && label}
      {isAfterLabel && children}
      <input
        type={type || 'checkbox'}
        name={name}
        checked={checked}
        defaultChecked={defaultChecked}
        disabled={disabled}
        required={required}
        onChange={() => onChange?.(!checked)}
      />
      <span
        aria-hidden={true}
        className={clsx('check', {
          'after-label': isAfterLabel,
        })}
      />
      {!isAfterLabel && children}
      {!isAfterLabel && label}
    </label>
  );
}
