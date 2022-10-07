import React from 'react';
import clsx from 'clsx';
import styled from 'styled-components';
import { TabPanels as ReachTabPanels } from '@reach/tabs';
import { FlatifyGeneralProps } from '../interfaces';
import { generalClasses } from '../classes';

export interface TabPanelsProps
  extends FlatifyGeneralProps,
    Omit<React.HTMLAttributes<HTMLElement>, 'color'> {
  [key: string]: any;
  animation?: 'default' | 'fade' | 'none' | boolean;
  children: React.ReactNode;
  showAnimation?: string;
}

const TabPanelsWrapper = styled(ReachTabPanels)`
  ${({ showAnimation }: TabPanelsProps) =>
    showAnimation ? `--flatify__tab-animation-show: ${showAnimation};` : ''}
  ${({ sx }: TabPanelsProps) => (sx ? sx : '')}
`;

export default function TabPanels(props: TabPanelsProps) {
  const { animation, className, ...rest } = props;
  return (
    <TabPanelsWrapper
      {...rest}
      className={clsx(
        'tabs-content',
        {
          'default-animation': animation === 'default' || animation === true,
          'fade-animation': animation === 'fade',
          'no-animation': animation === 'none' || animation === false,
        },
        ...generalClasses(props)
      )}
    />
  );
}
