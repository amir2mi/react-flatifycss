import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react';
import { Button, Hamburger } from '../src';

const meta: Meta = {
  title: 'Buttons/Hamburger',
  component: Hamburger,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story = args => {
  const [active, setActive] = useState(false);
  return (
    <Hamburger
      {...args}
      as="button"
      label="Hamburger"
      active={active}
      onClick={() => setActive(old => !old)}
    />
  );
};

const ButtonTemplate: Story = args => {
  const [active, setActive] = useState(false);
  return (
    <Button size="xs" outline onClick={() => setActive(old => !old)}>
      <Hamburger {...args} active={active} color="dark-light" />
    </Button>
  );
};

export const Default = Template.bind({});
export const WithButton = ButtonTemplate.bind({});

Default.args = {
  label: 'Hamburger',
};
