import React, { useRef } from 'react';
import classNames from 'classnames';

interface AccordionItemProps {
  content: string | React.ReactNode;
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
  const thisItem = useRef(null);
  const thisItemCollapse = useRef(null);

  const Heading = heading || 'h2';

  return (
    <div
      ref={thisItem}
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
          {!disableAddButton && <span className="add-button"></span>}
        </button>
      </Heading>
      <div
        ref={thisItemCollapse}
        id="accordion-1"
        className={classNames('accordion-collapse', {
          'modal-will-be-shown': isOpen,
          'modal-will-be-hidden': !isOpen,
        })}
        // onAnimationEnd={() => alert('yell')}
      >
        <div className="accordion-body">{content}</div>
      </div>
    </div>
  );
}
