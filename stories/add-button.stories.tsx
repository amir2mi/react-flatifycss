import { Meta, Story } from '@storybook/react';
import React, { useState } from 'react';
import { AddButton } from '../src';

const meta: Meta = {
  title: 'Components/Add button',
  component: AddButton,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story = args => {
  const [active, setActive] = useState(false);
  return (
    <AddButton
      {...args}
      label="Add Me!"
      active={active}
      onClick={() => setActive(old => !old)}
    />
  );
};

export const Default = Template.bind({});
