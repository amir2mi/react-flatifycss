import React from 'react';
import classNames from 'classnames';
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
      className={classNames(
        'toggle-wrapper',
        { [state + '']: state },
        ...generalClasses(props)
      )}
    >
      {isAfterLabel && label}
      <input
        type={type || 'checkbox'}
        name={name}
        checked={checked}
        defaultChecked={defaultChecked}
        disabled={disabled}
        required={required}
        onChange={() => onChange?.(!checked)}
      />
      <span aria-hidden={true} className="check" />
      {children}
      {!isAfterLabel && label}
    </label>
  );
}
