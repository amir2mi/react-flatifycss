import React from 'react';
import ReactDOM from 'react-dom';
import clsx from 'clsx';
import styled from 'styled-components';
import { CSSTransition } from 'react-transition-group';
import { FlatifyGeneralProps } from '../interfaces';
import { generalClasses } from '../classes';

export interface ToastProps
  extends FlatifyGeneralProps,
    Omit<React.HTMLAttributes<HTMLElement>, 'color'> {
  children?: React.ReactNode;
  closeButton?: boolean;
  show?: boolean;
  x?: 'left' | 'right' | 'center';
  y?: 'top' | 'bottom';
}

const ToastWrapper = styled.div`
  ${({ sx }: ToastProps) => (sx ? sx : '')}
`;

export default function Toast(props: ToastProps) {
  const {
    children,
    closeButton,
    show,
    x = 'center',
    y = 'bottom',
    ...rest
  } = props;

  const wrapperElement = document.querySelector(`.toast-wrapper.${x}.${y}`);

  if (!wrapperElement) {
    console.error(
      'React FlatifyCSS: To show toasts you must place the <ToastsWrapper> component somewhere in your application.'
    );
    return null;
  }

  return ReactDOM.createPortal(
    <CSSTransition
      in={show}
      timeout={200}
      unmountOnExit
      classNames={{
        enterDone: 'show',
        exitActive: 'toast-will-be-removed',
      }}
    >
      <ToastWrapper
        {...rest}
        className={clsx('toast', ...generalClasses(props))}
      >
        <svg className="toast-svg">...</svg>
        {children}
        {closeButton && (
          <button type="button" className="close-button" aria-label="Close" />
        )}
      </ToastWrapper>
    </CSSTransition>,
    wrapperElement
  );
}
