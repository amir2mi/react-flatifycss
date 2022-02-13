import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Input } from '../src';

const meta: Meta = {
  title: 'Inputs/Input',
  component: Input,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story = (args) => <Input type="text" {...args} />;
const StatesTemplate: Story = (args) => (
  <>
    <Input {...args} type="text" state="invalid" stateIcon={true} />
    <Input {...args} type="text" state="warning" stateIcon={true} />
    <Input {...args} type="text" state="valid" stateIcon={true} />
  </>
);

export const Default = Template.bind({});
export const FloatingLabel = Template.bind({});
export const Number = Template.bind({});
export const Password = Template.bind({});
export const SearchBar = Template.bind({});
export const States = StatesTemplate.bind({});

Default.args = {
  autoComplete: true,
  autoFocus: true,
  label: 'Your name',
  name: 'name',
  placeholder: 'Enter your name',
  type: 'text',
  onChange: (value) => console.log(value),
  onFocus: (value) => console.log(value),
  onBlur: (value) => console.log(value),
};

FloatingLabel.args = {
  ...Default.args,
  hasFloatingLabel: true,
};

Number.args = {
  ...Default.args,
  type: 'number',
  min: 0,
  max: 100,
  step: 10,
};

Password.args = {
  ...Default.args,
  togglePassword: true,
  togglePasswordLabel: 'Toggle Password',
};

SearchBar.args = {
  ...Default.args,
  children: <button className="search-button" aria-label="Search"></button>,
  wrapperClassName: 'search-bar',
  theme: 'light',
};
