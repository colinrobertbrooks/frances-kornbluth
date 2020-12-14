import React from 'react';
import { media, HEADER_HEIGHT_PX, MAIN_PADDING_TOP_PX } from '../../styles';
import { Link, Url } from '../router';
import {
  styled,
  Page,
  Row,
  Col,
  Divider,
  Heading,
  H2,
  Paragraph,
  Button,
} from './shared';

export const Contact: React.FC = () => (
  <Page title="Contact">
    <Row>
      <Col md={9}>
        <H1>Contact</H1>
      </Col>
      <StickyCol md={3} className="text-center">
        <ContactButton>Contact Us</ContactButton>
      </StickyCol>
      <Col md={9}>
        <Divider />
        <H2>Acquisitions</H2>
        <Paragraph>
          Available artwork can be viewed by clicking{' '}
          <Link to={Url.AvailableArtworkPage}>here</Link>. Additional artwork
          may be available; please contact us if you are looking for something
          specific. We are happy to assist collectors and institutions in
          selecting pieces of a particular medium, size, period or series.
        </Paragraph>
        <Divider />
        <H2>Additions</H2>
        <Paragraph>
          To have your Frances Kornbluth artwork added to the{' '}
          <Link to={Url.CollectionPage}>collection page</Link>, please send us a
          medium- to high-quality JPEG image in addition to the title, medium
          and dimensions (height x width in inches) for each piece. If you know
          the year in which the piece was completed, please send that
          information as well.
        </Paragraph>
        <Paragraph>
          <Link to={Url.WantedPage}>Click here</Link> to see some of the pieces
          for which we are currently seeking images.
        </Paragraph>
        <Divider />
        <H2>Consignments</H2>
        <Paragraph>
          To have your Frances Kornbluth artwork added to available artwork,
          please follow the instructions under additions, also indicating that
          you would like to sell the piece. We will contact you to discuss
          consignment terms.
        </Paragraph>
        <Divider />
        <H2>Expositions</H2>
        <Paragraph>
          Some of the artwork on the{' '}
          <Link to={Url.CollectionPage}>collection page</Link> can be made
          available for public exhibition; please contact us to discuss
          availability and lending arrangements.
        </Paragraph>
        <Divider />
        <H2>Reproductions</H2>
        <Paragraph>
          If you would like to reproduce any of Frances Kornbluth’s artwork for
          any purpose, please contact us. See the{' '}
          <Link to={Url.CopyrightPage}>copyright page</Link> for more
          information.
        </Paragraph>
      </Col>
      <Col md={3} />
    </Row>
  </Page>
);

const H1 = styled(Heading).attrs({ className: 'mb-2 m-md-0' })``;

const StickyCol = styled(Col)`
  ${media.md`
    position: sticky;
    top: ${HEADER_HEIGHT_PX + MAIN_PADDING_TOP_PX + 14}px;
    z-index: 999;
  `}
`;

const ContactButton = styled(Button).attrs({
  className: 'd-block d-md-inline my-2 mt-md-1',
  href: 'mailto:kornbluthart@gmail.com',
})``;
