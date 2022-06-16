import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react';
import { Modal, Button } from '../src';

const meta: Meta = {
  title: 'Components/Modal',
  component: Modal,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story = args => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(!isOpen)}>Open The Modal</Button>
      <Modal {...args} isOpen={isOpen} onDismiss={() => setIsOpen(false)}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque sed
        earum repudiandae! Veritatis, quo! Optio distinctio, dolorum eaque
        facilis neque, temporibus nihil exercitationem commodi amet hic iste
        reprehenderit voluptas impedit!
      </Modal>
    </>
  );
};

export const Default = Template.bind({});
