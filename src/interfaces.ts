enum Colors {
  'default' = 'default',
  'blue' = 'blue',
  'blue-light' = 'blue-light',
  'green' = 'green',
  'green-light' = 'green-light',
  'yellow' = 'yellow',
  'yellow-light' = 'yellow-light',
  'orange' = 'orange',
  'orange-light' = 'orange-light',
  'red' = 'red',
  'red-light' = 'red-light',
  'pink' = 'pink',
  'pink-light' = 'pink-light',
  'purple' = 'purple',
  'purple-light' = 'purple-light',
  'accent' = 'accent',
  'accent-light' = 'accent-light',
  'success' = 'success',
  'success-light' = 'success-light',
  'info' = 'info',
  'info-light' = 'info-light',
  'warning' = 'warning',
  'warning-light' = 'warning-light',
  'danger' = 'danger',
  'danger-light' = 'danger-light',
  'light' = 'light',
  'light-light' = 'light-light',
  'dark' = 'dark',
  'dark-light' = 'dark-light',
}

enum Roundness {
  'default' = 'default',
  'sharp' = 'sharp',
  'round-sm' = 'round-sm',
  'round-md' = 'round-md',
  'round-lg' = 'round-lg',
  'circle' = 'circle',
  'oval' = 'oval',
  'triangle' = 'triangle',
}

enum Sizes {
  'default' = 'default',
  'xs' = 'xs',
  'sm' = 'sm',
  'md' = 'md',
  'lg' = 'lg',
  '2x' = '2x',
  '3x' = '3x',
  '4x' = '4x',
  '5x' = '5x',
}

export interface FlatifyGeneralProps {
  style?: Colors;
  color?: Colors;
  roundness?: Roundness;
  size?: Sizes;
}
