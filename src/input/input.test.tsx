import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Input } from '../input';

describe('Input', () => {
  it('should be rendered without crashing', async () => {
    render(<Input data-testid="input" type="text" />);

    expect(screen.getByTestId('input')).toBeInTheDocument();
  });

  it('should be rendered without crashing', async () => {
    render(<Input data-testid="input" type="text" />);

    fireEvent.change(screen.getByTestId('input'), { target: { value: 'foo' } });

    expect(screen.getByTestId<HTMLInputElement>('input').value).toBe('foo');
  });
});
