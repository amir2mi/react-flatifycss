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

export const Default = Template.bind({});
export const Primary = Template.bind({});
export const Secondary = Template.bind({});
export const Tertiary = Template.bind({});
export const TwoLayer = Template.bind({});
export const TwoLayerIcon = Template.bind({});

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

TwoLayerIcon.args = {
  ...Default.args,
  secondaryText: (
    <svg xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 16 16">
      <path d="M3.3 12.7c.2.2.4.3.7.3s.5-.1.7-.3L8 9.4l3.3 3.3c.2.2.5.3.7.3s.5-.1.7-.3c.4-.4.4-1 0-1.4L9.4 8l3.3-3.3c.4-.4.4-1 0-1.4s-1-.4-1.4 0L8 6.6 4.7 3.3c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4L6.6 8l-3.3 3.3c-.4.4-.4 1 0 1.4z"></path>
    </svg>
  ),
};
