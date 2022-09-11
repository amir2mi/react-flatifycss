import React, { useState } from 'react';
import clsx from 'clsx';
import styled from 'styled-components';
import getUniqueID from '../utils/id-generator';
import { FlatifyGeneralProps } from '../interfaces';
import { generalClasses } from '../classes';

export interface SelectOptionProps {
  label?: string;
  value?: string;
  options?: SelectSubOptionProps[];
}

export interface SelectSubOptionProps {
  label?: string;
  value?: string;
}

export interface SelectProps
  extends FlatifyGeneralProps,
    Omit<
      React.HTMLAttributes<HTMLSelectElement>,
      'color' | 'onChange' | 'value'
    > {
  defaultValue?: string | string[];
  inlineLabel?: boolean;
  id?: string;
  options: SelectOptionProps[];
  label?: string;
  multiple?: boolean;
  name?: string;
  onChange?: (
    value: string | string[],
    event: React.ChangeEvent<HTMLSelectElement>
  ) => void;
  value?: string | string[];
}

const SelectWrapper = styled.select`
  ${({ sx }: SelectProps) => (sx ? sx : '')}
`;

function SelectOption({ value, label }: SelectOptionProps) {
  return <option value={value}>{label || value}</option>;
}

export function Select(props: SelectProps) {
  const {
    defaultValue,
    id,
    inlineLabel,
    options,
    label,
    multiple,
    onChange,
    size,
    value,
    ...rest
  } = props;

  const [selected, setSelected] = useState<string | string[]>(
    multiple ? [] : ''
  );

  const selectId: string = id || getUniqueID(options.length + String(label));

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { selectedOptions, value } = event.target;

    const options = multiple
      ? Array.from(selectedOptions, option => option.value)
      : value;

    onChange?.(options, event);
    setSelected(options);
  };

  /*
   * set the value with this order priority:
   * #1 controlled select
   * #2 uncontrolled select (if has local value set already)
   * #3 default value
   */
  const selectValue = value || (selected.length && selected) || defaultValue;

  return (
    <>
      {label && (
        <label
          htmlFor={selectId}
          className={clsx(
            'form-label',
            inlineLabel && 'inline',
            ...generalClasses({ size })
          )}
        >
          {label}
        </label>
      )}
      <SelectWrapper
        {...rest}
        id={selectId}
        className={clsx(...generalClasses(props))}
        multiple={multiple}
        value={selectValue}
        onChange={handleChange}
      >
        {options.length &&
          options.map((option: SelectOptionProps) => {
            const { label: subLabel, options: subOptions } = option;
            if (subOptions && subOptions.length) {
              return (
                <optgroup label={subLabel}>
                  {subOptions.map((subOption: SelectSubOptionProps) => (
                    <SelectOption key={subOption.value} {...subOption} />
                  ))}
                </optgroup>
              );
            } else {
              return <SelectOption key={option.value} {...option} />;
            }
          })}
      </SelectWrapper>
    </>
  );
}
