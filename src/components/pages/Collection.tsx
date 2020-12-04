import React, { useEffect } from 'react';
import { getCollection } from '../../api';
import { Page } from '../layout';
import { Row, Col, Heading, Paragraph } from '../styled';

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
          <Heading className="mb-3">Collection</Heading>
          <Paragraph>TODO</Paragraph>
        </Col>
      </Row>
    </Page>
  );
};
