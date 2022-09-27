import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react';
import { Button, Toast, ToastsWrapper } from '../src';

const meta: Meta = {
  title: 'Components/Toast',
  component: Toast,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story = args => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <ToastsWrapper />
      <Toast show={isOpen} {...args}>
        Lorem ipsum dolor sit amet.
      </Toast>
      <Button onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? 'Hide' : 'Show'} Toast
      </Button>
    </>
  );
};

export const Default = Template.bind({});
