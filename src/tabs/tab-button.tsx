import React from 'react';
import classNames from 'classnames';

interface TabButtonProps {
  children?: string | React.ReactNode;
  href?: string;
  isActive: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  panelId: string;
  tagName?: string;
}

export function TabButton(props: TabButtonProps) {
  const { children, href, isActive, onClick, panelId, tagName } = props;
  const Button = tagName || 'button';

  return React.createElement(
    Button,
    {
      role: 'tab',
      className: classNames('tab-button', {
        active: isActive,
      }),
      'aria-controls': panelId,
      'aria-selected': isActive,
      href: href,
      onClick: onClick,
    },
    children
  );
}
