import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react';
import { Input } from '../src';
import InputPage from './input.mdx';

const meta: Meta = {
  title: 'Forms/Input',
  component: Input,
  parameters: {
    controls: { expanded: true },
    docs: {
      page: InputPage,
    },
  },
};

export default meta;

const Template: Story = args => (
  <Input id="story-input" type="text" {...args} />
);

const StatesTemplate: Story = args => (
  <>
    <Input
      id="story-input-invalid"
      {...args}
      type="text"
      state="invalid"
      stateIcon={true}
    />
    <Input
      id="story-input-warning"
      {...args}
      type="text"
      state="warning"
      stateIcon={true}
    />
    <Input
      id="story-input-valid"
      {...args}
      type="text"
      state="valid"
      stateIcon={true}
    />
  </>
);

const ValidationTemplate: Story = args => {
  const [pass, setPass] = useState('');
  const [state, setState] = useState<
    'default' | 'valid' | 'warning' | 'invalid'
  >('default');
  const [err, setErr] = useState('');

  const handleOnChange = (value, event) => {
    setPass(value);

    if (value.length >= 8) {
      if (/[a-zA-Z]/.test(value)) {
        setState('valid');
        setErr('You chose the ✨PERFECT✨ password!');
      } else {
        setState('warning');
        setErr('You can add some letters as well!');
      }
    } else {
      setState('invalid');
      setErr('Password length should be more than 8 chars.');
    }
  };

  return (
    <>
      <Input
        {...args}
        stateIcon
        id="story-input"
        label="Enter a strong Password!"
        type="password"
        state={state}
        value={pass}
        onChange={handleOnChange}
      />
      <p className="help-text size-sm">{err}</p>
    </>
  );
};

export const Default = Template.bind({});
export const FloatingLabel = Template.bind({});
export const Number = Template.bind({});
export const Range = Template.bind({});
export const Password = Template.bind({});
export const SearchBar = Template.bind({});
export const States = StatesTemplate.bind({});
export const Validation = ValidationTemplate.bind({});
export const Uncontrolled = Template.bind({});

Default.args = {
  autoComplete: true,
  autoFocus: true,
  label: 'Your name',
  name: 'name',
  placeholder: 'Enter your name',
  type: 'text',
  onChange: value => console.log(value),
  onFocus: value => console.log(value),
  onBlur: value => console.log(value),
};

FloatingLabel.args = {
  ...Default.args,
  hasFloatingLabel: true,
};

Number.args = {
  ...Default.args,
  label: 'Your age',
  placeholder: 'Enter your age',
  type: 'number',
  min: 0,
  max: 100,
  step: 10,
};

Range.args = {
  ...Default.args,
  label: 'Your age',
  placeholder: 'Enter your age',
  type: 'range',
  min: 0,
  max: 100,
  step: 10,
};

Password.args = {
  ...Default.args,
  type: 'password',
  togglePassword: true,
  togglePasswordLabel: 'Show/Hide password',
};

SearchBar.args = {
  ...Default.args,
  type: 'search',
  children: <button className="search-button" aria-label="Search"></button>,
  wrapperClassName: 'search-bar',
  theme: 'light',
};

Uncontrolled.args = {
  value: 'Change me with [value] attribute!',
};

Validation.args = {
  colorValid: '#A0CECB',
  colorWarning: '#8067B7',
  colorInvalid: '#EC87C0',
};
