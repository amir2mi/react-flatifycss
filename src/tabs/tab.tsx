import React from 'react';
import clsx from 'clsx';
import styled from 'styled-components';
import { Tab as ReachTab, useTabsContext } from '@reach/tabs';
import { FlatifyGeneralProps } from '../interfaces';
import { generalClasses } from '../classes';

interface TabProps
  extends FlatifyGeneralProps,
    Omit<React.HTMLAttributes<HTMLElement>, 'color'> {
  [key: string]: any;
  children: React.ReactNode;
  orderIndex?: number;
}

const TabWrapper = styled(ReachTab)`
  ${({ sx }: TabProps) => (sx ? sx : '')}
`;

export default function Tab(props: TabProps) {
  const { orderIndex, ...rest } = props;
  const { selectedIndex } = useTabsContext();

  return (
    <TabWrapper
      {...rest}
      className={clsx(
        'tab-button',
        {
          active: selectedIndex === orderIndex,
        },
        ...generalClasses(props)
      )}
    />
  );
}
