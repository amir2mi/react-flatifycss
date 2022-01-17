import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Button } from '../src';

const meta: Meta = {
  title: 'Button',
  component: Button,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story = (args) => <Button text="" {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});
export const Primary = Template.bind({});
export const Secondary = Template.bind({});
export const Tertiary = Template.bind({});
export const TwoLayer = Template.bind({});

Default.args = {
  text: 'Hello ',
  children: 'World',
  bordered: false,
  outline: false,
  disabled: false,
  onClick: () => alert('Hello World'),
};

Primary.args = {
  ...Default.args,
  variant: 'primary',
};

Secondary.args = {
  ...Default.args,
  variant: 'secondary',
};

Tertiary.args = {
  ...Default.args,
  variant: 'tertiary',
};

TwoLayer.args = {
  ...Default.args,
  secondaryText: 'Secondary',
};
