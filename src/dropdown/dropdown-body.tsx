import React from 'react';
import clsx from 'clsx';
import { FlatifyGeneralProps } from '../interfaces';
import { generalClasses } from '../classes';
import { generalAttributes } from '../attributes';
import { CSSTransition } from 'react-transition-group';

interface DropdownBodyProps extends FlatifyGeneralProps {
  arrowInnerRef?: React.Ref<HTMLElement>;
  arrowStyles?: React.CSSProperties;
  buttonId?: string;
  children?: React.ReactNode;
  innerRef?: React.Ref<HTMLElement>;
  isOpen?: boolean;
  isMenu?: boolean;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLButtonElement>) => void;
  onFocus?: (event: React.FocusEvent<HTMLButtonElement>) => void;
  onMouseEnter?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onMouseLeave?: (event: React.MouseEvent<HTMLButtonElement>) => void;
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
    onClick,
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
        onClick={onClick}
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
