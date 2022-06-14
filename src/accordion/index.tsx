import React, { Fragment, useState } from 'react';
import clsx from 'clsx';
import { FlatifyGeneralProps } from '../interfaces';
import { generalClasses } from '../classes';
import { generalAttributes } from '../attributes';
import { AccordionItem, AccordionItemProps } from './accordion-item';

interface AccordionProps extends FlatifyGeneralProps {
  bordered?: boolean;
  expendable?: boolean;
  items: AccordionItemProps[];
}

export function Accordion(props: AccordionProps) {
  const { bordered, expendable, items } = props;

  // array of active accordion items indexes
  const [openedItem, setOpenedItem] = useState<number[]>([]);

  // when no items are passed, return
  if (!items) return null;

  return (
    <div
      className={clsx(
        'accordion',
        { bordered: bordered },
        ...generalClasses(props)
      )}
      {...generalAttributes(props)}
    >
      {items.map((item, index) => {
        const isOpen = openedItem.filter((i) => i === index).length > 0;

        return (
          <Fragment key={index}>
            <AccordionItem
              {...item}
              isOpen={isOpen}
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
