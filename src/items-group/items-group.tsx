import React from 'react';
import clsx from 'clsx';
import styled from 'styled-components';
import { FlatifyGeneralProps } from '../interfaces';
import { generalClasses } from '../classes';
import Item from './item';

interface itemProps {
  activeClassName?: string;
  className?: string;
  subtitle?: string;
  svg?: React.ReactNode;
  title: string;
  value: string | number;
}

interface ItemsGroupProps
  extends FlatifyGeneralProps,
    Omit<React.HTMLAttributes<HTMLElement>, 'color' | 'onChange'> {
  children?: React.ReactNode;
  items?: itemProps[];
  onChange?: (value: any) => void;
  value: string | number;
}

const ItemsGroupWrapper = styled.div`
  ${({ sx }: ItemsGroupProps) => (sx ? sx : '')}
`;

export default function ItemsGroup(props: ItemsGroupProps) {
  const { children, items, onChange, value, ...rest } = props;

  return (
    <ItemsGroupWrapper
      {...rest}
      className={clsx('items-group', ...generalClasses(props))}
    >
      {items &&
        items.map((item, index) => {
          const { value: itemValue } = item;
          const isActive = itemValue === value;

          return (
            <Item
              key={`${itemValue}_${index}`}
              {...item}
              active={isActive}
              onClick={onChange}
            />
          );
        })}

      {React.Children.map(children, (child: any) => {
        return React.cloneElement(child, {
          active: child.props?.value === value,
          onClick: onChange,
        });
      })}
    </ItemsGroupWrapper>
  );
}
