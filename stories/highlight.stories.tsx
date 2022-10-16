import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Highlight } from '../src';

const meta: Meta = {
  title: 'Content/Highlight',
  component: Highlight,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story = args => (
  <p>
    One morning, when Gregor Samsa <Highlight {...args}>troubled</Highlight>{' '}
    woke from troubled dreams.
  </p>
);

export const Default = Template.bind({});
export const Inline = Template.bind({});
export const Custom = Template.bind({});

Inline.args = {
  inline: true,
};

Custom.args = {
  className: 'color-light-light anim-hue',
  inline: true,
  sx: `
    --flatify__local-bg-color: linear-gradient(to right, #dce35b, #45b649) !important;
  `,
};
