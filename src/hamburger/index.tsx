import React from 'react';
import clsx from 'clsx';
import styled from 'styled-components';
import { FlatifyGeneralProps } from '../interfaces';
import { generalClasses } from '../classes';

interface HamburgerProps
  extends FlatifyGeneralProps,
    Omit<React.HTMLAttributes<HTMLButtonElement>, 'color'> {
  active: boolean;
  label: string;
}

const HamburgerWrapper = styled.button`
  ${({ sx }: HamburgerProps) => (sx ? sx : '')}
`;

export function Hamburger(props: HamburgerProps) {
  const { active, label, ...rest } = props;

  return (
    <HamburgerWrapper
      {...rest}
      className={clsx(
        'hamburger',
        active && 'active',
        ...generalClasses(props)
      )}
      aria-label={label}
    />
  );
}
