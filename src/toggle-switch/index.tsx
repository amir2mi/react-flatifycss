import React from 'react';
import classNames from 'classnames';
import { FlatifyGeneralProps } from '../interfaces';
import { generalClasses } from '../classes';
import { generalAttributes } from '../attributes';

interface ToggleSwitchProps extends FlatifyGeneralProps {
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
  children?: string | React.ReactNode;
  label?: string;
  name?: string;
  onChange?: (checked: boolean) => void;
  required?: boolean | undefined;
  state?: 'valid' | 'warning' | 'invalid';
}

export function ToggleSwitch(props: ToggleSwitchProps) {
  const {
    checked,
    defaultChecked,
    disabled,
    children,
    label,
    name,
    onChange,
    required,
    state,
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
      <input
        type="checkbox"
        name={name}
        checked={checked}
        defaultChecked={defaultChecked}
        disabled={disabled}
        required={required}
        onChange={() => onChange?.(!checked)}
      />
      <span aria-hidden={true} className="check" />
      {children}
      {label}
    </label>
  );
}
