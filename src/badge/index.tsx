import React, { ElementType } from 'react';
import clsx from 'clsx';
import { FlatifyGeneralProps } from '../interfaces';
import { generalClasses } from '../classes';
import { generalAttributes } from '../attributes';

interface BadgeProps extends FlatifyGeneralProps {
  children?: string | React.ReactNode;
  pulse?: boolean;
  tagName?: ElementType;
  text?: string;
}

export function Badge(props: BadgeProps) {
  const { children, pulse, tagName, text } = props;
  const Badge = tagName || 'span';

  return (
    <Badge
      {...generalAttributes(props)}
      className={clsx(
        'badge',
        {
          pulse: pulse,
        },
        ...generalClasses(props)
      )}
    >
      {children}
      {text}
    </Badge>
  );
}
