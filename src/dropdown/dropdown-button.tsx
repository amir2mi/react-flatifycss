import React from 'react';
import clsx from 'clsx';
import styled from 'styled-components';
import { generalClasses } from '../classes';
import { Button, ButtonProps } from '../button';

export interface DropdownButtonProps extends ButtonProps {
  arrowClassName?: string;
  buttonStyle?: boolean;
  children?: React.ReactNode;
  hasArrow?: boolean;
  innerRef?: React.Ref<HTMLButtonElement>;
  isOpen?: boolean;
  onBodyMouseEnter?: (event: React.MouseEvent<HTMLElement>) => void;
  onButtonMouseEnter?: (event: React.MouseEvent<HTMLElement>) => void;
  __TYPE: 'DropdownButton';
}

const DropdownButtonWrapper = styled(Button)`
  ${({ sx }: DropdownButtonProps) => (sx ? sx : '')}
`;

export default function DropdownButton(props: DropdownButtonProps) {
  const {
    arrowClassName,
    buttonStyle,
    children,
    hasArrow,
    innerRef,
    isOpen,
    onBodyMouseEnter,
    onButtonMouseEnter,
    __TYPE,
    ...rest
  } = props;

  return (
    <DropdownButtonWrapper
      {...rest}
      ref={innerRef}
      aria-expanded={isOpen}
      onMouseEnter={onButtonMouseEnter}
      className={clsx(
        'dropdown-toggle',
        ...generalClasses(props),
        arrowClassName,
        {
          active: isOpen,
          'no-style': buttonStyle === false,
          'arrow-button ': hasArrow,
          'arrow-flip': isOpen && hasArrow,
        }
      )}
    >
      {children}
    </DropdownButtonWrapper>
  );
}

DropdownButton.defaultProps = {
  __TYPE: 'DropdownButton',
};
