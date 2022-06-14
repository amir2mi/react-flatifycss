import React from 'react';
import clsx from 'clsx';
import { FlatifyGeneralProps } from '../interfaces';
import { generalClasses } from '../classes';
import { generalAttributes } from '../attributes';

interface ArrowButtonProps extends FlatifyGeneralProps {
  direction?: 'top' | 'bottom' | 'left' | 'right';
  isButton?: boolean;
  isFlipped?: boolean;
  label: string;
  onClick?: () => void;
}

export function ArrowButton(props: ArrowButtonProps) {
  const { direction, isButton, isFlipped, label, onClick } = props;

  return (
    <button
      className={clsx(
        'arrow-button',
        {
          button: isButton,
          'arrow-flip': isFlipped,
          ['arrow-' + direction]: direction,
        },
        ...generalClasses(props)
      )}
      {...generalAttributes(props)}
      aria-label={label}
      onClick={onClick}
    ></button>
  );
}
