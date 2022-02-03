import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { Dropdown } from '../dropdown';

describe('Dropdown', () => {
  it('should be rendered without crashing', async () => {
    render(<Dropdown data-testid="dropdown" />);

    await waitFor(() => {
      expect(screen.getByTestId('dropdown')).toBeInTheDocument();
    });
  });
});
