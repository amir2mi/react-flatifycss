import React, { useState } from 'react';
import clsx from 'clsx';
import getUniqueID from '../utils/id-generator';
import { FlatifyGeneralProps } from '../interfaces';
import { generalClasses } from '../classes';
import { generalAttributes } from '../attributes';

interface InputProps
  extends FlatifyGeneralProps,
    Omit<
      React.InputHTMLAttributes<HTMLInputElement>,
      'size' | 'color' | 'onChange' | 'onBlur' | 'onFocus'
    > {
  children?: React.ReactNode;
  hasFloatingLabel?: boolean;
  id: string;
  label?: React.ReactNode;
  onChange?: (
    value: string,
    event: React.ChangeEvent<HTMLInputElement>
  ) => void;
  onBlur?: (value: string, event: React.FocusEvent<HTMLInputElement>) => void;
  onFocus?: (value: string, event: React.FocusEvent<HTMLInputElement>) => void;
  state?: 'valid' | 'warning' | 'invalid';
  stateIcon?: boolean;
  togglePassword?: boolean;
  togglePasswordLabel?: string;
  type: React.HTMLInputTypeAttribute;
  src?: string | undefined;
  wrapperClassName?: string;
}

export function Input(props: InputProps) {
  const {
    children,
    hasFloatingLabel,
    id,
    label,
    name,
    onChange,
    onBlur,
    onFocus,
    size,
    state,
    stateIcon,
    togglePassword,
    togglePasswordLabel,
    type,
    value,
    wrapperClassName,
    ...rest
  } = props;

  const [InputValue, setInputValue] = useState<
    string | ReadonlyArray<string> | number | undefined
  >('');
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [isPassword, setIsPassword] = useState<boolean>(true);

  const inputId: string = id || getUniqueID(name);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setInputValue(value);
    onChange?.(value, event);
  };

  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setIsFocused(false);
    onBlur?.(value, event);
  };

  const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setIsFocused(true);
    onFocus?.(value, event);
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
          className={clsx(
            'form-label',

            ...generalClasses({ size })
          )}
        >
          {label}
        </label>
      ) : null}
      <div
        className={clsx(
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
          {...rest}
          className={clsx(
            'text-input',
            {
              'is-focused': isFocused,
              [state + '']: state && !stateIcon,
            },
            ...generalClasses(props)
          )}
          id={inputId}
          type={inputType}
          value={value || InputValue}
          onChange={handleChange}
          onBlur={handleBlur}
          onFocus={handleFocus}
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
            onClick={() => setIsPassword(old => !old)}
          />
        )}
        {children}
      </div>
    </>
  );
}
