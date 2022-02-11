import React from 'react';
import classNames from 'classnames';
import { FlatifyGeneralProps } from '../interfaces';
import { generalClasses } from '../classes';
import { generalAttributes } from '../attributes';

interface itemProps {
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
      className={classNames('items-group', ...generalClasses(props))}
    >
      {items.map((item) => {
        const { subtitle, svg, title, value: itemValue } = item;

        return (
          <button
            className={`item-button${itemValue === value ? ' active' : ''}`}
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
