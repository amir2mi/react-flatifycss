import React from 'react';
import { render } from '@testing-library/react';
import { Radio } from '../radio';

describe('Radio', () => {
  it('should be rendered without crashing', () => {
    const { container } = render(
      <Radio id="test-radio" checked>
        I Agree to Privacy Policy.
      </Radio>
    );

    expect(container.querySelector('#test-radio input')).toBeInTheDocument();
  });

  it('should be checked', () => {
    const { container } = render(
      <Radio id="test-radio" checked={true}>
        I Agree to Privacy Policy.
      </Radio>
    );

    expect(container.querySelector('#test-radio input')).toBeChecked();
  });

  it('should not be checked', () => {
    const { container } = render(
      <Radio id="test-radio" checked={false}>
        I Agree to Privacy Policy.
      </Radio>
    );

    expect(container.querySelector('#test-radio input')).not.toBeChecked();
  });

  it('should be disabled', () => {
    const { container } = render(
      <Radio id="test-radio" checked disabled>
        I Agree to Privacy Policy.
      </Radio>
    );

    expect(container.querySelector('#test-radio input')).toBeDisabled();
  });
});
