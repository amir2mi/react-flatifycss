import React from 'react';
import clsx from 'clsx';

interface TabPanelProps {
  children?: React.ReactNode;
  className?: string;
  isActive: boolean;
  panelId: string;
}

export function TabPanel(props: TabPanelProps) {
  const { children, className, isActive, panelId } = props;
  return (
    <div
      id={panelId}
      className={clsx('tab-panel', className, {
        show: isActive,
      })}
    >
      {children}
    </div>
  );
}
