import React from 'react';
import clsx from 'clsx';
import { Tab as ReachTab, useTabsContext } from '@reach/tabs';
import { FlatifyGeneralProps } from '../interfaces';
import { generalClasses } from '../classes';
import { generalAttributes } from '../attributes';

interface TabProps extends FlatifyGeneralProps {
  [key: string]: any;
  className?: string;
  children: React.ReactNode;
  orderIndex?: number;
}

export default function Tab(props: TabProps) {
  const { orderIndex, className, ...rest } = props;
  const { selectedIndex } = useTabsContext();

  return (
    <ReachTab
      {...generalAttributes(props)}
      {...rest}
      className={clsx('tab-button', className, ...generalClasses(props), {
        active: selectedIndex === orderIndex,
      })}
    />
  );
}
