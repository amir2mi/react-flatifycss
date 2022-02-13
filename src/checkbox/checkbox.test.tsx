import React from 'react';
import { render } from '@testing-library/react';
import { Checkbox } from '../checkbox';

describe('Checkbox', () => {
  it('should be rendered without crashing', () => {
    const { container } = render(
      <Checkbox id="test-checkbox" checked>
        I Agree to Privacy Policy.
      </Checkbox>
    );

    expect(container.querySelector('#test-checkbox input')).toBeInTheDocument();
  });

  it('should be checked', () => {
    const { container } = render(
      <Checkbox id="test-checkbox" checked={true}>
        I Agree to Privacy Policy.
      </Checkbox>
    );

    expect(container.querySelector('#test-checkbox input')).toBeChecked();
  });

  it('should not be checked', () => {
    const { container } = render(
      <Checkbox id="test-checkbox" checked={false}>
        I Agree to Privacy Policy.
      </Checkbox>
    );

    expect(container.querySelector('#test-checkbox input')).not.toBeChecked();
  });

  it('should be disabled', () => {
    const { container } = render(
      <Checkbox id="test-checkbox" checked disabled>
        I Agree to Privacy Policy.
      </Checkbox>
    );

    expect(container.querySelector('#test-checkbox input')).toBeDisabled();
  });
});
