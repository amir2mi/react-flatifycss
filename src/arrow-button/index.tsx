import React from 'react';
import classNames from 'classnames';
import { FlatifyGeneralProps } from '../interfaces';
import { generalClasses } from '../classes';

interface ArrowButtonProps extends FlatifyGeneralProps {
  direction?: 'top' | 'bottom' | 'left' | 'right';
  disabled?: boolean;
  isButton?: boolean;
  isFlipped?: boolean;
  label: string;
  onClick?: () => void;
}

export function ArrowButton(props: ArrowButtonProps) {
  const { direction, disabled, id, isButton, isFlipped, label, onClick } =
    props;

  return (
    <button
      id={id}
      className={classNames(
        'arrow-button',
        {
          button: isButton,
          'arrow-flip': isFlipped,
          ['arrow-' + direction]: direction,
        },
        ...generalClasses(props)
      )}
      aria-label={label}
      disabled={disabled}
      onClick={onClick}
    ></button>
  );
}
