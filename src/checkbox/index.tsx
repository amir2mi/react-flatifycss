import React from 'react';
import clsx from 'clsx';
import styled from 'styled-components';
import { FlatifyGeneralProps } from '../interfaces';
import { generalClasses } from '../classes';

interface CheckboxProps
  extends FlatifyGeneralProps,
    Omit<React.HTMLAttributes<HTMLInputElement>, 'color' | 'onChange'> {
  checked?: boolean;
  children?: React.ReactNode;
  colorValid?: string;
  colorWarning?: string;
  colorInvalid?: string;
  label?: string;
  onChange?: (checked: boolean, event: React.ChangeEvent) => void;
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
        onChange={e => onChange?.(!checked, e)}
      />
      <span aria-hidden={true} className="check" />
      {children}
      {label}
    </CheckboxWrapper>
  );
}
