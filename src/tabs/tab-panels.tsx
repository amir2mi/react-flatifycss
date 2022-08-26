import React from 'react';
import clsx from 'clsx';
import { TabPanels as ReachTabPanels } from '@reach/tabs';
import { FlatifyGeneralProps } from '../interfaces';
import { generalClasses } from '../classes';

interface TabPanelsProps extends FlatifyGeneralProps {
  [key: string]: any;
  animation?: 'default' | 'fade' | 'none' | boolean;
  className?: string;
  children: React.ReactNode;
}

export default function TabPanels(props: TabPanelsProps) {
  const { animation, className, ...rest } = props;
  return (
    <ReachTabPanels
      {...rest}
      className={clsx('tabs-content', ...generalClasses(props), {
        'default-animation': animation === 'default' || animation === true,
        'fade-animation': animation === 'fade',
        'no-animation': animation === 'none' || animation === false,
      })}
    />
  );
}
