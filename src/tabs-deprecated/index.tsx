import React, { useState } from 'react';
import clsx from 'clsx';
import getUniqueID from '../utils/id-generator';
import { FlatifyGeneralProps } from '../interfaces';
import { generalClasses } from '../classes';
import { generalAttributes } from '../attributes';
import { TabButton } from './tab-button';
import { TabPanel } from './tab-panel';

interface TabItemProps {
  buttonHref?: string;
  buttonTagName?: string;
  className?: string;
  content: string | React.ReactNode;
  id?: string;
  isHidden?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  title: string | React.ReactNode;
}

interface TabsProps extends FlatifyGeneralProps {
  animation?: 'slide' | 'fade' | boolean;
  bordered?: boolean;
  centered?: boolean;
  defaultTab?: number;
  items: TabItemProps[];
  linePosition?: 'bottom' | 'top';
  scrollable?: boolean;
}

export function Tabs(props: TabsProps) {
  const {
    animation,
    bordered,
    centered,
    defaultTab,
    items,
    linePosition,
    scrollable,
  } = props;

  const [active, setActive] = useState<number>(defaultTab || 0);
  const [lastDirection, setLastDirection] = useState<'left' | 'right' | null>(
    null
  );

  const getItemId = (item: TabItemProps, index: number) =>
    getUniqueID(item.title ? item.title.toString() + index : index);

  const visibleItems = items.filter((item) => !item.isHidden);

  return (
    <div
      {...generalAttributes(props)}
      className={clsx(
        'tabs-wrapper',
        {
          bordered: bordered,
        },
        ...generalClasses(props)
      )}
    >
      <div
        className={clsx('tabs-header', {
          'flex-center': centered,
          'line-at-top': linePosition === 'top',
          scrollable: scrollable,
        })}
        role="tablist"
      >
        {visibleItems.map((item, index) => {
          const id = getItemId(item, index);
          const isActive = active === index;

          return (
            <TabButton
              key={id}
              isActive={isActive}
              panelId={id}
              tagName={item.buttonTagName}
              href={item.buttonHref}
              onClick={(e) => {
                setActive(index);
                setLastDirection(index > active ? 'right' : 'left');
                item.onClick?.(e);
              }}
            >
              {item.title}
            </TabButton>
          );
        })}
      </div>
      <div
        className={clsx('tabs-content', {
          [animation + '-animation']: animation,
          'no-animation': !animation,
        })}
      >
        {visibleItems.map((item, index) => {
          const id = item.id || getItemId(item, index);
          const isActive = active === index;

          return (
            <TabPanel
              key={id}
              isActive={isActive}
              panelId={id}
              className={clsx(item.className, {
                'slide-left': isActive && lastDirection === 'left',
                'slide-right': isActive && lastDirection === 'right',
              })}
            >
              {item.content}
            </TabPanel>
          );
        })}
      </div>
    </div>
  );
}
