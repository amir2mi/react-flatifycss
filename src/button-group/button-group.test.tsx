import React from 'react';
import { render } from '@testing-library/react';
import { ButtonGroup } from '../button-group';

describe('Button group', () => {
  it('should be rendered without crashing', () => {
    const { container } = render(<ButtonGroup />);

    expect(container.querySelector('.button-group')).toBeInTheDocument();
  });
});
