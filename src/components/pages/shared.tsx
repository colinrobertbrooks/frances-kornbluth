import React from 'react';
import styled, { css, keyframes } from 'styled-components';
import { lighten, rgba } from 'polished';
import { Container, Row, Col } from 'reactstrap';
import { colors } from '../../styles';
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

export const H1 = styled(Heading).attrs({ className: 'mb-3' })``;

export const H2 = styled(Heading).attrs({
  as: 'h2',
  color: 'gray',
  className: 'text-center',
})``;

/*
 *  buttons
 */
export { OutlineButton };

/*
 *  artwork
 */
const ArtworkImg = styled.img.attrs({
  className: 'img-thumbnail mt-4 mb-2',
})`
  display: block;
  max-height: 250px;
  margin: 0 auto;
`;

const ArtworkName = styled.span`
  color: ${colors.darkGray};
  display: block;
  font-style: italic;
  text-align: center;
`;

const ArtworkInfo = styled.span.attrs({ className: 'small mb-4' })`
  color: ${colors.gray};
  display: block;
  text-align: center;
`;

interface IArtworkProps {
  src: string;
  name: string;
  medium: string;
  dimensions: string;
}

export const Artwork = ({ src, name, medium, dimensions }: IArtworkProps) => (
  <>
    <ArtworkImg src={src} alt={name} />
    <ArtworkName>{name}</ArtworkName>
    <ArtworkInfo>
      {medium}, {dimensions}
    </ArtworkInfo>
  </>
);
