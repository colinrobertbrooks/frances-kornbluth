import styled, { css, keyframes } from 'styled-components';
import { lighten, rgba } from 'polished';
import { Container, Row, Col } from 'reactstrap';
import { colors } from '../../styles';
import { Page } from '../layout';
import { HorizontalRule, Heading, Paragraph, OutlineButton } from '../styled';

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
export { Heading, Paragraph };

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
export const ArtworkImg = styled.img.attrs({
  className: 'img-thumbnail mt-4 mb-2',
})`
  display: block;
  max-height: 250px;
  margin: 0 auto;
`;

export const ArtworkName = styled.span`
  color: ${colors.darkGray};
  display: block;
  font-weight: 600;
  text-align: center;
`;

export const ArtworkInfo = styled.span.attrs({ className: 'small mb-4' })`
  color: ${colors.gray};
  display: block;
  font-style: italic;
  text-align: center;
`;
