import React from 'react';
import clsx from 'clsx';
import styled from 'styled-components';
import { FlatifyGeneralProps } from '../interfaces';
import { generalClasses } from '../classes';
import ItemIcon from './item-icon';

export interface ItemProps
  extends FlatifyGeneralProps,
    Omit<React.HTMLAttributes<HTMLElement>, 'color' | 'onClick'> {
  active?: boolean;
  activeClassName?: string;
  children?: React.ReactNode;
  onClick?: (value: string | number) => void;
  subtitle?: string;
  svg?: React.ReactNode;
  title: string;
  value: string | number;
}

const ItemWrapper = styled.button`
  ${({ sx }: ItemProps) => (sx ? sx : '')}
`;

export default function Item(props: ItemProps) {
  const {
    active,
    activeClassName,
    children,
    onClick,
    subtitle,
    svg,
    title,
    value,
    ...rest
  } = props;

  return (
    <ItemWrapper
      {...rest}
      onClick={() => onClick?.(value)}
      className={clsx(
        'item-button',
        active && 'active',
        active && activeClassName,
        ...generalClasses(props)
      )}
    >
      {children}
      {svg && <ItemIcon>{svg}</ItemIcon>}
      <div className="item-text">
        {title && <p className="item-title truncate">{title}</p>}
        {subtitle && <p className="item-subtitle truncate">{subtitle}</p>}
      </div>
    </ItemWrapper>
  );
}
