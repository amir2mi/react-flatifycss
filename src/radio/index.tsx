import React from 'react';
import clsx from 'clsx';
import styled from 'styled-components';
import { FlatifyGeneralProps } from '../interfaces';
import { generalClasses } from '../classes';

interface RadioProps
  extends FlatifyGeneralProps,
    Omit<React.HTMLAttributes<HTMLInputElement>, 'color' | 'onChange'> {
  checked?: boolean;
  children?: React.ReactNode;
  colorValid?: string;
  colorWarning?: string;
  colorInvalid?: string;
  label?: string;
  name?: string;
  onChange?: (
    event: React.ChangeEvent<HTMLInputElement>,
    checked: boolean,
    value: string | number | undefined | null
  ) => void;
  state?: 'valid' | 'warning' | 'invalid';
  value?: string | number;
}

const RadioWrapper = styled.label`
  ${({ colorValid }: RadioProps) =>
    colorValid
      ? `--flatify__form-element-border-color__valid: ${colorValid};`
      : ''}
  ${({ colorWarning }: RadioProps) =>
    colorWarning
      ? `--flatify__form-element-border-color__warning: ${colorWarning};`
      : ''}
  ${({ colorInvalid }: RadioProps) =>
    colorInvalid
      ? `--flatify__form-element-border-color__invalid: ${colorInvalid};`
      : ''}  
  ${({ sx }: RadioProps) => (sx ? sx : '')}
`;

export function Radio(props: RadioProps) {
  const {
    as,
    checked,
    children,
    colorValid,
    colorWarning,
    colorInvalid,
    label,
    onChange,
    size,
    state,
    sx,
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
    <RadioWrapper
      as={as}
      sx={sx}
      colorValid={colorValid}
      colorWarning={colorWarning}
      colorInvalid={colorInvalid}
      className={clsx(
        'radio-wrapper',
        { [state + '']: state },
        ...generalClasses(props)
      )}
    >
      <input
        {...rest}
        type="radio"
        checked={checked}
        value={value}
        onChange={handleOnChange}
      />
      <span aria-hidden={true} className="check" />
      {children}
      {label}
    </RadioWrapper>
  );
}
