import React from 'react';
import clsx from 'clsx';
import styled from 'styled-components';
import { Accordion as ReachAccordion } from '@reach/accordion';
import { FlatifyGeneralProps } from '../interfaces';
import { generalClasses } from '../classes';
import { generalAttributes } from '../attributes';

interface AccordionProps
  extends FlatifyGeneralProps,
    Omit<React.HTMLAttributes<HTMLElement>, 'color' | 'onChange'> {
  animation?: 'fade' | 'default' | string;
  bordered?: boolean;
  children: React.ReactNode;
  collapsible?: boolean;
  defaultIndex?: number;
  index?: number;
  onChange?(index?: number): void;
  readOnly?: boolean;
  multiple?: boolean;
}

const AccordionWrapper = styled(ReachAccordion)`
  ${({ sx }: AccordionProps) => (sx ? sx : '')}
  ${({ animation }: AccordionProps) =>
    animation ? `--flatify__accordion-animation-show: ${animation}` : ''}
`;

export default function Accordion(props: AccordionProps) {
  const { animation, bordered, children, ...rest } = props;
  return (
    <AccordionWrapper
      {...generalAttributes(props)}
      {...rest}
      animation={animation}
      className={clsx('accordion', ...generalClasses(props), {
        'fade-animation': animation === 'fade',
        bordered: bordered,
      })}
    >
      {children}
    </AccordionWrapper>
  );
}
