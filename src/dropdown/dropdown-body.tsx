import React from 'react';
import clsx from 'clsx';
import { FlatifyGeneralProps } from '../interfaces';
import { generalClasses } from '../classes';
import { generalAttributes } from '../attributes';
import { CSSTransition } from 'react-transition-group';

interface DropdownBodyProps
  extends FlatifyGeneralProps,
    Omit<React.HTMLAttributes<HTMLElement>, 'color'> {
  arrowInnerRef?: React.Ref<HTMLElement>;
  arrowStyles?: React.CSSProperties;
  buttonId?: string;
  children?: React.ReactNode;
  innerRef?: React.Ref<HTMLElement>;
  isOpen?: boolean;
  isMenu?: boolean;
  onBodyMouseEnter?: (event: React.MouseEvent<HTMLElement>) => void;
  style?: React.CSSProperties;
  tagName?: React.ElementType;
  __TYPE?: string;
}

export default function DropdownBody(props: DropdownBodyProps) {
  const {
    arrowInnerRef,
    arrowStyles,
    buttonId,
    children,
    innerRef,
    isOpen,
    isMenu,
    onBodyMouseEnter,
    style,
    tagName,
    __TYPE,
    ...rest
  } = props;

  const DropdownBodyElement: React.ElementType =
    tagName || (isMenu ? 'ul' : 'div');
  const DropdownArrow: React.ElementType = isMenu ? 'li' : 'div';

  return (
    <CSSTransition
      in={isOpen}
      timeout={300}
      classNames={{
        enterDone: 'show',
        exitActive: 'show dropdown-will-be-hidden',
      }}
    >
      <DropdownBodyElement
        {...rest}
        {...generalAttributes}
        ref={innerRef}
        style={style}
        className={clsx(
          'dropdown',
          isMenu && 'menu-items-wrapper',
          ...generalClasses(props)
        )}
        aria-labelledby={buttonId}
        onMouseEnter={onBodyMouseEnter}
      >
        {children}
        <DropdownArrow aria-hidden={false}>
          <span
            ref={arrowInnerRef}
            style={arrowStyles}
            className="pointer-arrow"
          ></span>
        </DropdownArrow>
      </DropdownBodyElement>
    </CSSTransition>
  );
}

DropdownBody.defaultProps = {
  __TYPE: 'DropdownBody',
};
