import React from 'react';
import * as ReactDOM from 'react-dom';
import { Default as Button } from '../stories/button.stories';

describe('Button', () => {
  it('should be rendered without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Button />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
