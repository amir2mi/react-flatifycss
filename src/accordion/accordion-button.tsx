import React from 'react';
import clsx from 'clsx';
import styled from 'styled-components';
import {
  AccordionButton as ReachAccordionButton,
  useAccordionItemContext,
} from '@reach/accordion';
import { AddButton } from '../add-button';
import { FlatifyGeneralProps } from '../interfaces';
import { generalClasses } from '../classes';
import { generalAttributes } from '../attributes';

interface AccordionButtonProps extends FlatifyGeneralProps {
  [key: string]: any;
  hasIcon?: boolean;
}

const AccordionHeader = styled.div`
  ${({ sx }: AccordionButtonProps) => (sx ? sx : '')}
`;

export default function AccordionButton(props: AccordionButtonProps) {
  const { children, hasIcon, sx, ...rest } = props;
  const { isExpanded } = useAccordionItemContext();

  return (
    <AccordionHeader
      {...generalAttributes(props)}
      sx={sx}
      className={clsx(
        'accordion-header',
        ...generalClasses(props),
        isExpanded && 'active'
      )}
    >
      <ReachAccordionButton {...rest} className="accordion-toggle">
        {children}
        {hasIcon && <AddButton label="" tagName="span" active={isExpanded} />}
      </ReachAccordionButton>
    </AccordionHeader>
  );
}
