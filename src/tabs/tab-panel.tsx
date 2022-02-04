import React from 'react';
import classNames from 'classnames';

interface TabPanelProps {
  children?: string | React.ReactNode;
  className?: string;
  isActive: boolean;
  panelId: string;
}

export function TabPanel(props: TabPanelProps) {
  const { children, className, isActive, panelId } = props;
  return (
    <div
      id={panelId}
      className={classNames('tab-panel', className, {
        show: isActive,
      })}
    >
      {children}
    </div>
  );
}
