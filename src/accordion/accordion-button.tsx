import React from 'react';
import clsx from 'clsx';
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

export default function AccordionButton(props: AccordionButtonProps) {
  const { children, hasIcon, ...rest } = props;
  const { isExpanded } = useAccordionItemContext();

  return (
    <div
      {...generalAttributes(props)}
      className={clsx(
        'accordion-header',
        ...generalClasses(props),
        isExpanded && 'active'
      )}
    >
      <ReachAccordionButton {...rest} className="accordion-toggle">
        {children}
        {hasIcon && <AddButton active={isExpanded} />}
      </ReachAccordionButton>
    </div>
  );
}
