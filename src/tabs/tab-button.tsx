import React from 'react';
import classNames from 'classnames';

interface TabButtonProps {
  isActive: boolean;
  children?: string | React.ReactNode;
  panelId: string;
}

export function TabButton(props: TabButtonProps) {
  const { children, isActive, panelId } = props;
  return (
    <button
      role="tab"
      className={classNames('tab-button', {
        active: isActive,
      })}
      aria-controls={panelId}
      aria-selected={isActive && true}
    >
      {children}
    </button>
  );
}
