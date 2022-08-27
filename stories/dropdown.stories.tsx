import React from 'react';
import { Meta, Story } from '@storybook/react';
import {
  Button,
  ButtonGroup,
  Dropdown,
  DropdownButton,
  DropdownBody,
} from '../src';

const meta: Meta = {
  title: 'Components/Dropdown',
  component: Dropdown,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Simple: Story = args => (
  <Dropdown id="test-dropdown" {...args}>
    <DropdownButton>Open it!</DropdownButton>
    <DropdownBody>
      <h6>Gotcha!</h6>
    </DropdownBody>
  </Dropdown>
);

const Menu: Story = args => (
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

const SplitButtonTemplate: Story = args => (
  <ButtonGroup>
    <Button bordered sx="line-height: 1">
      My Button
    </Button>
    <Dropdown id="test-dropdown" {...args}>
      <DropdownButton
        hasArrow
        bordered
        sx="border-radius: 0 1em 1em 0 !important"
      />

      <DropdownBody>
        <h6>Gotcha!</h6>
      </DropdownBody>
    </Dropdown>
  </ButtonGroup>
);

const TooltipTemplate: Story = args => (
  <>
    Lorem, ipsum dolor sit amet consectetur adipisicing elit,
    <Dropdown id="test-tooltip" {...args}>
      <DropdownButton buttonStyle={false} color="red">
        open it!
      </DropdownButton>
      <DropdownBody size="sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </DropdownBody>
    </Dropdown>
    <br />
    Reiciendis non magnam repellendus adipisci nihil ipsum dolore, totam
    temporibus
    <Dropdown id="test-tooltip" {...args} placement="right">
      <DropdownButton className="link-button" variant="tertiary">
        expedita laborum
      </DropdownButton>
      <DropdownBody size="xs">
        <h3 className="text-lg text-center color-dark-light">Hey!</h3>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </DropdownBody>
    </Dropdown>
    doloremque beatae! Lorem, ipsum dolor sit amet consectetur adipisicing elit.
  </>
);

const Custom: Story = args => {
  const keyframes = `
    @keyframes my-dropdown-show-animation {
      from {
        opacity: 0;
        transform: scale(1.2) rotate(90deg);
      }
      to {
        opacity: 1;
        transform: scale(1) rotate(0);
      }
    }
    
    @keyframes my-dropdown-hide-animation {
      from {
        transform: scale(1);
      }
      50% {
        transform: scale(1.2);
      }
      to {
        transform: scale(0);
      }
    }
  `;

  return (
    <Dropdown
      id="test-dropdown"
      sx={keyframes}
      showAnimation="my-dropdown-show-animation 500ms ease"
      hideAnimation="my-dropdown-hide-animation 400ms ease"
      {...args}
    >
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
};

export const Default = Simple.bind({});
export const MenuItems = Menu.bind({});
export const Placement = Menu.bind({});
export const Hoverable = Menu.bind({});
export const AutoClose = Menu.bind({});
export const Offset = Menu.bind({});
export const SplitButton = SplitButtonTemplate.bind({});
export const Tooltip = TooltipTemplate.bind({});
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

Tooltip.args = {
  isHoverable: true,
  offsetY: 0,
};
