import React from 'react';
import { Meta, Story } from '@storybook/react';
import { ButtonGroup, Button } from '../src';

const meta: Meta = {
  title: 'Buttons/Button group',
  component: ButtonGroup,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story = args => {
  const { bordered, colorful } = args;
  return (
    <ButtonGroup {...args}>
      <Button bordered={bordered} theme={colorful && 'blue-light'}>
        Home
      </Button>
      <Button bordered={bordered} theme={colorful && 'green-light'}>
        Videos
      </Button>
      <Button bordered={bordered} theme={colorful && 'orange-light'}>
        Podcasts
      </Button>
    </ButtonGroup>
  );
};

export const Default = Template.bind({});
export const Vertical = Template.bind({});
export const Bordered = Template.bind({});
export const Colorful = Template.bind({});

Default.args = {
  vertical: false,
};

Vertical.args = {
  vertical: true,
};

Bordered.args = {
  bordered: true,
};

Colorful.args = {
  colorful: true,
  bordered: true,
};
