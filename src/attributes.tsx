import React from 'react';

export const generalAttributes = ({
  'data-testid': dataTestId,
  disabled,
  id,
  style,
}: {
  'data-testid'?: string;
  disabled?: boolean;
  id?: string;
  style?: React.CSSProperties;
}) => {
  return {
    'data-testid': dataTestId,
    disabled,
    id,
    style,
  };
};
