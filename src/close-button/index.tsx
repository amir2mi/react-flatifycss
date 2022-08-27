import React from 'react';
import clsx from 'clsx';
import styled from 'styled-components';
import { FlatifyGeneralProps } from '../interfaces';
import { generalClasses } from '../classes';

interface CloseButtonProps
  extends FlatifyGeneralProps,
    Omit<React.HTMLAttributes<HTMLButtonElement>, 'color'> {
  isButton?: boolean;
  label: string;
}

const CloseButtonWrapper = styled.button`
  ${({ sx }: CloseButtonProps) => (sx ? sx : '')}
`;

export function CloseButton(props: CloseButtonProps) {
  const { isButton, label, ...rest } = props;

  return (
    <CloseButtonWrapper
      {...rest}
      aria-label={label}
      className={clsx(
        'close-button',
        {
          button: isButton,
        },
        ...generalClasses(props)
      )}
    />
  );
}
