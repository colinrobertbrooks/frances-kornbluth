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
  Small,
  Button,
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
export { Heading, Paragraph, Span, Small };

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
export { Button, OutlineButton };

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

const ArtworkTitle = styled.span`
  color: ${colors.darkGray};
  display: block;
  font-family: ${typography.default};
  font-style: italic;
  font-weight: 600;
  text-align: center;
`;

const ArtworkInfo = styled(Small).attrs({ color: 'gray' })`
  display: block;
  text-align: center;
`;

type ArtworkProps = {
  className?: string;
  src: string;
  title: string;
  medium: string;
  dimensions: string;
};

export const Artwork = ({
  className,
  src,
  title,
  medium,
  dimensions,
}: ArtworkProps): JSX.Element => (
  <div className={className}>
    <ArtworkImg src={src} alt={title} title={title} />
    <ArtworkTitle>{title}</ArtworkTitle>
    <ArtworkInfo>
      {medium}, {dimensions}
    </ArtworkInfo>
  </div>
);
