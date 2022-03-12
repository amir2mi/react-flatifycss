import React, { useState } from 'react';
import classNames from 'classnames';
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

  const getItemId = (item: TabItemProps, index: number) =>
    getUniqueID(item.title ? item.title.toString() + index : index);

  const visibleItems = items.filter((item) => !item.isHidden);

  return (
    <div
      {...generalAttributes(props)}
      className={classNames(
        'tabs-wrapper',
        {
          bordered: bordered,
        },
        ...generalClasses(props)
      )}
    >
      <div
        className={classNames('tabs-header', {
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
        className={classNames('tabs-content', {
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
              className={classNames(item.className, {
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
