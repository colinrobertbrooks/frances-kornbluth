import React from 'react';
import styled, { css, keyframes } from 'styled-components';
import { lighten, rgba } from 'polished';
import { Container, Row, Col } from 'reactstrap';
import { colors, typography } from '../../styles';
import { Page } from '../layout';
import {
  HorizontalRule,
  Heading,
  Paragraph,
  Span,
  OutlineButton,
} from '../styled';

/*
 *  styled
 */
export { styled, css, keyframes };
export { lighten, rgba };

/*
 *  grid
 */
export { Container, Row, Col };

/*
 *  layout
 */
export { Page };

export const Divider = styled(HorizontalRule).attrs({ className: 'my-4' })``;

/*
 *  typography
 */
export { Heading, Paragraph, Span };

export const H1 = styled(Heading)`
  margin-bottom: 24px; // mb-4
`;

export const H2 = styled(Heading).attrs({
  as: 'h2',
  color: 'gray',
})`
  margin-bottom: 8x; // mb-2
  text-align: center;
`;

/*
 *  buttons
 */
export { OutlineButton };

/*
 *  artwork
 */
const ArtworkImg = styled.img.attrs({
  className: 'img-thumbnail mb-1',
})`
  display: block;
  max-height: 250px;
  margin: 0 auto;
`;

const ArtworkName = styled.span`
  color: ${colors.darkGray};
  display: block;
  font-family: ${typography.default};
  font-style: italic;
  text-align: center;
`;

const ArtworkInfo = styled.span.attrs({ className: 'small' })`
  color: ${colors.gray};
  display: block;
  font-family: ${typography.default};
  text-align: center;
`;

interface IArtworkProps {
  className?: string;
  src: string;
  name: string;
  medium: string;
  dimensions: string;
}

export const Artwork = ({
  className,
  src,
  name,
  medium,
  dimensions,
}: IArtworkProps): JSX.Element => (
  <div className={className}>
    <ArtworkImg src={src} alt={name} title={name} />
    <ArtworkName>{name}</ArtworkName>
    <ArtworkInfo>
      {medium}, {dimensions}
    </ArtworkInfo>
  </div>
);
