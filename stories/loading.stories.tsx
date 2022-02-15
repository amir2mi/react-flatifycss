import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Loading } from '../src';

const meta: Meta = {
  title: 'Components/Loading',
  component: Loading,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story = (args) => <Loading {...args} />;

export const Default = Template.bind({});
export const Stopped = Template.bind({});

Stopped.args={
  isStopped: true,
}