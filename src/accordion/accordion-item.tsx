import React from 'react';
import clsx from 'clsx';
import styled from 'styled-components';
import { AccordionItem as ReachAccordionItem } from '@reach/accordion';
import { FlatifyGeneralProps } from '../interfaces';
import { generalClasses } from '../classes';

export interface AccordionItemProps
  extends FlatifyGeneralProps,
    Omit<React.HTMLAttributes<HTMLElement>, 'color'> {}

const AccordionItemWrapper = styled(ReachAccordionItem)`
  ${({ sx }: AccordionItemProps) => (sx ? sx : '')}
`;

export default function AccordionItem(props: AccordionItemProps) {
  const { children, ...rest } = props;

  return (
    <AccordionItemWrapper
      {...rest}
      className={clsx('accordion-item active', ...generalClasses(props))}
    >
      {children}
    </AccordionItemWrapper>
  );
}
