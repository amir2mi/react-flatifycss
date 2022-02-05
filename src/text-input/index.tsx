import React, { useState } from 'react';
import classNames from 'classnames';
import getUniqueID from '../utils/id-generator';
import { FlatifyGeneralProps } from '../interfaces';
import { generalClasses } from '../classes';
import { generalAttributes } from '../attributes';

interface TextInputProps extends FlatifyGeneralProps {
  autoComplete?: boolean;
  autoFocus?: boolean;
  floatingLabel?: boolean;
  label?: string | React.ReactNode;
  max?: number | string | undefined;
  min?: number | string | undefined;
  name?: string;
  onChange?: (value: string) => void;
  onBlur?: (value: string) => void;
  onFocus?: (value: string) => void;
  placeholder?: string;
  readOnly?: boolean | undefined;
  required?: boolean | undefined;
  status?: 'valid' | 'warning' | 'invalid';
  statusWithIcon?: boolean;
  step?: number | string | undefined;
  type: 'text' | 'password' | 'email' | 'number' | 'tel' | 'url' | 'search';
  value?: string;
}

export function TextInput(props: TextInputProps) {
  const {
    autoComplete,
    autoFocus,
    floatingLabel,
    id,
    label,
    max,
    min,
    name,
    onChange,
    onBlur,
    onFocus,
    placeholder,
    readOnly,
    required,
    status,
    statusWithIcon,
    size,
    step,
    type,
    value,
  } = props;

  const [InputValue, setInputValue] = useState<string>(value || '');
  const [isFocused, setIsFocused] = useState(false);

  const inputId = id || getUniqueID(name);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    setInputValue(value);
    onChange?.(value);
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
      {label && !floatingLabel ? (
        <label
          htmlFor={inputId}
          className={classNames('form-label', ...generalClasses({ size }))}
        >
          {label}
        </label>
      ) : null}
      <div
        className={classNames('input-wrapper', {
          'floating-label': floatingLabel,
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
          autoComplete={autoComplete ? 'on' : 'off'}
          autoFocus={autoFocus}
          id={inputId}
          type={type}
          placeholder={placeholder}
          value={InputValue}
          onChange={handleChange}
          onBlur={handleBlur}
          onFocus={handleFocus}
          max={max}
          min={min}
          step={step}
          readOnly={readOnly}
          required={required}
        />
        {label && floatingLabel ? (
          <label htmlFor={inputId} className="form-label">
            {label}
          </label>
        ) : null}
      </div>
    </>
  );
}
