import React from 'react';
import { Page } from '../layout';
import { Link, Url, ExternalLink } from '../router';
import { Row, Col, Heading, Paragraph } from '../styled';

export const Accessibility: React.FC = () => (
  <Page title="Accessibility">
    <Row>
      <Col md={12}>
        <Heading className="mb-3">Accessibility</Heading>
        <Paragraph>
          We are committed to making the information on our website accessible
          to all visitors, including people with disabilities. If you encounter
          content that you are unable to access due to a{' '}
          <ExternalLink href="https://www.w3.org/WAI/fundamentals/accessibility-intro/">
            web accessibility issue
          </ExternalLink>
          , or have any suggestions on accessibility improvements, please{' '}
          <Link to={Url.ContactPage}>contact us</Link>.
        </Paragraph>
        <Paragraph color="gray" className="font-italic">
          <small>
            Late in life, Frances developed macular degeneration and utilized
            assistive technology.
          </small>
        </Paragraph>
      </Col>
    </Row>
  </Page>
);
