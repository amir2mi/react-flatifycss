import React, { Fragment, useState } from 'react';
import classNames from 'classnames';
import { FlatifyGeneralProps } from '../interfaces';
import { generalClasses } from '../classes';
import { AccordionItem, AccordionItemProps } from './accordion-item';

interface AccordionProps extends FlatifyGeneralProps {
  bordered?: boolean;
  expendable?: boolean;
  items: AccordionItemProps[];
}

export function Accordion(props: AccordionProps) {
  const [openedItem, setOpenedItem] = useState<number[]>([]);
  const { bordered, expendable, id, items } = props;

  // when no items are passed, return null
  if (!items) return null;

  return (
    <div
      id={id}
      className={classNames(
        'accordion',
        { bordered: bordered },
        ...generalClasses(props)
      )}
    >
      {items.map((item, index) => {
        const isOpen = openedItem.filter((i) => i === index).length > 0;

        return (
          <Fragment key={index}>
            <AccordionItem
              isOpen={isOpen}
              // index={}
              title={item.title}
              content={item.content}
              onClick={() => {
                // expendable expects multiple opened items
                if (expendable) {
                  if (isOpen) {
                    setOpenedItem((old) => [...old.filter((i) => i !== index)]);
                  } else {
                    setOpenedItem((old) => [...old, index]);
                  }
                } else {
                  // toggle active item
                  isOpen ? setOpenedItem([]) : setOpenedItem([index]);
                }
              }}
            />
          </Fragment>
        );
      })}
    </div>
  );
}
