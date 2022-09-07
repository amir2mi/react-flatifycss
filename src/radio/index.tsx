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
  label?: string;
  name?: string;
  state?: 'valid' | 'warning' | 'invalid';
  value?: string | number;
}

const RadioWrapper = styled.label`
  ${({ sx }: RadioProps) => (sx ? sx : '')}
`;

export function Radio(props: RadioProps) {
  const {
    as,
    children,
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
