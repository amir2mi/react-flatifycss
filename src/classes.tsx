export const generalClasses = ({
  className,
  color,
  roundness,
  size,
  style,
}: {
  color?: string;
  className?: string;
  roundness?: string;
  size?: string;
  style?: string;
}) => [
  className,
  {
    ['color-' + color]: color && color !== 'default',
    ['edge-' + roundness]: roundness && roundness !== 'default',
    ['size-' + size]: size && size !== 'default',
    ['style-' + style]: style && style !== 'default',
  },
];
