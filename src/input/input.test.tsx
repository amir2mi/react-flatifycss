import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Input } from '../input';

describe('Input', () => {
  it('should be rendered without crashing', async () => {
    render(<Input id="test-id" data-testid="input" type="text" />);

    expect(screen.getByTestId('input')).toBeInTheDocument();
  });

  it('should change value onChange', async () => {
    render(<Input id="test-id" data-testid="input" type="text" />);

    fireEvent.change(screen.getByTestId('input'), { target: { value: 'foo' } });

    expect(screen.getByTestId<HTMLInputElement>('input').value).toBe('foo');
  });
});
