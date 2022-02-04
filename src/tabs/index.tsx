import React, { ElementType, useEffect, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import classNames from 'classnames';
import getUniqueID from '../utils/id-generator';
import { FlatifyGeneralProps } from '../interfaces';
import { generalClasses } from '../classes';
import { generalAttributes } from '../attributes';
import { TabButton } from './tab-button';
import { TabPanel } from './tab-panel';

interface TabItemProps {
  content: string | React.ReactNode;
  title: string | React.ReactNode;
}

interface TabsProps extends FlatifyGeneralProps {
  items: TabItemProps[];
}

export function Tabs(props: TabsProps) {
  const { items } = props;

  const getItemId = (item: TabItemProps) => getUniqueID(item.title?.toString());

  return (
    <div
      className={classNames('tabs-wrapper', ...generalClasses(props))}
      {...generalAttributes(props)}
    >
      <div className="tabs-header" role="tablist">
        {items.map((item) => (
          <TabButton isActive={false} panelId={getItemId(item)}>
            {item.title}
          </TabButton>
        ))}
      </div>
      <div className="tabs-content">
        {items.map((item) => (
          <TabPanel isActive={false} panelId={getItemId(item)}>
            {item.content}
          </TabPanel>
        ))}
      </div>
    </div>
  );
}
