import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react';
import { Modal, Button, ModalHeader, ModalBody, ModalFooter } from '../src';
import ModalPage from './modal.mdx';

const meta: Meta = {
  title: 'Components/Modal',
  component: Modal,
  parameters: {
    controls: { expanded: true },
    docs: {
      page: ModalPage,
    },
  },
};

export default meta;

const Template: Story = args => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(!isOpen)}>Open The Modal</Button>
      <Modal
        {...args}
        overlayClassName={args.overlayClassName}
        bordered={args.bordered}
        position={args.position}
        aria-label="a simple modal"
        isOpen={isOpen}
        onDismiss={() => setIsOpen(false)}
      >
        <ModalHeader>
          <h3 className="modal-title">I am a big boy</h3>
          <button
            className="close-button close-modal"
            aria-label="Close the modal"
            onClick={() => setIsOpen(false)}
          />
        </ModalHeader>
        <ModalBody>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque sed
          earum repudiandae! Veritatis, quo! Optio distinctio, dolorum eaque
          facilis neque, temporibus nihil exercitationem commodi amet hic iste
          reprehenderit voluptas impedit! Lorem ipsum, dolor sit amet
          consectetur adipisicing elit. Atque sed earum repudiandae! Veritatis,
          quo! Optio distinctio, dolorum eaque facilis neque, temporibus nihil
          exercitationem commodi amet hic iste reprehenderit voluptas impedit!
        </ModalBody>
        <ModalFooter>
          <Button theme="danger" onClick={() => setIsOpen(false)}>
            No, You Are Not!
          </Button>
          <Button theme="success" onClick={() => setIsOpen(false)}>
            Okay
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

const TemplateWithInlineStyle: Story = args => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <style>
        {`.custom-modal-overlay {
  opacity: 1 !important;
  background: rgb(30, 42, 53, 0.35);
  backdrop-filter: blur(5px) !important;
}`}
      </style>
      <Button onClick={() => setIsOpen(!isOpen)}>Open The Modal</Button>
      <Modal
        {...args}
        overlayClassName={args.overlayClassName}
        bordered={args.bordered}
        position={args.position}
        aria-label="a simple modal"
        isOpen={isOpen}
        onDismiss={() => setIsOpen(false)}
      >
        <ModalHeader>
          <h3 className="modal-title">I am a big boy</h3>
          <button
            className="close-button close-modal"
            aria-label="Close the modal"
            onClick={() => setIsOpen(false)}
          />
        </ModalHeader>
        <ModalBody>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque sed
          earum repudiandae! Veritatis, quo! Optio distinctio, dolorum eaque
          facilis neque, temporibus nihil exercitationem commodi amet hic iste
          reprehenderit voluptas impedit! Lorem ipsum, dolor sit amet
          consectetur adipisicing elit. Atque sed earum repudiandae! Veritatis,
          quo! Optio distinctio, dolorum eaque facilis neque, temporibus nihil
          exercitationem commodi amet hic iste reprehenderit voluptas impedit!
        </ModalBody>
        <ModalFooter>
          <Button theme="danger" onClick={() => setIsOpen(false)}>
            No, You Are Not!
          </Button>
          <Button theme="success" onClick={() => setIsOpen(false)}>
            Okay
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export const Default = Template.bind({});
export const DisabledOverlayClick = Template.bind({});
export const Bordered = Template.bind({});
export const Positioned = Template.bind({});
export const CustomOverlay = TemplateWithInlineStyle.bind({});

Default.args = {
  position: 'center',
};

DisabledOverlayClick.args = {
  disableOverlayClick: true,
};

Bordered.args = {
  position: 'center',
  bordered: true,
};

Positioned.args = {
  position: 'bottom',
};

CustomOverlay.args = {
  overlayClassName: 'custom-modal-overlay',
};
