import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Button } from '../src';

const meta: Meta = {
  title: 'Buttons/Button',
  component: Button,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story = args => <Button {...args} />;

export const Default = Template.bind({});
export const Primary = Template.bind({});
export const Secondary = Template.bind({});
export const Tertiary = Template.bind({});
export const Outline = Template.bind({});
export const TwoLayer = Template.bind({});
export const TwoLayerIcon = Template.bind({});
export const LinkButton = Template.bind({});
export const Customized = Template.bind({});

Default.args = {
  children: 'Hello World',
  bordered: false,
  outline: false,
  disabled: false,
  onClick: () => alert('Clicked!'),
};

Primary.args = {
  ...Default.args,
  variant: 'primary',
};

Secondary.args = {
  ...Default.args,
  variant: 'secondary',
};

Tertiary.args = {
  ...Default.args,
  variant: 'tertiary',
};

Outline.args = {
  ...Default.args,
  outline: true,
};

TwoLayer.args = {
  ...Default.args,
  children: 'Hover/Focus me!',
  secondaryText: 'Secondary',
  theme: 'green',
};

TwoLayerIcon.args = {
  ...Default.args,
  children: 'Hover/Focus me!',
  theme: 'green',
  secondaryText: (
    <svg xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 16 16">
      <path d="M3.3 12.7c.2.2.4.3.7.3s.5-.1.7-.3L8 9.4l3.3 3.3c.2.2.5.3.7.3s.5-.1.7-.3c.4-.4.4-1 0-1.4L9.4 8l3.3-3.3c.4-.4.4-1 0-1.4s-1-.4-1.4 0L8 6.6 4.7 3.3c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4L6.6 8l-3.3 3.3c-.4.4-.4 1 0 1.4z"></path>
    </svg>
  ),
};

LinkButton.args = {
  ...Default.args,
  children: 'I am an anchor',
  as: 'a',
  href: '#',
  target: '_blank',
};

Customized.args = {
  ...Default.args,
  children: '80s Vibes',
  sx: `
  --flatify__button-txt-color: white;
  --flatify__button-bg-color: linear-gradient(15deg, #03001e, #7303c0, #ec38bc, #fdeff9);
  --flatify__button-border-color: #7303c0;
  --flatify__hover-brightness: 115%;
  min-width: 200px;
  letter-spacing: 5px;
  background-size: 100% 200%;
  transition: letter-spacing var(--flatify__bouncing-transition), background-position var(--flatify__simple-transition) !important;

  &:hover,
  &:focus{
    letter-spacing: 0;
    background-position: -200%;
  }
  `,
};
