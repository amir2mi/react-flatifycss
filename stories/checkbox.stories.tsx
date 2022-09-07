import React, { useState } from 'react';
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

const Template: Story = args => {
  const [checked, setChecked] = useState(false);

  return (
    <Checkbox {...args} checked={checked} onChange={value => setChecked(value)}>
      I Agree to Privacy Policy.
    </Checkbox>
  );
};

export const Default = Template.bind({});
export const Disabled = Template.bind({});
export const States = Template.bind({});
export const Customized = Template.bind({});

Disabled.args = {
  checked: false,
  disabled: true,
};

States.args = {
  state: 'invalid',
};

Customized.args = {
  state: 'invalid',
  colorValid: '#A0CECB',
  colorWarning: '#8067B7',
  colorInvalid: '#EC87C0',
};
