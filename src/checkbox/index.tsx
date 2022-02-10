import React from 'react';
import classNames from 'classnames';
import { FlatifyGeneralProps } from '../interfaces';
import { generalClasses } from '../classes';
import { generalAttributes } from '../attributes';

interface CheckboxProps extends FlatifyGeneralProps {
  checked: boolean;
  disabled?: boolean;
  children?: string | React.ReactNode;
  label?: string;
  onClick?: (checked: boolean) => void;
  state?: 'valid' | 'warning' | 'invalid';
}

export function Checkbox(props: CheckboxProps) {
  const { checked, disabled, children, label, onClick, state } = props;

  return (
    <label
      {...generalAttributes(props)}
      className={classNames(
        'checkbox-wrapper',
        { [state + '']: state },
        ...generalClasses(props)
      )}
      // if the checkbox is disabled, returned value should not be changed
      onClick={() => onClick?.(disabled ? checked : !checked)}
    >
      <input type="checkbox" checked={checked} disabled={disabled} />
      <span aria-hidden={true} className="check" />
      {children}
      {label}
    </label>
  );
}
