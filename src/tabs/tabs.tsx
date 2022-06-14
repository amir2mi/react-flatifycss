import React from 'react';
import clsx from 'clsx';
import { Tabs as ReachTabs } from '@reach/tabs';
import { FlatifyGeneralProps } from '../interfaces';
import { generalClasses } from '../classes';
import { generalAttributes } from '../attributes';

interface TabsProps extends FlatifyGeneralProps {
  [key: string]: any;
  bordered?: boolean;
  className?: string;
  children: React.ReactNode;
  defaultIndex?: number;
  index?: number;
  onChange?: (index: number) => void;
}

export default function Tabs(props: TabsProps) {
  const { bordered, className, ...rest } = props;
  return (
    <ReachTabs
      {...generalAttributes(props)}
      {...rest}
      className={clsx('tabs-wrapper', ...generalClasses(props), className, {
        bordered: bordered,
      })}
    />
  );
}
