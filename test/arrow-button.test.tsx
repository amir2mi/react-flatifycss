import React from 'react';
import { render } from '@testing-library/react';
import { Default as ArrowButton } from '../stories/arrow-button.stories';

describe('Arrow button', () => {
  it('should be rendered without crashing', () => {
    const { container } = render(
      <ArrowButton {...ArrowButton.args} isButton={true} isFlipped={true} />
    );
    
    expect(
      container.querySelector(`.button.arrow-flip[aria-label="Arrow button"]`)
    ).toBeInTheDocument();
  });
});
