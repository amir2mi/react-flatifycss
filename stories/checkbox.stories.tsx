import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react';
import { Checkbox } from '../src';
import CheckboxPage from './checkbox.mdx';

const meta: Meta = {
  title: 'Inputs/Checkbox',
  component: Checkbox,
  parameters: {
    controls: { expanded: true },
    docs: {
      page: CheckboxPage,
    },
  },
};

export default meta;

const Template: Story = args => {
  const [checked, setChecked] = useState(false);

  return (
    <Checkbox
      {...args}
      checked={checked}
      onChange={(e, checked) => setChecked(checked)}
    >
      I Agree to Privacy Policy.
    </Checkbox>
  );
};

const UncontrolledTemplate: Story = args => (
  <Checkbox
    {...args}
    onChange={(e, checked) => alert('Checkbox value is: ' + checked)}
  >
    I Agree to Privacy Policy.
  </Checkbox>
);

export const Default = Template.bind({});
export const Uncontrolled = UncontrolledTemplate.bind({});
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
