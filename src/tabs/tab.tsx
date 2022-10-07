import React, { useEffect, useRef } from 'react';
import clsx from 'clsx';
import styled from 'styled-components';
import { Tab as ReachTab, useTabsContext } from '@reach/tabs';
import { FlatifyGeneralProps } from '../interfaces';
import { generalClasses } from '../classes';

export interface TabProps
  extends FlatifyGeneralProps,
    Omit<React.HTMLAttributes<HTMLElement>, 'color'> {
  children: React.ReactNode;
  orderIndex?: number;
}

const TabWrapper = styled(ReachTab)`
  ${({ sx }: TabProps) => (sx ? sx : '')}
`;

export default function Tab(props: TabProps) {
  const { orderIndex, onClick, ...rest } = props;
  const { selectedIndex } = useTabsContext();
  const el = useRef<any>(null);

  // ReachTab does not support onClick; if it has onClick prop, create event listener for each tab
  useEffect(() => {
    const tabElement = el.current;
    tabElement && onClick && tabElement.addEventListener('click', onClick);

    return () => {
      tabElement && onClick && tabElement.removeEventListener('click', onClick);
    };
  }, [onClick]);

  return (
    <TabWrapper
      {...rest}
      ref={el}
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
