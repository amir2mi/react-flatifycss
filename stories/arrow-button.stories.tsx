import React from 'react';
import { Meta, Story } from '@storybook/react';
import { ArrowButton } from '../src';

const meta: Meta = {
  title: 'Arrow button',
  component: ArrowButton,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story = (args) => (
  <ArrowButton label="Arrow button" {...args} />
);

export const Default = Template.bind({});

Default.args = {
  disabled: false,
  isButton: false,
  isFlipped: false,
  label: 'Arrow button',
  onClick: () => alert('Clicked!'),
};
