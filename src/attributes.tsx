import React from 'react';

export const generalAttributes = ({
  'aria-label': ariaLabel,
  'data-testid': dataTestId,
  disabled,
  id,
  style,
}: {
  'aria-label'?: string;
  'data-testid'?: string;
  disabled?: boolean;
  id?: string;
  style?: React.CSSProperties;
}) => {
  return {
    'aria-label': ariaLabel,
    'data-testid': dataTestId,
    disabled,
    id,
    style,
  };
};
