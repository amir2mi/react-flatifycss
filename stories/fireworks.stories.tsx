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

const DelayedTemplate: Story = () => {
  return (
    <div className="flex-center" style={{ padding: '50px 0' }}>
      <Fireworks delay={200} />
      <Fireworks delay={600} />
      <Fireworks delay={1200} />
    </div>
  );
};

export const Default = Template.bind({});
export const Simple = Template.bind({});
export const Duration = Template.bind({});
export const RepeatCount = Template.bind({});
export const Delayed = DelayedTemplate.bind({});
export const DynamicColor = Template.bind({});
export const Customized = Template.bind({});

Default.args = {
  simple: false,
};

Simple.args = {
  simple: true,
};

Duration.args = {
  duration: 1500,
};

RepeatCount.args = {
  repeat: 1,
};

DynamicColor.args = {
  className: 'anim-hue',
};

Customized.args = {
  sx:
    '--flatify__firework-color-main: #ffce54; --flatify__firework-color-center-top-bottom: #fc6e51; --flatify__firework-color-center-left-right: #f6bb42; --flatify__firework-color-left-top-bottom: #2ecc71; --flatify__firework-color-right-top-bottom: #ec87c0',
};
