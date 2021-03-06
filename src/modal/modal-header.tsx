import React from 'react';
import clsx from 'clsx';
import { FlatifyGeneralProps } from '../interfaces';
import { generalClasses } from '../classes';
import { generalAttributes } from '../attributes';

interface ModalHeaderProps extends FlatifyGeneralProps {
  [key: string]: any;
  className?: string;
  children?: React.ReactNode;
}

export default function ModalHeader(props: ModalHeaderProps) {
  const { children, className } = props;

  return (
    <header
      {...generalAttributes(props)}
      className={clsx('modal-header', ...generalClasses(props), className)}
    >
      {children}
    </header>
  );
}
