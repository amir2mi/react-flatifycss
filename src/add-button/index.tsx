import React from 'react';
import clsx from 'clsx';
import styled from 'styled-components';
import { FlatifyGeneralProps } from '../interfaces';
import { generalClasses } from '../classes';

export interface AddButtonProps
  extends FlatifyGeneralProps,
    Omit<React.HTMLAttributes<HTMLElement>, 'color'> {
  active?: boolean;
  label: string;
}

const AddButtonWrapper = styled.div`
  ${({ sx }: AddButtonProps) => (sx ? sx : '')}
`;

export function AddButton(props: AddButtonProps) {
  const { active, label, ...rest } = props;

  return (
    <AddButtonWrapper
      {...rest}
      aria-label={label}
      className={clsx(
        'add-button',
        active && 'active',
        ...generalClasses(props)
      )}
    />
  );
}
