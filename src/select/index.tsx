import React, { useState } from 'react';
import clsx from 'clsx';
import styled from 'styled-components';
import { FlatifyGeneralProps } from '../interfaces';
import { generalClasses } from '../classes';

interface SelectOptionProps {
  label?: string;
  value?: string;
  options?: SelectSubOptionProps[];
}

interface SelectSubOptionProps {
  label?: string;
  value?: string;
}

interface SelectProps
  extends FlatifyGeneralProps,
    Omit<
      React.HTMLAttributes<HTMLSelectElement>,
      'color' | 'onChange' | 'value'
    > {
  defaultValue?: string | string[];
  inlineLabel?: boolean;
  id: string;
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
          htmlFor={id}
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
        id={id}
        className={clsx(...generalClasses(props))}
        multiple={multiple}
        value={selectValue}
        onChange={handleChange}
      >
        {options.length &&
          options.map(
            ({ options: subOptions, ...restOptions }: SelectOptionProps) => {
              if (subOptions && subOptions.length) {
                return (
                  <optgroup label={label}>
                    {subOptions.map((subOption: SelectSubOptionProps) => (
                      <SelectOption key={subOption.value} {...subOption} />
                    ))}
                  </optgroup>
                );
              } else {
                return (
                  <SelectOption key={restOptions.value} {...restOptions} />
                );
              }
            }
          )}
      </SelectWrapper>
    </>
  );
}
