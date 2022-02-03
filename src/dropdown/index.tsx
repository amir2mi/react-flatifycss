import React, { ElementType, useState } from 'react';
import classNames from 'classnames';
import getUniqueID from '../utils/id-generator';
import { FlatifyGeneralProps } from '../interfaces';
import { generalClasses } from '../classes';

interface DropdownProps extends FlatifyGeneralProps {
  buttonArrow?: boolean;
  buttonLabel?: string | React.ReactNode;
  children?: string | React.ReactNode;
  tagName?: ElementType;
  isMenu?: boolean;
}

export function Dropdown(props: DropdownProps) {
  const [isOpen, setOpen] = useState<boolean>(false);
  const { buttonArrow, buttonLabel, children, className, id, isMenu, tagName } =
    props;
  const DropdownBody = tagName || 'ul';
  const buttonId = getUniqueID(JSON.stringify(buttonLabel));

  return (
    <div id={id} className={classNames('dropdown-wrapper', className)}>
      <button
        id={buttonId}
        aria-expanded={false}
        className={classNames(
          'button dropdown-toggle',
          {
            'arrow-button': buttonArrow,
          },
          ...generalClasses(props)
        )}
        onClick={() => setOpen((old) => !old)}
      >
        {buttonLabel}
      </button>

      {isOpen && (
        <DropdownBody
          className={classNames(
            'dropdown',
            { 'menu-items-wrapper': isMenu },
            ...generalClasses(props)
          )}
          aria-labelledby={buttonId}
        >
          {children}
          <div aria-hidden="true">
            <span className="pointer-arrow"></span>
          </div>
        </DropdownBody>
      )}
    </div>
  );
}
