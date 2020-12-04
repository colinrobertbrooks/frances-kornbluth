import React from 'react';
import { Page } from '../layout';
import { Link, Url } from '../router';
import { Row, Col, Heading, Paragraph } from '../styled';

export const NotFound: React.FC = () => (
  <Page title="Not Found">
    <Row>
      <Col md={12}>
        <Heading className="mb-3">Not Found</Heading>
        <Paragraph>That page doesn&#39;t exist.</Paragraph>
        <Paragraph>
          <Link to={Url.HomePage}>Back to home</Link>
        </Paragraph>
      </Col>
    </Row>
  </Page>
);
