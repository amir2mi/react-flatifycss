import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Progress } from '../src';

const meta: Meta = {
  title: 'Components/Progress',
  component: Progress,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story = args => {
  return <Progress {...args} value={args.value} />;
};

export const Default = Template.bind({});
export const Bordered = Template.bind({});
export const Processing = Template.bind({});
export const Duration = Template.bind({});
export const Customized = Template.bind({});

Default.args = {
  value: 50,
};

Bordered.args = {
  value: 50,
  bordered: true,
};

Processing.args = {
  value: 50,
  processing: true,
};

Duration.args = {
  value: 50,
  processing: true,
  duration: 300,
};

Customized.args = {
  value: 15,
  bordered: true,
  processing: true,
  theme: 'green-light',
};
