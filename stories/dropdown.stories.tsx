import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Dropdown, DropdownButton, DropdownBody } from '../src';

const meta: Meta = {
  title: 'Components/Dropdown',
  component: Dropdown,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Simple: Story = (args) => (
  <Dropdown id="test-dropdown" {...args}>
    <DropdownButton>Open it!</DropdownButton>
    <DropdownBody>
      <h6>Gotcha!</h6>
    </DropdownBody>
  </Dropdown>
);

const Menu: Story = (args) => (
  <Dropdown id="test-dropdown" {...args}>
    <DropdownButton hasArrow>Open Menu</DropdownButton>
    <DropdownBody isMenu>
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
    </DropdownBody>
  </Dropdown>
);

const Custom: Story = (args) => (
  <Dropdown id="test-dropdown" {...args}>
    <DropdownButton theme="purple-light" hasArrow>
      Open Menu
    </DropdownButton>
    <DropdownBody isMenu theme="dark">
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
    </DropdownBody>
  </Dropdown>
);

export const Default = Simple.bind({});
export const MenuItems = Menu.bind({});
export const Placement = Menu.bind({});
export const Hoverable = Menu.bind({});
export const AutoClose = Menu.bind({});
export const Offset = Menu.bind({});
export const Customized = Custom.bind({});

Default.args = {
  children: 'Im a dropdown',
  isMenu: false,
  autoClose: true,
};

MenuItems.args = { autoClose: true };

Placement.args = {
  placement: 'right',
  autoClose: true,
};

Hoverable.args = {
  isHoverable: true,
};

AutoClose.args = {
  autoClose: 'inside',
};

Offset.args = {
  offsetX: 120,
  offsetY: -10,
};
