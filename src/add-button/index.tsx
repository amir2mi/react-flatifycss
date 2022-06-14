import React, { ElementType } from 'react';
import clsx from 'clsx';
import { FlatifyGeneralProps } from '../interfaces';
import { generalClasses } from '../classes';
import { generalAttributes } from '../attributes';

interface AddButtonProps extends FlatifyGeneralProps {
  active?: boolean;
  label?: string | boolean;
  onClick?: () => void;
  tagName?: ElementType;
}

export function AddButton(props: AddButtonProps) {
  const { active, label, onClick, tagName } = props;

  return React.createElement(tagName || 'button', {
    className: clsx(
      'add-button',
      {
        active: active,
      },
      ...generalClasses(props)
    ),
    ...generalAttributes(props),
    'aria-label': !!label,
    onClick: onClick,
  });
}
