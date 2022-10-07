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
  }, [show, autoClose, duration, onClose]);

  // select the proper toasts wrapper element for ReactDOM portal
  const wrapperElement = document.querySelector(`.toast-wrapper.${x}.${y}`);
  if (!wrapperElement) {
    console.error(
      `React FlatifyCSS: Could not find toasts wrapper element, to display toasts, you must place the <ToastsWrapper /> component somewhere in your application.`
    );
    return null;
  }

  return (
    <>
      {ReactDOM.createPortal(
        <CSSTransition
          in={show}
          timeout={200}
          unmountOnExit
          classNames={{
            exitActive: 'toast-will-be-removed',
          }}
        >
          <ToastWrapper
            {...rest}
            role={type}
            aria-live={type === 'alert' ? 'assertive' : 'polite'}
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
      )}
    </>
  );
}
