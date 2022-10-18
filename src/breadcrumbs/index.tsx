import React, { useEffect, useRef } from 'react';
import clsx from 'clsx';
import styled from 'styled-components';
import { FlatifyGeneralProps } from '../interfaces';
import { generalClasses } from '../classes';

export interface CrumbProps {
  label?: string;
  href?: string;
  children?: React.ReactNode;
}

export interface BreadcrumbsProps
  extends FlatifyGeneralProps,
    Omit<React.HTMLAttributes<HTMLElement>, 'color'> {
  children?: React.ReactNode;
  crumbs: CrumbProps[];
  label: string;
  scrollTo?: 'left' | 'right';
}

const BreadcrumbsWrapper = styled.nav`
  ${({ sx }: BreadcrumbsProps) => (sx ? sx : '')}
`;

export function Breadcrumbs(props: BreadcrumbsProps) {
  const { children, crumbs, label, scrollTo, ...rest } = props;

  const breadcrumbsElem = useRef<HTMLOListElement>(null);

  useEffect(() => {
    const breadcrumb = breadcrumbsElem.current;
    if (breadcrumb) {
      breadcrumb.scrollLeft = scrollTo === 'right' ? 999999 : 0;
    }
  }, [breadcrumbsElem, crumbs, scrollTo]);

  return (
    <BreadcrumbsWrapper
      {...rest}
      aria-label={label}
      className={clsx('breadcrumbs-wrapper', ...generalClasses(props))}
    >
      <ol ref={breadcrumbsElem} className="breadcrumbs">
        {children}
        {crumbs?.length &&
          crumbs.map(({ children, href, label }, i) => {
            const isLast = i + 1 === crumbs.length;
            return (
              <li
                key={i + String(label)}
                aria-current={isLast ? 'location' : undefined}
                className="crumb"
              >
                {children}
                {href ? <a href={href}>{label}</a> : label}
              </li>
            );
          })}
      </ol>
    </BreadcrumbsWrapper>
  );
}
