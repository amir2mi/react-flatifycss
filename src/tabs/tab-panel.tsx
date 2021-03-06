import React from 'react';
import clsx from 'clsx';
import { TabPanel as ReachTabPanel } from '@reach/tabs';
import { FlatifyGeneralProps } from '../interfaces';
import { generalClasses } from '../classes';
import { generalAttributes } from '../attributes';

interface TabPanelProps extends FlatifyGeneralProps {
  [key: string]: any;
  className?: string;
  children: React.ReactNode;
}

export default function TabPanel(props: TabPanelProps) {
  const { className, ...rest } = props;
  return (
    <ReachTabPanel
      {...generalAttributes(props)}
      {...rest}
      className={clsx('tab-panel show', ...generalClasses(props))}
    />
  );
}
