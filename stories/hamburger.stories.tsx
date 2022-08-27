import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react';
import { Hamburger } from '../src';

const meta: Meta = {
  title: 'Components/Hamburger',
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
      label="Hamburger"
      active={active}
      onClick={() => setActive(old => !old)}
    />
  );
};

export const Default = Template.bind({});

Default.args = {
  isButton: false,
  label: 'Hamburger',
};
