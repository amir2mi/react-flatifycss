import React from 'react';
import clsx from 'clsx';
import styled from 'styled-components';
import { FlatifyGeneralProps } from '../interfaces';
import { generalClasses } from '../classes';
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
  __TYPE?: 'DropdownBody';
}

const DropdownBodyWrapper = styled.div`
  ${({ sx }: DropdownBodyProps) => (sx ? sx : '')}
`;

export default function DropdownBody(props: DropdownBodyProps) {
  const {
    as,
    arrowInnerRef,
    arrowStyles,
    buttonId,
    children,
    innerRef,
    isOpen,
    isMenu,
    onBodyMouseEnter,
    __TYPE,
    ...rest
  } = props;

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
      <DropdownBodyWrapper
        {...rest}
        as={as || (isMenu ? 'ul' : 'div')}
        ref={innerRef}
        aria-labelledby={buttonId}
        onMouseEnter={onBodyMouseEnter}
        className={clsx(
          'dropdown',
          isMenu && 'menu-items-wrapper',
          ...generalClasses(props)
        )}
      >
        {children}
        <DropdownArrow aria-hidden={false}>
          <span
            ref={arrowInnerRef}
            style={arrowStyles}
            className="pointer-arrow"
          />
        </DropdownArrow>
      </DropdownBodyWrapper>
    </CSSTransition>
  );
}

DropdownBody.defaultProps = {
  __TYPE: 'DropdownBody',
};
