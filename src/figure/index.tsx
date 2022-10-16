import React from 'react';
import clsx from 'clsx';
import styled from 'styled-components';
import { FlatifyGeneralProps, Colors } from '../interfaces';
import { generalClasses } from '../classes';

export interface FigureProps
  extends FlatifyGeneralProps,
    Omit<React.HTMLAttributes<HTMLImageElement>, 'color'> {
  alt: string;
  caption?: string;
  centered?: boolean;
  children?: React.ReactNode;
  creditName?: string;
  creditLink?: string;
  creditTheme?: Colors;
  fill?: boolean;
  overlayCaption?: boolean;
  src: string;
}

const FigureWrapper = styled.figure`
  ${({ sx }: FigureProps) => (sx ? sx : '')}
`;

export function Figure(props: FigureProps) {
  const {
    as,
    sx,
    alt,
    caption,
    centered,
    children,
    creditName,
    creditLink,
    creditTheme,
    fill,
    overlayCaption,
    ...rest
  } = props;

  return (
    <FigureWrapper
      as={as}
      sx={sx}
      className={clsx(
        'figure',
        {
          centered,
          fill,
          'overlay-caption': overlayCaption,
        },
        ...generalClasses(props)
      )}
    >
      <img {...rest} alt={alt || caption} />
      {caption && <figcaption>{caption}</figcaption>}
      {creditLink && creditName ? (
        <a
          href={creditLink}
          className={clsx('source', `style-${creditTheme}`)}
          target="_blank"
          rel="nofollow"
        >
          {creditName}
        </a>
      ) : (
        creditName && (
          <span className={clsx('source', `style-${creditTheme}`)}>
            {creditName}
          </span>
        )
      )}
    </FigureWrapper>
  );
}
