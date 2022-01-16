export const generalClasses = ({
  color,
  roundness,
  size,
  style,
}: {
  color?: string | undefined;
  roundness?: string | undefined;
  size?: string | undefined;
  style?: string | undefined;
}) => ({
  ['color-' + color]: color && color !== 'default',
  ['edge-' + roundness]: roundness && roundness !== 'default',
  ['size-' + size]: size && size !== 'default',
  ['style-' + style]: style && style !== 'default',
});
