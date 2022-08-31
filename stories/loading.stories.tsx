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

const Template: Story = args => <Loading {...args} />;

export const Default = Template.bind({});
export const Spinner = Template.bind({});
export const Duration = Template.bind({});
export const Stopped = Template.bind({});
export const Customized = Template.bind({});

Stopped.args = {
  stopped: true,
};

Spinner.args = {
  spinner: true,
};

Duration.args = {
  spinner: true,
  duration: 5000,
};

Customized.args = {
  duration: 750,
  dotWidth: '0.5em',
  dotHeight: '1em',
  color: 'orange',
  dotStartScale: 0.25,
};
