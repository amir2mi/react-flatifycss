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

const Template: Story = (args) => {
  const [checked, setChecked] = useState(false);

  return (
    <Checkbox
      {...args}
      checked={checked}
      onChange={(value) => setChecked(value)}
    >
      I Agree to Privacy Policy.
    </Checkbox>
  );
};

export const Default = Template.bind({});
export const Disabled = Template.bind({});

Disabled.args = {
  checked: false,
  disabled: true,
};
