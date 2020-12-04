import React from 'react';
import { Page } from '../layout';
import { Row, Col, Heading, Paragraph } from '../styled';

export const Quotes: React.FC = () => (
  <Page title="Quotes">
    <Row>
      <Col md={12}>
        <Heading className="mb-3">Quotes</Heading>
        <Paragraph>TODO</Paragraph>
      </Col>
    </Row>
  </Page>
);
