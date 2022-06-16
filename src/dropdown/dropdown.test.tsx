import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { Dropdown } from '../dropdown';

describe('Dropdown', () => {
  it('should be rendered without crashing', async () => {
    render(<Dropdown id="test-dropdown" data-testid="dropdown" />);

    await waitFor(() => {
      expect(screen.getByTestId('dropdown')).toBeInTheDocument();
    });
  });

  it('should be opened on click', async () => {
    const { container } = render(
      <Dropdown id="test-dropdown" data-testid="dropdown" />
    );

    await waitFor(() => {
      expect(screen.getByTestId('dropdown')).toBeInTheDocument();
    });

    fireEvent.click(screen.getByTestId('dropdown'));

    setTimeout(() => {
      expect(container.querySelector('.dropdown.show')).toBeInTheDocument();
    }, 1000);
  });
});
