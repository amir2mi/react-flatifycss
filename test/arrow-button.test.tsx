import React from 'react';
import { render, screen } from '@testing-library/react';
import { Default as ArrowButton } from '../stories/arrow-button.stories';

describe('Button', () => {
    it('should be rendered without crashing', () => {
      const button = render(<ArrowButton {...ArrowButton.args} />);
      expect(button.getByText('Hello World')).toBeInTheDocument();
    });
  });
  
