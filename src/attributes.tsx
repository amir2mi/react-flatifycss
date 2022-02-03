export const generalAttributes = ({
  'data-testid': dataTestId,
  id,
}: {
  'data-testid'?: string;
  id?: string;
}) => {
  return {
    id,
    'data-testid': dataTestId,
  };
};
