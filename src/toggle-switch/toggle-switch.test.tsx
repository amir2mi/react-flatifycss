import React from 'react';
import { render } from '@testing-library/react';
import { ToggleSwitch } from '../toggle-switch';

describe('ToggleSwitch', () => {
  it('should be rendered without crashing', () => {
    const { container } = render(
      <ToggleSwitch id="test-toggle-switch" type="checkbox" checked>
        I Agree to Privacy Policy.
      </ToggleSwitch>
    );

    expect(
      container.querySelector('#test-toggle-switch input')
    ).toBeInTheDocument();
  });

  it('should be checked', () => {
    const { container } = render(
      <ToggleSwitch id="test-toggle-switch" type="checkbox" checked={true}>
        I Agree to Privacy Policy.
      </ToggleSwitch>
    );

    expect(container.querySelector('#test-toggle-switch input')).toBeChecked();
  });

  it('should not be checked', () => {
    const { container } = render(
      <ToggleSwitch id="test-toggle-switch" type="checkbox" checked={false}>
        I Agree to Privacy Policy.
      </ToggleSwitch>
    );

    expect(
      container.querySelector('#test-toggle-switch input')
    ).not.toBeChecked();
  });

  it('should be disabled', () => {
    const { container } = render(
      <ToggleSwitch id="test-toggle-switch" type="checkbox" checked disabled>
        I Agree to Privacy Policy.
      </ToggleSwitch>
    );

    expect(container.querySelector('#test-toggle-switch input')).toBeDisabled();
  });
});
