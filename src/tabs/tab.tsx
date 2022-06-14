import React from 'react';
import clsx from 'clsx';
import { Tab as ReachTab, useTabsContext } from '@reach/tabs';
import { FlatifyGeneralProps } from '../interfaces';

interface TabProps extends FlatifyGeneralProps {
  [key: string]: any;
  className?: string;
  children: React.ReactNode;
  onClick?: (index: number | undefined) => void;
  orderIndex?: number;
}

export default function Tab(props: TabProps) {
  const { orderIndex, className, onClick, ...rest } = props;
  const { selectedIndex } = useTabsContext();

  return (
    <ReachTab
      {...rest}
      className={clsx('tab-button', className, {
        active: selectedIndex === orderIndex,
      })}
    />
  );
}
