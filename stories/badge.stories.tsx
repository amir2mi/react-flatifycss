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

const Template: Story = (args) => <Badge {...args} />;

export const Default = Template.bind({});
export const Pulse = Template.bind({});

Default.args = {
  children: 'Hello',
};

Pulse.args = {
  children: 'Hello',
  pulse: true,
  theme: 'red',
};
