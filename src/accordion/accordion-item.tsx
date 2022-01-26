import React from 'react';
import classNames from 'classnames';
import { FlatifyGeneralProps } from '../interfaces';
import { generalClasses } from '../classes';
import { AddButton } from '../add-button';

export interface AccordionItemProps extends FlatifyGeneralProps {
  children?: React.ReactNode;
  content: string | React.ReactNode;
  disableAddButton?: boolean;
  heading?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  isOpen?: boolean;
  onClick?: () => void;
  title: string | React.ReactNode;
}

export function AccordionItem(props: AccordionItemProps) {
  const {
    children,
    content,
    disableAddButton,
    heading,
    isOpen,
    onClick,
    title,
  } = props;
  const Heading = heading || 'h2';

  return (
    <div
      className={classNames(
        'accordion-item',
        {
          active: isOpen,
        },
        ...generalClasses(props)
      )}
    >
      <Heading className="accordion-header">
        <button
          className="accordion-toggle"
          aria-expanded="false"
          aria-controls="accordion-1"
          onClick={onClick}
        >
          {title}
          {!disableAddButton && <AddButton tagName="span" active={isOpen} />}
        </button>
      </Heading>
      <div
        id="accordion-1"
        className={classNames('accordion-collapse', {
          'modal-will-be-shown': isOpen,
          'modal-will-be-hidden': !isOpen,
        })}
      >
        <div className="accordion-body">
          {content}
          {children}
        </div>
      </div>
    </div>
  );
}
