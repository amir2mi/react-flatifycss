import React from 'react';
import classNames from 'classnames';
import { AddButton } from '../add-button';

export interface AccordionItemProps {
  content: string | React.ReactNode | Element;
  disableAddButton?: boolean;
  heading?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  isOpen?: boolean;
  onClick?: () => void;
  title: string | React.ReactNode;
}

export function AccordionItem({
  content,
  disableAddButton,
  heading,
  isOpen,
  onClick,
  title,
}: AccordionItemProps) {
  const Heading = heading || 'h2';

  return (
    <div
      className={classNames('accordion-item', {
        active: isOpen,
      })}
    >
      <Heading className="accordion-header">
        <button
          className="accordion-toggle"
          aria-expanded="false"
          aria-controls="accordion-1"
          onClick={onClick}
        >
          {title}
          {!disableAddButton && (
            <AddButton tagName="span" label="" active={isOpen} />
          )}
        </button>
      </Heading>
      <div
        id="accordion-1"
        className={classNames('accordion-collapse', {
          'modal-will-be-shown': isOpen,
          'modal-will-be-hidden': !isOpen,
        })}
      >
        <div className="accordion-body">{content}</div>
      </div>
    </div>
  );
}
