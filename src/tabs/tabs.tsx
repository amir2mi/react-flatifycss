import React from 'react';
import clsx from 'clsx';
import styled from 'styled-components';
import { Tabs as ReachTabs } from '@reach/tabs';
import { FlatifyGeneralProps } from '../interfaces';
import { generalClasses } from '../classes';

export interface TabsProps
  extends FlatifyGeneralProps,
    Omit<React.HTMLAttributes<HTMLElement>, 'color' | 'onChange'> {
  bordered?: boolean;
  children: React.ReactNode;
  defaultIndex?: number;
  index?: number;
  onChange?: (index: number) => void;
}

const TabsWrapper = styled(ReachTabs)`
  ${({ sx }: TabsProps) => (sx ? sx : '')}
`;

export default function Tabs(props: TabsProps) {
  const { bordered, ...rest } = props;

  return (
    <TabsWrapper
      {...rest}
      className={clsx('tabs-wrapper', ...generalClasses(props), {
        bordered: bordered,
      })}
    />
  );
}
