import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Badge } from '../src';

const meta: Meta = {
  title: 'Components/Badge',
  component: Badge,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story = args => <Badge {...args} />;

export const Default = Template.bind({});
export const Pulse = Template.bind({});
export const Customized = Template.bind({});

Default.args = {
  children: 'Hello',
};

Pulse.args = {
  children: '+99',
  pulse: true,
  theme: 'green',
};

Customized.args = {
  as: 'button',
  className: 'button color-light',
  children: '+99',
  pulse: true,
  sx: 'background: linear-gradient(to right, #833ab4, #fd1d1d, #fcb045);',
};
