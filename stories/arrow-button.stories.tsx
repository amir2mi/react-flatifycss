import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react';
import { ArrowButton } from '../src';

const meta: Meta = {
  title: 'Components/Arrow button',
  component: ArrowButton,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story = args => {
  const [flipped, setFlipped] = useState(false);
  return (
    <ArrowButton
      {...args}
      label="Arrow button"
      isFlipped={flipped}
      onClick={() => setFlipped(old => !old)}
    />
  );
};

export const Default = Template.bind({});
export const Button = Template.bind({});
export const Directions = Template.bind({});

Default.args = {
  isButton: false,
  label: 'Arrow button',
};

Button.args = {
  isButton: true,
  label: 'Arrow button',
};

Directions.args = {
  isButton: true,
  direction: 'right',
  label: 'Arrow button',
};
