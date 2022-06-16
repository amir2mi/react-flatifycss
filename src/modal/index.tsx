import React from 'react';
import clsx from 'clsx';
import { DialogOverlay, DialogContent } from '@reach/dialog';
import { FlatifyGeneralProps } from '../interfaces';

interface ModalProps extends FlatifyGeneralProps {
  [key: string]: any;
  isOpen?: boolean;
  onDismiss?(event: React.MouseEvent | React.KeyboardEvent): void;
  wrapperClassName?: string;
}

export function Modal(props: ModalProps) {
  const { className, children, wrapperClassName, ...rest } = props;

  return (
    <DialogOverlay
      {...rest}
      className={clsx('backdrop-layer show', wrapperClassName)}
    >
      <DialogContent className={clsx('modal show', className)}>
        {children}
      </DialogContent>
    </DialogOverlay>
  );
}
