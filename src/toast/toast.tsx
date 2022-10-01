import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import clsx from 'clsx';
import styled from 'styled-components';
import { CSSTransition } from 'react-transition-group';
import { FlatifyGeneralProps } from '../interfaces';
import { generalClasses } from '../classes';

export interface ToastProps
  extends FlatifyGeneralProps,
    Omit<React.HTMLAttributes<HTMLElement>, 'color'> {
  autoClose?: boolean;
  children?: React.ReactNode;
  closeButton?: boolean;
  duration?: number;
  onClose?: () => void;
  show?: boolean;
  showAnimation?: string;
  hideAnimation?: string;
  type?: 'status' | 'alert';
  x?: 'left' | 'right' | 'center';
  y?: 'top' | 'bottom';
}

const ToastWrapper = styled.div`
 ${({ showAnimation }: ToastProps) =>
   showAnimation ? `--flatify__toast-animation-show: ${showAnimation};` : ''}
  ${({ hideAnimation }: ToastProps) =>
    hideAnimation ? `--flatify__toast-animation-hide: ${hideAnimation};` : ''}
  ${({ sx }: ToastProps) => (sx ? sx : '')}
`;

export default function Toast(props: ToastProps) {
  const {
    autoClose,
    children,
    closeButton,
    duration = 3000,
    onClose,
    show,
    type,
    x = 'center',
    y = 'bottom',
    ...rest
  } = props;

  // select the proper toasts wrapper element for ReactDOM portal
  const wrapperElement = document.querySelector(`.toast-wrapper.${x}.${y}`);
  if (!wrapperElement) {
    console.error(
      'React FlatifyCSS: To display toasts, you must place the <ToastsWrapper /> component somewhere in your application.'
    );
    return null;
  }

  const closeTimeout = useRef<NodeJS.Timeout | null>(null);

  // emit onClose after the given duration
  useEffect(() => {
    if (!autoClose) return;
    closeTimeout.current && clearTimeout(closeTimeout.current);
    if (show) {
      closeTimeout.current = setTimeout(() => {
        onClose?.();
      }, duration);
    }
  }, [show]);

  return ReactDOM.createPortal(
    <CSSTransition
      in={show}
      timeout={200}
      unmountOnExit
      classNames={{
        exitActive: 'toast-will-be-removed',
      }}
    >
      <ToastWrapper
        role={type}
        aria-live={type === 'alert' ? 'assertive' : 'polite'}
        {...rest}
        aria-atomic="true"
        className={clsx('toast', ...generalClasses(props))}
      >
        {children}
        {closeButton && (
          <button
            onClick={onClose}
            type="button"
            className="close-button"
            aria-label="Close"
          />
        )}
      </ToastWrapper>
    </CSSTransition>,
    wrapperElement
  );
}
