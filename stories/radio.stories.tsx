import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react';
import { Radio } from '../src';

const meta: Meta = {
  title: 'Inputs/Radio',
  component: Radio,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story = (args) => {
  const [checked, setChecked] = useState(false);

  return (
    <Radio {...args} checked={checked} onChange={(value) => setChecked(value)}>
      I Agree to Privacy Policy.
    </Radio>
  );
};

const TemplateMultiple: Story = (args) => {
  const [checked, setChecked] = useState(false);

  return (
    <>
      <Radio
        {...args}
        name="my-radio"
        checked={checked}
        onChange={(value) => setChecked(value)}
      >
        I Agree to Privacy Policy.
      </Radio>
      <Radio
        {...args}
        name="my-radio"
        checked={checked}
        onChange={(value) => setChecked(value)}
      >
        I Agree to Privacy Policy.
      </Radio>
    </>
  );
};

export const Default = Template.bind({});
export const Multiple = TemplateMultiple.bind({});
export const Disabled = Template.bind({});

Disabled.args = {
  checked: false,
  disabled: true,
};
