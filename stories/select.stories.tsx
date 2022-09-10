import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Select } from '../src';

const meta: Meta = {
  title: 'Inputs/Select',
  component: Select,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const itemsDefault = [
  { label: 'Planes', value: 'planes' },
  { label: 'Cars', value: 'cars' },
  { label: 'Trains', value: 'trains' },
  { label: 'Scooter', value: 'scooter' },
  { label: 'Skates', value: 'skates' },
  { label: 'Skateboards', value: 'skateboards' },
  { label: 'Walking', value: 'walking' },
  { label: 'Talking', value: 'talking' },
];

const itemsGrouped = [
  {
    label: 'Motorized vehicles',
    options: [
      { label: 'Planes', value: 'planes' },
      { label: 'Cars', value: 'cars' },
      { label: 'Trains', value: 'trains' },
    ],
  },
  {
    label: 'Non-motorized vehicles',
    options: [
      { label: 'Scooter', value: 'scooter' },
      { label: 'Skates', value: 'skates' },
      { label: 'Skateboards', value: 'skateboards' },
    ],
  },
  { label: 'Walking', value: 'walking' },
  { label: 'Talking', value: 'talking' },
];

const Template: Story = args => (
  <Select id="storybook-select" options={itemsGrouped} {...args} />
);

export const Default = Template.bind({});
export const Grouped = Template.bind({});
export const Controlled = Template.bind({});
export const Multiple = Template.bind({});

Default.args = {
  label: 'Choose one item:',
  defaultValue: 'trains',
  options: itemsDefault,
  onChange: value => alert('Selected option is => ' + value),
};

Grouped.args = {
  label: 'Choose one item:',
  onChange: value => alert('Selected option is => ' + value),
};
Controlled.args = {
  label: 'Controlled Select (should set the value manually):',
  value: 'bikes',
  onChange: value => alert('Selected option is => ' + value),
};

Multiple.args = {
  label: 'Choose as much as you can:',
  multiple: true,
  defaultValue: ['bikes', 'trains'],
  onChange: value => {
    if (Array.isArray(value) && value.length > 1) {
      alert('Selected options are => ' + value);
    } else {
      alert('Selected option is => ' + value);
    }
  },
};
