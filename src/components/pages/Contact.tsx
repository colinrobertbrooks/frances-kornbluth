import React from 'react';
import { Page } from '../layout';
import { Link, Url } from '../router';
import {
  Row,
  Col,
  Heading,
  HorizontalRule,
  Paragraph,
  OutlineButton,
} from '../styled';

export const Contact: React.FC = () => (
  <Page title="Contact">
    <Row>
      <Col md={8}>
        <Heading className="mb-md-4">Contact</Heading>
      </Col>
      <Col md={4} className="text-md-right">
        {/* TODO: style */}
        <OutlineButton
          className="my-2 mt-md-1"
          href="mailto:kornbluthart@gmail.com"
        >
          Contact Us
        </OutlineButton>
      </Col>
      <Col md={10}>
        <HorizontalRule className="mb-4" />
        <Heading as="h2">Acquisitions</Heading>
        <Paragraph>
          Available art can be viewed by clicking here (TODO). Additional
          artwork may be available; please contact us if you are looking for
          something specific. We are happy to assist collectors and institutions
          in selecting pieces of a particular medium, size, period or series.
        </Paragraph>
        <HorizontalRule className="mb-4" />
        <Heading as="h2">Additions</Heading>
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
        <HorizontalRule className="mb-4" />
        <Heading as="h2">Consignments</Heading>
        <Paragraph>
          To have your Frances Kornbluth artwork added to the available art page
          (TODO), please follow the instructions under additions, also
          indicating that you would like to sell the piece. We will contact you
          to discuss consignment terms.
        </Paragraph>
        <HorizontalRule className="mb-4" />
        <Heading as="h2">Expositions</Heading>
        <Paragraph>
          Some of the artwork on the{' '}
          <Link to={Url.CollectionPage}>collection page</Link> can be made
          available for public exhibition; please contact us to discuss
          availability and lending arrangements.
        </Paragraph>
        <HorizontalRule className="mb-4" />
        <Heading as="h2">Reproductions</Heading>
        <Paragraph>
          If you would like to reproduce any of Frances Kornbluth’s artwork for
          any purpose, please contact us. See the{' '}
          <Link to={Url.CopyrightPage}>copyright page</Link> for more
          information.
        </Paragraph>
      </Col>
    </Row>
  </Page>
);
