import React from 'react';
import clsx from 'clsx';
import styled from 'styled-components';
import { TabList as ReachTabList } from '@reach/tabs';
import { FlatifyGeneralProps } from '../interfaces';
import { generalClasses } from '../classes';

export interface TabListProps
  extends FlatifyGeneralProps,
    Omit<React.HTMLAttributes<HTMLElement>, 'color'> {
  centered?: boolean;
  children: React.ReactNode;
  linePosition?: 'bottom' | 'top';
  scrollable?: boolean;
}

const TabListWrapper = styled(ReachTabList)`
  ${({ sx }: TabListProps) => (sx ? sx : '')}
`;

export default function TabList(props: TabListProps) {
  const { children, linePosition, centered, scrollable, ...rest } = props;
  // do not use map index, it runs multiple times and gives the wrong index
  let orderIndex = 0;

  // add the orderIndex prop to each tab to determine which tab is active and add the active class
  return (
    <TabListWrapper
      {...rest}
      className={clsx(
        'tabs-header',
        {
          'line-at-top': linePosition === 'top',
          'flex-center': centered,
          scrollable: scrollable,
        },
        ...generalClasses(props)
      )}
    >
      {React.Children.map(children, child => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child as any, {
            orderIndex: orderIndex++,
          });
        }
        return child;
      })}
    </TabListWrapper>
  );
}
