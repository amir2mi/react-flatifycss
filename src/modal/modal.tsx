import React from 'react';
import clsx from 'clsx';
import { Dialog } from '@reach/dialog';
import { animated, useTransition } from 'react-spring';
import { FlatifyGeneralProps } from '../interfaces';
import { generalClasses } from '../classes';
import ModalHeader from './modal-header';
import ModalFooter from './modal-footer';

const AnimatedDialog = animated(Dialog);

interface ModalProps extends FlatifyGeneralProps {
  [key: string]: any;
  'aria-label'?: string;
  'aria-labelledby'?: string;
  bordered?: boolean;
  isOpen?: boolean;
  onDismiss?(event: React.MouseEvent | React.KeyboardEvent): void;
  overlayClassName?: string;
  position?: 'center' | 'top' | 'bottom' | 'left' | 'right';
  disableOverlayClick?: boolean;
}

export default function Modal(props: ModalProps) {
  const {
    bordered,
    children,
    className,
    isOpen,
    onDismiss,
    overlayClassName,
    position,
    disableOverlayClick,
    ...rest
  } = props;

  const fadeTransition = useTransition(isOpen, {
    from: { opacity: 0 },
    enter: { opacity: 0.5 },
    leave: { opacity: 0 },
    config: { duration: 200 },
  });

  return (
    <>
      <AnimatedDialog
        {...rest}
        className={clsx('modal show', ...generalClasses(props), className, {
          bordered: bordered,
          [`modal-${position}`]: position,
        })}
        isOpen={isOpen}
        onDismiss={onDismiss}
      >
        {children}
      </AnimatedDialog>

      {fadeTransition(
        (styles, item) =>
          item && (
            <animated.div
              style={{
                opacity: styles.opacity,
              }}
              className={clsx('backdrop-layer show', overlayClassName)}
              onClick={e => !disableOverlayClick && onDismiss?.(e)}
            />
          )
      )}
    </>
  );
}

export { ModalHeader, ModalFooter };
