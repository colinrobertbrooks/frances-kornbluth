import React from 'react';
import { Page } from '../layout';
import { Row, Col, Heading, Paragraph } from '../styled';

export const Books: React.FC = () => (
  <Page title="Books">
    <Row>
      <Col md={12}>
        <Heading className="mb-3">Books</Heading>
        <Paragraph>TODO</Paragraph>
      </Col>
    </Row>
  </Page>
);
