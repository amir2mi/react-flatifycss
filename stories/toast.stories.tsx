import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react';
import { Button, Toast, ToastIcon, ToastsWrapper } from '../src';

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
      <Toast {...args} show={isOpen} onClose={() => setIsOpen(false)}>
        Lorem ipsum dolor sit amet.
      </Toast>
      <Button onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? 'Hide' : 'Show'} Toast
      </Button>
    </>
  );
};

const TemplateWithIcon: Story = args => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <ToastsWrapper />
      <Toast {...args} show={isOpen} onClose={() => setIsOpen(false)}>
        <ToastIcon>
          <svg
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M21.72,18,13.82,4a2.09,2.09,0,0,0-3.64,0L2.28,18a2.08,2.08,0,0,0,1.81,3.11H19.91A2.08,2.08,0,0,0,21.72,18Zm-1.81,1.11H4.09L4,18.94l8-14a.1.1,0,0,1,.08,0h0L20,19h0ZM11,14V11a1,1,0,0,1,2,0v3a1,1,0,0,1-2,0Zm2,3a1,1,0,1,1-1-1A1,1,0,0,1,13,17Z"></path>{' '}
          </svg>
        </ToastIcon>
        Lorem ipsum dolor sit amet.
      </Toast>
      <Button onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? 'Hide' : 'Show'} Toast
      </Button>
    </>
  );
};

export const Default = Template.bind({});
export const WithIcon = TemplateWithIcon.bind({});
export const CloseButton = Template.bind({});
export const AutoClose = Template.bind({});
export const AutoCloseDuration = Template.bind({});
export const XPosition = Template.bind({});
export const YPosition = Template.bind({});
export const CustomAnimation = Template.bind({});

WithIcon.args = {
  theme: 'orange-light',
};

CloseButton.args = {
  closeButton: true,
};

AutoClose.args = {
  autoClose: true,
};

AutoCloseDuration.args = {
  autoClose: true,
  duration: 750,
};

XPosition.args = {
  x: 'left',
};

YPosition.args = {
  y: 'top',
};

CustomAnimation.args = {
  sx: `@keyframes toast-in{
    0%{
      opacity: 0;
      transform: scale(1.5)
    }
    100%{
      opacity: 1;
      transform: scale(1)
    } 
  }
  @keyframes toast-out{
    0%{
      opacity: 1;
      transform: scale(1) rotate(0)
    }
    100%{
      opacity: 0;
      transform: scale(0) rotate(25deg)
    } 
   }`,
  showAnimation: 'toast-in ease 0.5s',
  hideAnimation: 'toast-out ease 0.5s',
};
