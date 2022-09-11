import React from 'react';
import clsx from 'clsx';
import styled from 'styled-components';
import { FlatifyGeneralProps } from '../interfaces';
import { generalClasses } from '../classes';

export interface CheckboxProps
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
  label?: string;
  onChange?: (
    event: React.ChangeEvent<HTMLInputElement>,
    checked: boolean
  ) => void;
  state?: 'valid' | 'warning' | 'invalid';
}

const CheckboxWrapper = styled.label`
  ${({ colorValid }: CheckboxProps) =>
    colorValid
      ? `--flatify__form-element-border-color__valid: ${colorValid};`
      : ''}
  ${({ colorWarning }: CheckboxProps) =>
    colorWarning
      ? `--flatify__form-element-border-color__warning: ${colorWarning};`
      : ''}
  ${({ colorInvalid }: CheckboxProps) =>
    colorInvalid
      ? `--flatify__form-element-border-color__invalid: ${colorInvalid};`
      : ''}  
  ${({ sx }: CheckboxProps) => (sx ? sx : '')}
`;

export function Checkbox(props: CheckboxProps) {
  const {
    as,
    checked,
    children,
    colorValid,
    colorWarning,
    colorInvalid,
    onChange,
    label,
    size,
    state,
    sx,
    ...rest
  } = props;

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // if checked is passed toggle its bool, otherwise send event value
    const isChecked =
      typeof checked != 'undefined' ? !checked : e.target.checked;
    onChange?.(e, isChecked);
  };

  return (
    <CheckboxWrapper
      as={as}
      sx={sx}
      colorValid={colorValid}
      colorWarning={colorWarning}
      colorInvalid={colorInvalid}
      className={clsx(
        'checkbox-wrapper',
        { [state + '']: state },
        ...generalClasses(props)
      )}
    >
      <input
        {...rest}
        type="checkbox"
        checked={checked}
        onChange={handleOnChange}
      />
      <span aria-hidden={true} className="check" />
      {children}
      {label}
    </CheckboxWrapper>
  );
}
