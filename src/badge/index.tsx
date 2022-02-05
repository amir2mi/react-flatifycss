import React, { ElementType } from 'react';
import classNames from 'classnames';
import { FlatifyGeneralProps } from '../interfaces';
import { generalClasses } from '../classes';
import { generalAttributes } from '../attributes';

interface BadgeProps extends FlatifyGeneralProps {
  children: string | React.ReactNode;
  pulse: boolean;
  tagName: ElementType;
}

export function Badge(props: BadgeProps) {
  const { children, pulse, tagName } = props;
  const Badge = tagName || 'span';

  return (
    <Badge
      {...generalAttributes(props)}
      className={classNames(
        'badge',
        {
          pulse: pulse,
        },
        ...generalClasses(props)
      )}
    >
      {children}
    </Badge>
  );
}
