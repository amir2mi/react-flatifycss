import React from 'react';
import { render, screen } from '@testing-library/react';
import { Button } from '../button';

describe('Button', () => {
  it('should be rendered without crashing', () => {
    render(<Button text="Hello ">World</Button>);

    expect(screen.getByText('Hello World')).toBeInTheDocument();
  });
});
