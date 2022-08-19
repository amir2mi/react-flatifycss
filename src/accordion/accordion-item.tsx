import React from 'react';
import clsx from 'clsx';
import { AccordionItem as ReachAccordionItem } from '@reach/accordion';
import { FlatifyGeneralProps } from '../interfaces';
import { generalClasses } from '../classes';
import { generalAttributes } from '../attributes';

interface AccordionItemProps extends FlatifyGeneralProps {
  [key: string]: any;
}

export default function AccordionItem(props: AccordionItemProps) {
  const { children, ...rest } = props;

  return (
    <ReachAccordionItem
      {...generalAttributes(props)}
      {...rest}
      className={clsx('accordion-item active', ...generalClasses(props))}
    >
      {children}
    </ReachAccordionItem>
  );
}
