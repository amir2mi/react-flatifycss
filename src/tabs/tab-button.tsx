import React from 'react';
import classNames from 'classnames';

interface TabButtonProps {
  children?: string | React.ReactNode;
  isActive: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  panelId: string;
}

export function TabButton(props: TabButtonProps) {
  const { children, isActive, onClick, panelId } = props;
  return (
    <button
      role="tab"
      className={classNames(
        'tab-button',
        {
          active: isActive,
        },
      
      )}
      
      aria-controls={panelId}
      aria-selected={isActive}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
