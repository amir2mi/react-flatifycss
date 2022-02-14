import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react';
import { ToggleSwitch } from '../src';

const meta: Meta = {
  title: 'Inputs/ToggleSwitch',
  component: ToggleSwitch,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story = (args) => {
  const [checked, setChecked] = useState(false);

  return (
    <ToggleSwitch
      {...args}
      type="checkbox"
      checked={checked}
      onChange={(value) => setChecked(value)}
    >
      I Agree to Privacy Policy.
    </ToggleSwitch>
  );
};

export const Default = Template.bind({});
export const Disabled = Template.bind({});
export const AfterLabel = Template.bind({});

Disabled.args = {
  checked: false,
  disabled: true,
};

AfterLabel.args = {
  isAfterLabel: true,
};