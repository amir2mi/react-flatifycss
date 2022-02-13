import React, { useState } from 'react';
import classNames from 'classnames';
import getUniqueID from '../utils/id-generator';
import { FlatifyGeneralProps } from '../interfaces';
import { generalClasses } from '../classes';
import { generalAttributes } from '../attributes';

interface InputProps extends FlatifyGeneralProps {
  autoComplete?: boolean;
  autoFocus?: boolean;
  children?: string | React.ReactNode;
  hasFloatingLabel?: boolean;
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
  state?: 'valid' | 'warning' | 'invalid';
  stateIcon?: boolean;
  step?: number | string | undefined;
  togglePassword?: boolean;
  togglePasswordLabel?: string;
  type: 'text' | 'password' | 'email' | 'number' | 'tel' | 'url' | 'search';
  value?: string;
  wrapperClassName?: string;
}

export function Input(props: InputProps) {
  const {
    autoComplete,
    autoFocus,
    children,
    hasFloatingLabel,
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
    state,
    stateIcon,
    size,
    step,
    togglePassword,
    togglePasswordLabel,
    type,
    value,
    wrapperClassName,
  } = props;

  const [InputValue, setInputValue] = useState<string>('');
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [isPassword, setTogglePassword] = useState<boolean>(true);

  const inputId: string = id || getUniqueID(name);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    setInputValue(value);
    onChange?.(value);
  };

  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    const { value } = event.target;

    setIsFocused(false);
    onBlur?.(value);
  };

  const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
    const { value } = event.target;

    setIsFocused(true);
    onFocus?.(value);
  };

  let inputType: string;
  if (togglePassword) {
    inputType = isPassword ? 'password' : 'text';
  } else inputType = type;

  return (
    <>
      {label && !hasFloatingLabel ? (
        <label
          htmlFor={inputId}
          className={classNames(
            'form-label',

            ...generalClasses({ size })
          )}
        >
          {label}
        </label>
      ) : null}
      <div
        className={classNames(
          'input-wrapper',
          wrapperClassName,
          {
            'floating-label': hasFloatingLabel,
            'toggle-password': togglePassword,
            'visible-password': !isPassword,
            [state + '']: state && stateIcon,
          },
          ...generalClasses({ size })
        )}
      >
        <input
          {...generalAttributes(props)}
          className={classNames(
            'text-input',
            {
              'is-focused': isFocused,
              [state + '']: state && !stateIcon,
            },
            ...generalClasses(props)
          )}
          autoComplete={autoComplete ? 'on' : 'off'}
          autoFocus={autoFocus}
          id={inputId}
          type={inputType}
          placeholder={placeholder}
          value={value || InputValue}
          onChange={handleChange}
          onBlur={handleBlur}
          onFocus={handleFocus}
          max={max}
          min={min}
          step={step}
          readOnly={readOnly}
          required={required}
        />
        {label && hasFloatingLabel ? (
          <label htmlFor={inputId} className="form-label">
            {label}
          </label>
        ) : null}
        {togglePassword && (
          <button
            className="show-password-button"
            aria-label={togglePasswordLabel}
            onClick={() => setTogglePassword((old) => !old)}
          />
        )}
        {children}
      </div>
    </>
  );
}
