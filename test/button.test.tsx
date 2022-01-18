import React from 'react';
import { render } from '@testing-library/react';
import { Default as Button } from '../stories/button.stories';

describe('Button', () => {
  it('should be rendered without crashing', () => {
    const button = render(<Button {...Button.args} />);
    expect(button.getByText('Hello World')).toBeInTheDocument();
  });
});
