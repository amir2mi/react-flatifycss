import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Select } from '../select';

const options = [
  { label: 'Planes', value: 'planes' },
  { label: 'Cars', value: 'cars' },
  { label: 'Trains', value: 'trains' },
  { label: 'Bikes', value: 'bikes' },
];

describe('Select', () => {
  it('should be rendered without crashing', async () => {
    render(<Select id="test-select" data-testid="select" options={options} />);

    expect(screen.getByTestId('select')).toBeInTheDocument();
  });

  it('should select single item and return value', async () => {
    render(<Select id="test-select" data-testid="select" options={options} />);

    fireEvent.change(screen.getByTestId('select'), {
      target: { value: 'planes' },
    });

    expect(screen.getByTestId<HTMLInputElement>('select').value).toBe('planes');
  });
});
