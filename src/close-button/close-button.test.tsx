import React from 'react';
import { render } from '@testing-library/react';
import { CloseButton } from '../close-button';

describe('Close button', () => {
  it('should be rendered without crashing', () => {
    const { container } = render(
      <CloseButton label="Close button" isButton={true} />
    );

    expect(
      container.querySelector(`.button.close-button[aria-label="Close button"]`)
    ).toBeInTheDocument();
  });
});
