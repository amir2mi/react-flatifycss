import React, { useState } from 'react';
import classNames from 'classnames';
import getUniqueID from '../utils/id-generator';
import { FlatifyGeneralProps } from '../interfaces';
import { generalClasses } from '../classes';
import { generalAttributes } from '../attributes';

interface TextInputProps extends FlatifyGeneralProps {
  autocomplete?: 'on' | 'off';
  autoFocus?: boolean;
  label?: string | React.ReactNode;
  name?: string;
  onChange?: (value: string) => void;
  onBlur?: (value: string) => void;
  onFocus?: (value: string) => void;
  placeholder?: string;
  status?: 'valid' | 'warning' | 'invalid';
  statusWithIcon?: boolean;
  type?: 'text' | 'password' | 'email' | 'number' | 'tel' | 'url' | 'search';
  value?: string;
}

export function TextInput(props: TextInputProps) {
  const {
    autocomplete,
    autoFocus,
    id,
    label,
    name,
    placeholder,
    value,
    onChange,
    onBlur,
    onFocus,
    status,
    statusWithIcon,
    type,
  } = props;

  const [isFocused, setIsFocused] = useState(false);

  const inputId = id || getUniqueID(name);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(event.target.value);
  };

  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(false);
    onBlur?.(event.target.value);
  };

  const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(true);
    onFocus?.(event.target.value);
  };

  return (
    <>
      {label && (
        <label htmlFor={inputId} className="form-label">
          {label}
        </label>
      )}
      <div
        className={classNames('input-wrapper', {
          [status + '']: status && statusWithIcon,
        })}
      >
        <input
          {...generalAttributes(props)}
          className={classNames(
            'text-input',
            {
              'is-focused': isFocused,
              [status + '']: status && !statusWithIcon,
            },
            ...generalClasses(props)
          )}
          autoComplete={autocomplete}
          autoFocus={autoFocus}
          id={inputId}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
          onBlur={handleBlur}
          onFocus={handleFocus}
        />
      </div>
    </>
  );
}
