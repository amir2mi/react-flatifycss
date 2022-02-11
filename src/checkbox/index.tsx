import React from 'react';
import classNames from 'classnames';
import { FlatifyGeneralProps } from '../interfaces';
import { generalClasses } from '../classes';
import { generalAttributes } from '../attributes';

interface CheckboxProps extends FlatifyGeneralProps {
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
  children?: string | React.ReactNode;
  label?: string;
  onChange?: (checked: boolean) => void;
  state?: 'valid' | 'warning' | 'invalid';
}

export function Checkbox(props: CheckboxProps) {
  const {
    checked,
    defaultChecked,
    disabled,
    children,
    label,
    onChange,
    state,
  } = props;

  return (
    <label
      {...generalAttributes(props)}
      className={classNames(
        'checkbox-wrapper',
        { [state + '']: state },
        ...generalClasses(props)
      )}
    >
      <input
        type="checkbox"
        checked={checked}
        defaultChecked={defaultChecked}
        disabled={disabled}
        onChange={() => onChange?.(!checked)}
      />
      <span aria-hidden={true} className="check" />
      {children}
      {label}
    </label>
  );
}
