import React, { ElementType } from 'react';
import classNames from 'classnames';
import { FlatifyGeneralProps } from '../interfaces';
import { generalClasses } from '../classes';

interface AddButtonProps extends FlatifyGeneralProps {
  active?: boolean;
  label?: string | boolean;
  onClick?: () => void;
  tagName?: ElementType;
}

export function AddButton(props: AddButtonProps) {
  const { active, id, label, onClick, tagName } = props;

  return React.createElement(tagName || 'button', {
    id,
    className: classNames(
      'add-button',
      {
        active: active,
      },
      ...generalClasses(props)
    ),
    'aria-label': !!label,
    onClick: onClick,
  });
}
