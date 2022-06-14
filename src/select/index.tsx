import React, { useState } from 'react';
import clsx from 'clsx';
import { FlatifyGeneralProps } from '../interfaces';
import { generalClasses } from '../classes';
import { generalAttributes } from '../attributes';

interface SelectItemProps {
  label: string;
  value: string;
}

interface SelectProps extends FlatifyGeneralProps {
  inlineLabel?: boolean;
  id: string;
  items: SelectItemProps[];
  label?: string;
  multiple?: boolean;
  name?: string;
  onChange?: (value: string | string[]) => void;
  value?: string | string[];
}

export function Select(props: SelectProps) {
  const {
    id,
    inlineLabel,
    items,
    label,
    multiple,
    name,
    onChange,
    size,
    value,
  } = props;

  const [selected, setSelected] = useState<string | string[]>(
    multiple ? [] : ''
  );

  // prevent error when there is no item
  if (!items) return null;

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { selectedOptions, value } = e.target;

    const selectedItems = multiple
      ? Array.from(selectedOptions, (item) => item.value)
      : value;

    onChange?.(selectedItems);
    setSelected(selectedItems);
  };

  return (
    <>
      {label && (
        <label
          htmlFor={id}
          className={clsx(
            'form-label',
            {
              inline: inlineLabel,
            },
            ...generalClasses({ size })
          )}
        >
          {label}
        </label>
      )}
      <select
        {...generalAttributes(props)}
        name={name}
        className={clsx(...generalClasses(props))}
        multiple={multiple}
        value={value || selected}
        onChange={(e) => handleChange(e)}
      >
        {items.map(({ label, value }) => (
          <option key={label} value={value}>
            {label}
          </option>
        ))}
      </select>
    </>
  );
}
