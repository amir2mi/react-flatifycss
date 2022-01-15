export const generalClasses = ({
  style,
  color,
  roundness,
}: {
  style?: string | undefined;
  color?: string | undefined;
  roundness?: string | undefined;
}) => ({
  ['style-' + style]: style && style !== 'default',
  ['color-' + color]: color && color !== 'default',
  ['edge-' + roundness]: roundness && roundness !== 'default',
});
