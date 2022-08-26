import React from 'react';
import clsx from 'clsx';
import { CSSTransition } from 'react-transition-group';
import getUniqueID from '../utils/id-generator';
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
  const uniqueId = getUniqueID(String(title) + String(content));

  return (
    <CSSTransition
      in={isOpen}
      timeout={250}
      classNames={{
        enterDone: 'active',
        exitActive: 'active',
      }}
    >
      <div className={clsx('accordion-item', ...generalClasses(props))}>
        <Heading className="accordion-header">
          <button
            className="accordion-toggle"
            aria-expanded={isOpen}
            aria-controls={uniqueId}
            onClick={onClick}
          >
            {title}
            {!disableAddButton && (
              <AddButton label="" as="span" active={isOpen} />
            )}
          </button>
        </Heading>
        <CSSTransition
          in={isOpen}
          timeout={250}
          classNames={{
            enterDone: 'modal-will-be-shown',
            exitActive: 'modal-will-be-hidden',
          }}
        >
          <div
            id={uniqueId}
            className={clsx('accordion-collapse', {
              'modal-will-be-shown': isOpen,
              'modal-will-be-hidden': !isOpen,
            })}
          >
            <div className="accordion-body">
              {content}
              {children}
            </div>
          </div>
        </CSSTransition>
      </div>
    </CSSTransition>
  );
}
