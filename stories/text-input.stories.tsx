import React from 'react';
import { Meta, Story } from '@storybook/react';
import { TextInput } from '../src';

const meta: Meta = {
  title: 'Text input',
  component: TextInput,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story = (args) => <TextInput type="text" {...args} />;

export const Default = Template.bind({});
export const FloatingLabel = Template.bind({});

Default.args = {
  autoComplete: true,
  autoFocus: true,
  label: 'Your name',
  name: 'name',
  placeholder: 'Enter your name',
  type: 'text',
  onChange: (value) => console.log(value),
};
FloatingLabel.args = {
  ...Default.args,
  floatingLabel: true,
};
