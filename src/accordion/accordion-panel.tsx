import React, { useRef, useEffect } from 'react';
import clsx from 'clsx';
import {
  AccordionPanel as ReachAccordionPanel,
  useAccordionItemContext,
} from '@reach/accordion';
import { animated, useSpring } from 'react-spring';
import { FlatifyGeneralProps } from '../interfaces';
import { generalClasses } from '../classes';
import { generalAttributes } from '../attributes';

interface AccordionPanelProps extends FlatifyGeneralProps {
  [key: string]: any;
  hasIcon?: boolean;
}

export default function AccordionPanel(props: AccordionPanelProps) {
  const { children, hasIcon, ...rest } = props;
  const { isExpanded } = useAccordionItemContext();
  const el = useRef<any>(null);

  const [{ height }, set] = useSpring(() => ({
    height: isExpanded ? 'auto' : 0,
    config: { duration: 200 },
  }));

  const getBodyHeight = () =>
    el?.current?.querySelector('.accordion-body').offsetHeight || 0;

  useEffect(() => {
    set({
      reset: true,
      from: {
        height: 0,
      },
      to: async next => {
        await next({
          height: getBodyHeight(),
        });
        await next({ height: 'auto' });
      },
    });
  }, [isExpanded, set]);

  return (
    <animated.div
      {...generalAttributes(props)}
      ref={el}
      className={clsx(
        'accordion-collapse accordion-will-be-shown',
        ...generalClasses(props)
      )}
      style={{ height, transition: 'none', transitionDelay: '0.2s' }}
    >
      <ReachAccordionPanel {...rest} className="accordion-body">
        {children}
      </ReachAccordionPanel>
    </animated.div>
  );
}
