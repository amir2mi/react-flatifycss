import React from 'react';
import clsx from 'clsx';
import { FlatifyGeneralProps } from '../interfaces';
import { generalClasses } from '../classes';
import { generalAttributes } from '../attributes';

interface itemProps {
  activeClassName?: string;
  className?: string;
  subtitle?: string;
  svg?: string | React.ReactNode;
  title: string;
  value: string | number;
}

interface ItemsGroupProps extends FlatifyGeneralProps {
  items: itemProps[];
  onChange?: (value: any) => void;
  value: string | number;
}

export function ItemsGroup(props: ItemsGroupProps) {
  const { items, onChange, value } = props;

  if (!items) return null;

  return (
    <div
      {...generalAttributes(props)}
      className={clsx('items-group', ...generalClasses(props))}
    >
      {items.map(item => {
        const {
          activeClassName,
          className,
          subtitle,
          svg,
          title,
          value: itemValue,
        } = item;
        const isActive = itemValue === value;
        return (
          <button
            className={clsx(
              'item-button',
              className,
              {
                active: isActive,
              },
              isActive && activeClassName
            )}
            key={title}
            onClick={() => onChange?.(itemValue)}
          >
            {svg && <div className="item-icon">{svg}</div>}
            <div className="item-text">
              <p className="item-title truncate">{title}</p>
              {subtitle && <p className="item-subtitle truncate">{subtitle}</p>}
            </div>
          </button>
        );
      })}
    </div>
  );
}
