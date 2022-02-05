import React from 'react';
import { render } from '@testing-library/react';
import { Badge } from '../badge';

describe('Badge', () => {
  it('should be rendered without crashing', () => {
    const { container } = render(<Badge tagName="div" text="hello" />);

    expect(container.querySelector('div.badge')).toBeInTheDocument();
  });
});
