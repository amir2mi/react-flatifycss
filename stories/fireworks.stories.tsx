import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Fireworks } from '../src';

const meta: Meta = {
  title: 'Components/Fireworks',
  component: Fireworks,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story = args => {
  return (
    <div className="flex-center" style={{ padding: '50px 0' }}>
      <Fireworks {...args} />
    </div>
  );
};

export const Default = Template.bind({});
export const Simple = Template.bind({});

Default.args = {
  simple: false,
};

Simple.args = {
  simple: true,
};
