import React, { useEffect, useRef } from 'react';
import {
  AccordionPanel as ReachAccordionPanel,
  useAccordionItemContext,
} from '@reach/accordion';
import clsx from 'clsx';
import styled from 'styled-components';
import { generalClasses } from '../classes';
import { FlatifyGeneralProps } from '../interfaces';

export interface AccordionPanelProps
  extends FlatifyGeneralProps,
    Omit<React.HTMLAttributes<HTMLElement>, 'color'> {
  duration?: number;
}

const AccordionPanelWrapper = styled.div`
  ${({ sx }: AccordionPanelProps) => (sx ? sx : '')}
`;

export default function AccordionPanel(props: AccordionPanelProps) {
  const { as, children, duration = 200, sx, ...rest } = props;
  const { isExpanded } = useAccordionItemContext();
  const accordionPanel: any = useRef<any>(null);
  const animation: any = useRef<any>(null);
  const resizeUpdateTimeout = useRef<NodeJS.Timeout | null>(null);

  const getBodyHeight = () =>
    accordionPanel?.current?.querySelector('.accordion-body').offsetHeight || 0;

  const animatePanel = () => {
    const bodyHeight = getBodyHeight();
    // skip deep easing with minimum value (150)
    const start = Date.now() - 150;

    animation.current = requestAnimationFrame(function animate() {
      const interval = Date.now() - start;
      if (accordionPanel.current) {
        // add show animation class in the middle of the process
        if (interval >= duration / 2) {
          accordionPanel.current.classList.add('accordion-will-be-shown');
        }
        // set accordion panel height dynamically and manage animation class
        if (interval >= duration) {
          accordionPanel.current.style.height = `${bodyHeight}px`;
        } else {
          accordionPanel.current.style.height = `${Math.round(
            (interval * bodyHeight) / duration
          )}px`;
          accordionPanel.current.classList.remove('accordion-will-be-shown');
        }
      }

      if (interval < duration) {
        requestAnimationFrame(animate);
      }
    });
  };

  const updateHeightWithDelay = () => {
    resizeUpdateTimeout.current && clearTimeout(resizeUpdateTimeout.current);
    resizeUpdateTimeout.current = setTimeout(() => {
      if (accordionPanel.current) {
        accordionPanel.current.style.height = `${getBodyHeight()}px`;
      }
    }, 500);
  };

  // update accordion panel height on window resize
  useEffect(() => {
    window.addEventListener('resize', updateHeightWithDelay);

    return () => {
      window.removeEventListener('resize', updateHeightWithDelay);
    };
  }, []);

  // update accordion panel height on toggle
  useEffect(() => {
    animatePanel();

    return () => {
      cancelAnimationFrame(animation.current);
    };
  }, [isExpanded]);

  return (
    <AccordionPanelWrapper
      {...rest}
      ref={accordionPanel}
      as={as}
      sx={sx}
      className={clsx('accordion-collapse', ...generalClasses(props))}
    >
      <ReachAccordionPanel className="accordion-body">
        {children}
      </ReachAccordionPanel>
    </AccordionPanelWrapper>
  );
}
