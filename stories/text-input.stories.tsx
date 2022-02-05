import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Input } from '../src';

const meta: Meta = {
  title: 'Input',
  component: Input,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story = (args) => <Input type="text" {...args} />;
const StatesTemplate: Story = () => (
  <>
    <Input type="text" state="invalid" stateIcon={true} />
    <Input type="text" state="warning" stateIcon={true} />
    <Input type="text" state="valid" stateIcon={true} />
  </>
);

export const Default = Template.bind({});
export const FloatingLabel = Template.bind({});
export const Number = Template.bind({});
export const Password = Template.bind({});
export const States = StatesTemplate.bind({});

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

Number.args = {
  ...Default.args,
  type: 'number',
  min: 0,
  max: 100,
  step: 10,
};
