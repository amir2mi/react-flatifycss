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

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {
  disabled: false,
  isButton: false,
  isFlipped: false,
  label: 'Arrow button',
  onClick: () => alert('Clicked!'),
};
