import React, { useEffect, useState, useRef } from 'react';
import ReactDOM from 'react-dom';
import clsx from 'clsx';
import styled from 'styled-components';
import { Dialog } from '@reach/dialog';
import { CSSTransition } from 'react-transition-group';
import { FlatifyGeneralProps } from '../interfaces';
import { generalClasses } from '../classes';

export interface ModalProps
  extends FlatifyGeneralProps,
    Omit<React.HTMLAttributes<HTMLElement>, 'color'> {
  bordered?: boolean;
  isOpen?: boolean;
  onDismiss?(event: React.MouseEvent | React.KeyboardEvent): void;
  overlayClassName?: string;
  position?: 'center' | 'top' | 'bottom' | 'left' | 'right';
  disableOverlayClick?: boolean;
}

const ModalWrapper = styled(Dialog)`
  ${({ sx }: ModalProps) => (sx ? sx : '')}
`;

export default function Modal(props: ModalProps) {
  const {
    bordered,
    children,
    isOpen,
    onDismiss,
    overlayClassName,
    position,
    disableOverlayClick,
    ...rest
  } = props;

  const [delayedIsOpen, setDelayedIsOpen] = useState(isOpen);
  const toggleTimeout = useRef<NodeJS.Timeout | null>(null);

  // listen to isOpen prop and delay modal on close
  useEffect(() => {
    toggleTimeout.current && clearTimeout(toggleTimeout.current);
    if (isOpen == false) {
      toggleTimeout.current = setTimeout(() => {
        setDelayedIsOpen(isOpen);
      }, 300);
    } else {
      setDelayedIsOpen(isOpen);
    }

    return () => {
      toggleTimeout.current && clearTimeout(toggleTimeout.current);
    };
  }, [isOpen]);

  return (
    <>
      <ModalWrapper
        {...rest}
        className={clsx('modal show', ...generalClasses(props), {
          bordered: bordered,
          'modal-will-be-hidden': !isOpen,
          [`modal-${position}`]: position,
        })}
        isOpen={delayedIsOpen}
        onDismiss={onDismiss}
      >
        {children}
      </ModalWrapper>

      {ReactDOM.createPortal(
        <CSSTransition
          in={isOpen}
          timeout={200}
          unmountOnExit
          classNames={{
            enterDone: 'show',
            exitActive: 'anim-fade-out show',
          }}
        >
          <div
            className={clsx('backdrop-layer', overlayClassName)}
            onClick={e => !disableOverlayClick && onDismiss?.(e)}
          />
        </CSSTransition>,
        document.body
      )}
    </>
  );
}
