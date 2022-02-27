import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Dropdown } from '../src';

const meta: Meta = {
  title: 'Components/Dropdown',
  component: Dropdown,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story = (args) => <Dropdown id="test-dropdown" {...args} />;

export const Default = Template.bind({});
export const MenuItems = Template.bind({});
export const CustomLabel = Template.bind({});
export const CustomOffset = Template.bind({});

Default.args = {
  autoClose: true,
  buttonArrow: true,
  buttonLabel: 'Click me',
  children: 'Im a dropdown',
  isMenu: false,
};

MenuItems.args = {
  autoClose: true,
  buttonArrow: true,
  buttonLabel: 'Click me',
  children: (
    <>
      <li className="menu-item heading">My Account</li>
      <li className="menu-item">
        <a href="#">Sign up</a>
      </li>
      <li className="menu-item">
        <a href="#">Login</a>
      </li>
      <li role="separator" className="menu-item separator"></li>
      <li className="menu-item">
        <a href="#">About us</a>
      </li>
      <li className="menu-item">
        <a href="#">Contribute</a>
      </li>
      <li className="menu-item">
        <a href="#">Rate it!</a>
      </li>
    </>
  ),
  isMenu: true,
  placement: 'left',
};

CustomLabel.args = {
  autoClose: true,
  buttonArrow: true,
  buttonLabel: <i>I am a JSX element</i>,
  children: 'Im a dropdown',
  isMenu: false,
};

CustomOffset.args = {
  ...Default.args,
  offsetX: 100,
  offsetY: 0,
};
