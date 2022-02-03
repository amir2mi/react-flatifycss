import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { Dropdown } from '../dropdown';

describe('Dropdown', () => {
  it('should be rendered without crashing', async () => {
    render(<Dropdown data-testid="dropdown" />);

    await waitFor(() => {
      console.log(screen.getByTestId('dropdown'));

      expect(screen.getByTestId('dropdown')).toBeInTheDocument();
    });
    // expect(screen.queryByTestId('data-test-dropdown')).toBeInTheDocument();
  });
});
