import React from 'react';
import clsx from 'clsx';
import styled from 'styled-components';
import { AccordionItem as ReachAccordionItem } from '@reach/accordion';
import { FlatifyGeneralProps } from '../interfaces';
import { generalClasses } from '../classes';
import { generalAttributes } from '../attributes';

interface AccordionItemProps extends FlatifyGeneralProps {
  [key: string]: any;
}

const AccordionItemWrapper = styled(ReachAccordionItem)`
  ${({ sx }: AccordionItemProps) => (sx ? sx : '')}
`;

export default function AccordionItem(props: AccordionItemProps) {
  const { children, ...rest } = props;

  return (
    <AccordionItemWrapper
      {...generalAttributes(props)}
      {...rest}
      className={clsx('accordion-item active', ...generalClasses(props))}
    >
      {children}
    </AccordionItemWrapper>
  );
}
