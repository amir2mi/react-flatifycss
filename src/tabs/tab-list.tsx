import React from 'react';
import clsx from 'clsx';
import { TabList as ReachTabList } from '@reach/tabs';
import { FlatifyGeneralProps } from '../interfaces';
import { generalClasses } from '../classes';

interface TabListProps extends FlatifyGeneralProps {
  [key: string]: any;
  centered?: boolean;
  className?: string;
  children: React.ReactNode;
  linePosition?: 'bottom' | 'top';
  scrollable?: boolean;
}

export default function TabList(props: TabListProps) {
  const {
    children,
    className,
    linePosition,
    centered,
    scrollable,
    ...rest
  } = props;
  // do not use map index, it run multiple times and gives the wrong index
  let orderIndex = 0;

  // add the orderIndex prop to each tab to determine which tab is active and add the active class
  return (
    <ReachTabList
      {...rest}
      className={clsx('tabs-header', className, ...generalClasses(props), {
        'line-at-top': linePosition === 'top',
        'flex-center': centered,
        scrollable: scrollable,
      })}
    >
      {React.Children.map(children, child => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, {
            orderIndex: orderIndex++,
          });
        }
        return child;
      })}
    </ReachTabList>
  );
}
