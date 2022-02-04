import React from 'react';
import classNames from 'classnames';

interface TabPanelProps {
  isActive: boolean;
  children?: string | React.ReactNode;
  panelId: string;
}

export function TabPanel(props: TabPanelProps) {
  const { children, isActive, panelId } = props;
  return (
    <div
      id={panelId}
      className={classNames('tab-panel', {
        show: isActive,
      })}
    >
      {children}
    </div>
  );
}
