import React, { forwardRef } from 'react';
import clsx from 'clsx';
import styled from 'styled-components';
import { FlatifyGeneralProps } from '../interfaces';
import { generalClasses } from '../classes';

export interface ToggleSwitchProps
  extends FlatifyGeneralProps,
    Omit<
      React.InputHTMLAttributes<HTMLInputElement>,
      'color' | 'onChange' | 'size'
    > {
  checked?: boolean;
  children?: React.ReactNode;
  colorValid?: string;
  colorWarning?: string;
  colorInvalid?: string;
  disabled?: boolean;
  isAfterLabel?: boolean;
  label?: string;
  name?: string;
  onChange?: (
    event: React.ChangeEvent<HTMLInputElement>,
    checked: boolean,
    value: string | number | undefined | null
  ) => void;
  state?: 'valid' | 'warning' | 'invalid';
  type?: 'checkbox' | 'radio';
  value?: string | number;
}

const ToggleSwitchWrapper = styled.label`
  ${({ colorValid }: ToggleSwitchProps) =>
    colorValid
      ? `--flatify__form-element-border-color__valid: ${colorValid};`
      : ''}
  ${({ colorWarning }: ToggleSwitchProps) =>
    colorWarning
      ? `--flatify__form-element-border-color__warning: ${colorWarning};`
      : ''}
  ${({ colorInvalid }: ToggleSwitchProps) =>
    colorInvalid
      ? `--flatify__form-element-border-color__invalid: ${colorInvalid};`
      : ''}  
  ${({ sx }: ToggleSwitchProps) => (sx ? sx : '')}
`;

export const ToggleSwitch = forwardRef(
  (
    props: ToggleSwitchProps,
    ref: React.LegacyRef<HTMLInputElement> | undefined
  ) => {
    const {
      as,
      checked,
      children,
      colorValid,
      colorWarning,
      colorInvalid,
      id,
      label,
      isAfterLabel,
      onChange,
      size,
      state,
      sx,
      type,
      value,
      ...rest
    } = props;

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      // if checked is passed toggle its bool, otherwise send event value
      const isChecked =
        typeof checked != 'undefined' ? !checked : e.target.checked;
      onChange?.(e, isChecked, value);
    };

    return (
      <ToggleSwitchWrapper
        as={as}
        id={id}
        sx={sx}
        colorValid={colorValid}
        colorWarning={colorWarning}
        colorInvalid={colorInvalid}
        className={clsx(
          'toggle-wrapper',
          { [state + '']: state },
          ...generalClasses(props)
        )}
      >
        {isAfterLabel && label}
        {isAfterLabel && children}
        <input
          {...rest}
          ref={ref}
          role="switch"
          type={type || 'checkbox'}
          aria-checked={checked}
          checked={checked}
          value={value}
          onChange={handleOnChange}
        />
        <span
          aria-hidden={true}
          className={clsx('check', {
            'after-label': isAfterLabel,
          })}
        />
        {!isAfterLabel && children}
        {!isAfterLabel && label}
      </ToggleSwitchWrapper>
    );
  }
);
