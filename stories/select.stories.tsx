import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Select } from '../src';

const meta: Meta = {
  title: 'Select',
  component: Select,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const items = [
  { label: 'Planes', value: 'planes' },
  { label: 'Cars', value: 'cars' },
  { label: 'Trains', value: 'trains' },
  { label: 'Bikes', value: 'bikes' },
];

const Template: Story = (args) => (
  <Select id="storybook-select" items={items} {...args} />
);

export const Default = Template.bind({ active: false, label: 'Add button' });
export const Multiple = Template.bind({ active: false, label: 'Add button' });

Default.args = {
  label:"Choose one item:",
  onChange: (value) => console.log(value),
};

Multiple.args = {
  multiple: true,
  onChange: (value) => console.log(value),
};
