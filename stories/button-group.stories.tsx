import React from 'react';
import { Meta, Story } from '@storybook/react';
import { ButtonGroup, Button } from '../src';

const meta: Meta = {
  title: 'Components/Button group',
  component: ButtonGroup,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story = (args) => (
  <ButtonGroup {...args}>
    <Button>Home</Button>
    <Button>Videos</Button>
    <Button>Podcasts</Button>
  </ButtonGroup>
);

export const Default = Template.bind({});
export const Vertical = Template.bind({});

Default.args = {
  vertical: false,
};

Vertical.args = {
  vertical: true,
};
