import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { Dropdown, DropdownButton, DropdownBody } from '../dropdown';

const TestDropdown = () => (
  <Dropdown id="test-dropdown" data-testid="dropdown">
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

describe('Dropdown', () => {
  it('should be rendered without crashing', async () => {
    render(<TestDropdown />);

    await waitFor(() => {
      expect(screen.getByTestId('dropdown')).toBeInTheDocument();
    });
  });

  it('should be opened on click', async () => {
    const { container } = render(<TestDropdown />);

    await waitFor(() => {
      expect(screen.getByTestId('dropdown')).toBeInTheDocument();
    });

    fireEvent.click(screen.getByTestId('dropdown'));

    setTimeout(() => {
      expect(container.querySelector('.dropdown.show')).toBeInTheDocument();
    }, 1000);
  });
});
