import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Accordion } from '../src';

const meta: Meta = {
  title: 'Accordion',
  component: Accordion,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;
const items = [
  { title: 'Hello', content: 'World' },
  { title: 'Hello', content: 'World' },
  { title: 'Hello', content: 'World' },
  { title: 'Hello', content: 'World' },
];
const Template: Story = (args) => <Accordion items={items} {...args} />;

export const Default = Template.bind({});

Default.args = {
  bordered: false,
  expendable: false,
};
