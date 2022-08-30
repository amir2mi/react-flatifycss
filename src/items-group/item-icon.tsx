import React from 'react';
import clsx from 'clsx';
import styled from 'styled-components';
import { FlatifyGeneralProps } from '../interfaces';
import { generalClasses } from '../classes';

export interface ItemIconProps
  extends FlatifyGeneralProps,
    Omit<React.HTMLAttributes<HTMLElement>, 'color'> {
  children: React.ReactNode;
}

const ItemIconWrapper = styled.span`
  ${({ sx }: ItemIconProps) => (sx ? sx : '')}
`;

export default function ItemIcon(props: ItemIconProps) {
  const { children, ...rest } = props;

  return (
    <ItemIconWrapper
      {...rest}
      className={clsx('item-icon', ...generalClasses(props))}
    >
      {children}
    </ItemIconWrapper>
  );
}
