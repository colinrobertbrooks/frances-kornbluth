import React from 'react';
import { Page } from '../layout';
import { Row, Col, Heading, Paragraph } from '../styled';

export const Biography: React.FC = () => (
  <Page title="Biography">
    <Row>
      <Col md={12}>
        <Heading className="mb-3">Biography</Heading>
        <Paragraph>TODO</Paragraph>
      </Col>
    </Row>
  </Page>
);
