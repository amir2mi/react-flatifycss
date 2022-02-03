import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Dropdown } from '../src';

const meta: Meta = {
  title: 'Dropdown',
  component: Dropdown,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story = (args) => <Dropdown {...args} />;

export const Default = Template.bind({});
export const Expendable = Template.bind({});
export const Bordered = Template.bind({});
export const Customized = Template.bind({});

Default.args = {
  
};