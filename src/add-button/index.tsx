import React from 'react';
import classNames from 'classnames';
import { FlatifyGeneralProps } from '../interfaces';
import { generalClasses } from '../classes';

interface AddButtonProps extends FlatifyGeneralProps {
  active?: boolean;
  label?: string | boolean;
  onClick?: () => void;
  tagName?: string;
}

export function AddButton(props: AddButtonProps) {
  const { active, label, onClick, tagName } = props;

  return React.createElement(tagName || 'button', {
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
