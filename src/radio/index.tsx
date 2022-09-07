import React from 'react';
import clsx from 'clsx';
import styled from 'styled-components';
import { FlatifyGeneralProps } from '../interfaces';
import { generalClasses } from '../classes';

interface RadioProps
  extends FlatifyGeneralProps,
    Omit<React.HTMLAttributes<HTMLInputElement>, 'color'> {
  checked?: boolean;
  children?: React.ReactNode;
  colorValid?: string;
  colorWarning?: string;
  colorInvalid?: string;
  label?: string;
  name?: string;
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
    children,
    colorValid,
    colorWarning,
    colorInvalid,
    label,
    size,
    state,
    sx,
    ...rest
  } = props;

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
      <input {...rest} type="radio" />
      <span aria-hidden={true} className="check" />
      {children}
      {label}
    </RadioWrapper>
  );
}
