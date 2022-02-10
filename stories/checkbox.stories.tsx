import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Checkbox } from '../src';

const meta: Meta = {
  title: 'Inputs/Checkbox',
  component: Checkbox,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story = (args) => (
  <Checkbox checked {...args}>
    I Agree to Privacy Policy.
  </Checkbox>
);

export const Default = Template.bind({});
export const Checked = Template.bind({});
export const Disabled = Template.bind({});

Default.args = {
  checked: false,
};

Checked.args = {
  checked: true,
};

Disabled.args = {
  checked: false,
  disabled: true,
};
