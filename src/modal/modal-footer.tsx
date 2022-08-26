import React from 'react';
import clsx from 'clsx';
import { FlatifyGeneralProps } from '../interfaces';
import { generalClasses } from '../classes';

interface ModalFooterProps extends FlatifyGeneralProps {
  [key: string]: any;
  className?: string;
  children?: React.ReactNode;
}

export default function ModalFooter(props: ModalFooterProps) {
  const { children, className } = props;

  return (
    <footer
      className={clsx('modal-footer', ...generalClasses(props), className)}
    >
      {children}
    </footer>
  );
}
