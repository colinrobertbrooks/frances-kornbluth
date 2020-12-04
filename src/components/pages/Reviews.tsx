import React from 'react';
import { Page } from '../layout';
import { Row, Col, Heading, Paragraph } from '../styled';

export const Reviews: React.FC = () => (
  <Page title="Reviews">
    <Row>
      <Col md={12}>
        <Heading className="mb-3">Reviews</Heading>
        <Paragraph>TODO</Paragraph>
      </Col>
    </Row>
  </Page>
);
