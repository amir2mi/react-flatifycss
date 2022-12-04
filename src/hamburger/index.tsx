import React, { forwardRef } from 'react';
import clsx from 'clsx';
import styled from 'styled-components';
import { FlatifyGeneralProps } from '../interfaces';
import { generalClasses } from '../classes';

export interface HamburgerProps
  extends FlatifyGeneralProps,
    Omit<React.HTMLAttributes<HTMLElement>, 'color'> {
  active: boolean;
  label?: string;
}

const HamburgerWrapper = styled.div`
  ${({ sx }: HamburgerProps) => (sx ? sx : '')}
`;

export const Hamburger = forwardRef(
  (
    props: HamburgerProps,
    ref: React.LegacyRef<HTMLButtonElement> | undefined
  ) => {
    const { active, label, ...rest } = props;

    return (
      <HamburgerWrapper
        {...rest}
        ref={ref}
        aria-label={label}
        className={clsx(
          'hamburger',
          active && 'active',
          ...generalClasses(props)
        )}
      />
    );
  }
);
