import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import styled from 'styled-components';
import { CSSTransition } from 'react-transition-group';
import { FlatifyGeneralProps } from '../interfaces';
import { generalClasses } from '../classes';
import { generalAttributes } from '../attributes';
import { hasSpecificChildren } from '../utils/children';

interface AlertProps
  extends FlatifyGeneralProps,
    Omit<React.HTMLAttributes<HTMLElement>, 'color'> {
  children: any;
  show?: boolean;
}

const AlertWrapper = styled.div`
  ${({ sx }: AlertProps) => (sx ? sx : '')}
`;

export default function Alert(props: AlertProps) {
  const { children, show, ...rest } = props;

  const [hasIcon, setHasIcon] = useState<boolean>(false);

  useEffect(() => {
    const hasIconComponent = hasSpecificChildren(children, 'AlertIcon');
    setHasIcon(hasIconComponent);
  }, [children]);

  return (
    <CSSTransition
      in={show !== false}
      timeout={300}
      unmountOnExit
      classNames={{
        exitActive: 'alert-will-be-removed',
      }}
    >
      <AlertWrapper
        {...rest}
        {...generalAttributes(props)}
        className={clsx(
          'alert',
          hasIcon && 'has-icon',
          ...generalClasses(props)
        )}
        role="alert"
      >
        {children}
      </AlertWrapper>
    </CSSTransition>
  );
}
