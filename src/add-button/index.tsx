import React, { ElementType } from 'react';
import clsx from 'clsx';
import styled from 'styled-components';
import { FlatifyGeneralProps } from '../interfaces';
import { generalClasses } from '../classes';
import { generalAttributes } from '../attributes';

interface AddButtonProps extends FlatifyGeneralProps {
  active?: boolean;
  label: string;
  onClick?: () => void;
  tagName?: ElementType;
}

const AddButtonWrapper = styled.div`
  ${({ sx }: AddButtonProps) => (sx ? sx : '')}
`;

export function AddButton(props: AddButtonProps) {
  const { active, label, tagName, ...rest } = props;

  return (
    <AddButtonWrapper
      {...generalAttributes(props)}
      {...rest}
      as={tagName}
      aria-label={label}
      className={clsx(
        'add-button',
        active && 'active',
        ...generalClasses(props)
      )}
    />
  );
}
