import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react';
import { Radio } from '../src';
import RadioPage from './radio.mdx';

const meta: Meta = {
  title: 'Forms/Radio',
  component: Radio,
  parameters: {
    controls: { expanded: true },
    docs: {
      page: RadioPage,
    },
  },
};

export default meta;

const Template: Story = args => {
  const [checked, setChecked] = useState(false);

  return (
    <>
      <Radio
        {...args}
        name="my-radio"
        checked={checked}
        onChange={() => setChecked(!checked)}
      >
        I Agree to Privacy Policy.
      </Radio>
      <p className="help-text size-xs" style={{ fontFamily: 'monospace' }}>
        Agreement: {checked ? 'YES' : 'NO'}
      </p>
    </>
  );
};

const UncontrolledTemplate: Story = args => (
  <Radio
    {...args}
    name="my-radio"
    defaultChecked={false}
    onChange={(e, checked) => alert('Radio value is: ' + checked)}
  >
    I Agree to Privacy Policy.
  </Radio>
);

const TemplateMultiple: Story = args => {
  const [checked, setChecked] = useState<any>('pizza');

  return (
    <>
      <Radio
        {...args}
        value="pizza"
        checked={checked == 'pizza'}
        onChange={(e, checked, value) => setChecked(value)}
      >
        Pizza
      </Radio>
      <Radio
        {...args}
        value="sushi"
        checked={checked == 'sushi'}
        onChange={(e, checked, value) => setChecked(value)}
      >
        Sushi
      </Radio>
      <p className="help-text size-xs" style={{ fontFamily: 'monospace' }}>
        Your dinner will be: {checked}
      </p>
    </>
  );
};

export const Default = Template.bind({});
export const Uncontrolled = UncontrolledTemplate.bind({});
export const Multiple = TemplateMultiple.bind({});
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
  checked: false,
  disabled: true,
  colorValid: '#A0CECB',
  colorWarning: '#EC87C0',
  colorInvalid: '#8067B7',
};
