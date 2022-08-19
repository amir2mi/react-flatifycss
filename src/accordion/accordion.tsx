import React from 'react';
import clsx from 'clsx';
import { Accordion as ReachAccordion } from '@reach/accordion';
import { FlatifyGeneralProps } from '../interfaces';
import { generalClasses } from '../classes';
import { generalAttributes } from '../attributes';

interface AccordionProps extends FlatifyGeneralProps {
  [key: string]: any;
  animation?: 'fade' | 'default';
  bordered?: boolean;
  children: React.ReactNode;
  collapsible?: boolean;
  defaultIndex?: number;
  index?: number;
  onChange?(index?: number): void;
  readOnly?: boolean;
  multiple?: boolean;
}

export default function Accordion(props: AccordionProps) {
  const { animation, bordered, children } = props;
  return (
    <ReachAccordion
      {...generalAttributes(props)}
      {...props}
      className={clsx('accordion', ...generalClasses(props), {
        'fade-animation': animation === 'fade',
        bordered: bordered,
      })}
    >
      {children}
    </ReachAccordion>
  );
}
