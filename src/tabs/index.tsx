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
  isHidden?: boolean; // do not render
  key: string | number;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  title: string | React.ReactNode;
  isInvisible?: boolean; // render but not visible
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

  const unHiddenItems = items.filter((item) => !item.isHidden);
  const visibleItems = items.filter((item) => !item.isInvisible);

  const [active, setActive] = useState<string | number>(visibleItems[0].key);
  const [lastDirection, setLastDirection] = useState<'left' | 'right' | null>(
    null
  );

  const getItemId = (item: TabItemProps, index: number) =>
    getUniqueID(item.title ? item.title.toString() + index : index);

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
        {unHiddenItems.map((item, index) => {
          const id = getItemId(item, index);
          const isActive = active === item.key;

          return (
            <TabButton
              key={id}
              hidden={item.isInvisible}
              isActive={isActive}
              panelId={id}
              onClick={(e) => {
                setActive(item.key);
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
        className={classNames('tabs-content', {
          [animation + '-animation']: animation,
          'no-animation': !animation,
        })}
      >
        {unHiddenItems.map((item, index) => {
          const id = getItemId(item, index);
          const isActive = active === item.key;

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
