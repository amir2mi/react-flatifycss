import React from 'react';
import classNames from 'classnames';

interface TabButtonProps {
  children?: string | React.ReactNode;
  className?: string;
  hidden?: boolean;
  isActive: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  panelId: string;
}

export function TabButton(props: TabButtonProps) {
  const { children, className, hidden, isActive, onClick, panelId } = props;
  return (
    <button
      role="tab"
      className={classNames(
        'tab-button',
        {
          active: isActive,
        },
        className
      )}
      hidden={hidden}
      aria-controls={panelId}
      aria-selected={isActive}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
