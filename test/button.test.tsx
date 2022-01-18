import React from 'react';
import {render,screen} from '@testing-library/react';
import { Default as Button } from '../stories/button.stories';

describe('Button', () => {
  it('should be rendered without crashing', () => {
    render(<Button {...Button.args} />);
    screen.getByText('Hello World');
  });
});
