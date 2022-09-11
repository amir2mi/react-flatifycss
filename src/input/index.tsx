import React, { useState } from 'react';
import clsx from 'clsx';
import styled from 'styled-components';
import getUniqueID from '../utils/id-generator';
import { FlatifyGeneralProps } from '../interfaces';
import { generalClasses } from '../classes';

export interface InputProps
  extends FlatifyGeneralProps,
    Omit<
      React.InputHTMLAttributes<HTMLInputElement>,
      'size' | 'color' | 'onChange' | 'onBlur' | 'onFocus'
    > {
  children?: React.ReactNode;
  colorValid?: string;
  colorWarning?: string;
  colorInvalid?: string;
  hasFloatingLabel?: boolean;
  label?: React.ReactNode;
  onChange?: (
    value: string,
    event: React.ChangeEvent<HTMLInputElement>
  ) => void;
  onBlur?: (value: string, event: React.FocusEvent<HTMLInputElement>) => void;
  onFocus?: (value: string, event: React.FocusEvent<HTMLInputElement>) => void;
  state?: 'default' | 'valid' | 'warning' | 'invalid';
  stateIcon?: boolean;
  togglePassword?: boolean;
  togglePasswordLabel?: string;
  wrapperClassName?: string;
}

const InputWrapper = styled.div`
${({ colorValid }: InputProps) =>
  colorValid
    ? `--flatify__form-element-border-color__valid: ${colorValid};`
    : ''}
${({ colorWarning }: InputProps) =>
  colorWarning
    ? `--flatify__form-element-border-color__warning: ${colorWarning};`
    : ''}
${({ colorInvalid }: InputProps) =>
  colorInvalid
    ? `--flatify__form-element-border-color__invalid: ${colorInvalid};`
    : ''}  
${({ sx }: InputProps) => (sx ? sx : '')}
`;

export function Input(props: InputProps) {
  const {
    as,
    children,
    colorValid,
    colorWarning,
    colorInvalid,
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
    sx,
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

  let inputType: string = type || 'text';
  if (togglePassword) {
    inputType = isPassword ? 'password' : 'text';
  }

  return (
    <>
      {label && !hasFloatingLabel ? (
        <label
          htmlFor={inputId}
          className={clsx('form-label', ...generalClasses({ size }))}
        >
          {label}
        </label>
      ) : null}
      <InputWrapper
        as={as}
        sx={sx}
        colorValid={colorValid}
        colorWarning={colorWarning}
        colorInvalid={colorInvalid}
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
          value={value === undefined ? InputValue : value}
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
      </InputWrapper>
    </>
  );
}
