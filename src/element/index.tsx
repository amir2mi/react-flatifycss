import React from 'react';
import styled from 'styled-components';
import { FlatifyGeneralProps } from '../interfaces';
import { generalClasses } from '../classes';
import clsx from 'clsx';

export interface ElementProps
  extends FlatifyGeneralProps,
    Omit<React.HTMLAttributes<HTMLElement>, 'color'> {
  [key: string]: any;
  children?: React.ReactNode;
}

const ElementWrapper = styled.div`
  ${({ sx }: ElementProps) => (sx ? sx : '')}
`;

export function Element(props: ElementProps) {
  return <ElementWrapper {...props} className={clsx(generalClasses(props))} />;
}
