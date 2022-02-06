import React, { useState } from 'react';
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
  animation?: 'slide' | 'fade' | boolean;
  bordered?: boolean;
  centered?: boolean;
  items: TabItemProps[];
  linePosition?: 'bottom' | 'top';
  scrollable?: boolean;
}

export function Tabs(props: TabsProps) {
  const { animation, bordered, centered, items, linePosition, scrollable } =
    props;

  const [active, setActive] = useState<number>(0);
  const [lastDirection, setLastDirection] = useState<'left' | 'right' | null>(
    null
  );

  const getItemId = (item: TabItemProps) => getUniqueID(item.title?.toString());

  return (
    <div
      className={classNames(
        'tabs-wrapper',
        {
          bordered: bordered,
        },
        ...generalClasses(props)
      )}
      {...generalAttributes(props)}
    >
      <div
        className={classNames('tabs-header', {
          'flex-center': centered,
          'line-at-top': linePosition === 'top',
          scrollable: scrollable,
        })}
        role="tablist"
      >
        {items.map((item, index) => {
          const id = getItemId(item);
          const isActive = active === index;

          return (
            <TabButton
              key={id}
              isActive={isActive}
              panelId={id}
              onClick={() => {
                setActive(index);
                setLastDirection(index > active ? 'right' : 'left');
              }}
            >
              {item.title}
            </TabButton>
          );
        })}
      </div>
      <div
        className={classNames('tabs-content', {
          [animation + '-animation']: animation,
          'no-animation': !animation,
        })}
      >
        {items.map((item, index) => {
          const id = getItemId(item);
          const isActive = active === index;

          return (
            <TabPanel
              key={id}
              isActive={isActive}
              panelId={id}
              className={classNames({
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