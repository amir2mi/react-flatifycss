export const generalClasses = ({
  className,
  color,
  roundness,
  size,
  theme,
}: {
  color?: string;
  className?: string;
  roundness?: string;
  size?: string;
  theme?: string;
}) => [
  className,
  {
    ['color-' + color]: color && color !== 'default',
    ['edge-' + roundness]: roundness && roundness !== 'default',
    ['size-' + size]: size && size !== 'default',
    ['style-' + theme]: theme && theme !== 'default',
  },
];
