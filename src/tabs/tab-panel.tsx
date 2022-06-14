import React from 'react';
import clsx from 'clsx';
import { TabPanel as ReachTabPanel } from '@reach/tabs';
import { FlatifyGeneralProps } from '../interfaces';

interface TabPanelProps extends FlatifyGeneralProps {
  [key: string]: any;
  className?: string;
  children: React.ReactNode;
}

export default function TabPanel(props: TabPanelProps) {
  const { className, ...rest } = props;
  return <ReachTabPanel {...rest} className={clsx('tab-panel show')} />;
}
