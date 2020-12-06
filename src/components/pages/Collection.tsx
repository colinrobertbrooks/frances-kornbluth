import React, { useEffect } from 'react';
import { getCollection } from '../../api';
import { Page, Row, Col, H1, Paragraph } from './shared';

// TODO: move fetch to context
export const Collection: React.FC = () => {
  useEffect(() => {
    const fetchData = async () => {
      const collection = await getCollection();
      console.log(collection); // WIP
    };

    fetchData();
  }, []);

  return (
    <Page title="Collection">
      <Row>
        <Col md={12}>
          <H1>Collection</H1>
          <Paragraph>TODO</Paragraph>
        </Col>
      </Row>
    </Page>
  );
};
