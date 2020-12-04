import React from 'react';
import { Page } from '../layout';
import { Row, Col, Heading, Paragraph } from '../styled';

export const Wanted: React.FC = () => (
  <Page title="Wanted">
    <Row>
      <Col md={12}>
        <Heading className="mb-3">Wanted</Heading>
        <Paragraph>TODO</Paragraph>
      </Col>
    </Row>
  </Page>
);
