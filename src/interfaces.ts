export type Colors =
  | 'default'
  | 'blue'
  | 'blue-light'
  | 'green'
  | 'green-light'
  | 'yellow'
  | 'yellow-light'
  | 'orange'
  | 'orange-light'
  | 'red'
  | 'red-light'
  | 'pink'
  | 'pink-light'
  | 'purple'
  | 'purple-light'
  | 'accent'
  | 'accent-light'
  | 'success'
  | 'success-light'
  | 'info'
  | 'info-light'
  | 'warning'
  | 'warning-light'
  | 'danger'
  | 'danger-light'
  | 'light'
  | 'light-light'
  | 'dark'
  | 'dark-light';

type Roundness =
  | 'default'
  | 'sharp'
  | 'round-sm'
  | 'round-md'
  | 'round-lg'
  | 'circle'
  | 'oval'
  | 'triangle';

export type Sizes =
  | 'default'
  | 'xs'
  | 'sm'
  | 'md'
  | 'lg'
  | '2x'
  | '3x'
  | '4x'
  | '5x';

export interface FlatifyGeneralProps {
  className?: string;
  color?: Colors;
  'data-testid'?: string;
  id?: string;
  roundness?: Roundness;
  size?: Sizes;
  sx?: string;
  theme?: Colors;
}
