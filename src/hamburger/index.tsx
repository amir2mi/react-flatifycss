import React from 'react';
import clsx from 'clsx';
import styled from 'styled-components';
import { FlatifyGeneralProps } from '../interfaces';
import { generalClasses } from '../classes';

interface HamburgerProps
  extends FlatifyGeneralProps,
    Omit<React.HTMLAttributes<HTMLElement>, 'color'> {
  active: boolean;
  label?: string;
}

const HamburgerWrapper = styled.div`
  ${({ sx }: HamburgerProps) => (sx ? sx : '')}
`;

export function Hamburger(props: HamburgerProps) {
  const { active, label, ...rest } = props;

  return (
    <HamburgerWrapper
      {...rest}
      aria-label={label}
      className={clsx(
        'hamburger',
        active && 'active',
        ...generalClasses(props)
      )}
    />
  );
}
