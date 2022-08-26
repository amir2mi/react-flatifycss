import React from 'react';
import clsx from 'clsx';
import styled from 'styled-components';
import { TabPanel as ReachTabPanel } from '@reach/tabs';
import { FlatifyGeneralProps } from '../interfaces';
import { generalClasses } from '../classes';

interface TabPanelProps
  extends FlatifyGeneralProps,
    Omit<React.HTMLAttributes<HTMLElement>, 'color'> {
  children: React.ReactNode;
}

const TabPanelWrapper = styled(ReachTabPanel)`
  ${({ sx }: TabPanelProps) => (sx ? sx : '')}
`;

export default function TabPanel(props: TabPanelProps) {
  return (
    <TabPanelWrapper
      {...props}
      className={clsx('tab-panel show', ...generalClasses(props))}
    />
  );
}
