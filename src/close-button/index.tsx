import React from 'react';
import clsx from 'clsx';
import { FlatifyGeneralProps } from '../interfaces';
import { generalClasses } from '../classes';

interface CloseButtonProps extends FlatifyGeneralProps {
  isButton?: boolean;
  label: string;
  onClick?: () => void;
}

export function CloseButton(props: CloseButtonProps) {
  const { isButton, label, onClick } = props;

  return (
    <button
      className={clsx(
        'close-button',
        {
          button: isButton,
        },
        ...generalClasses(props)
      )}
      aria-label={label}
      onClick={onClick}
    ></button>
  );
}
