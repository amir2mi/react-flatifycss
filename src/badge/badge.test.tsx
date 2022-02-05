import React from 'react';
import { render } from '@testing-library/react';
import { ArrowButton } from '../arrow-button';

describe('Arrow button', () => {
  it('should be rendered without crashing', () => {
    const { container } = render(
      <ArrowButton label="Arrow button" isButton={true} isFlipped={true} />
    );

    expect(
      container.querySelector(`.button.arrow-flip[aria-label="Arrow button"]`)
    ).toBeInTheDocument();
  });
});
