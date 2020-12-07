import React, { useEffect } from 'react';
import { useCollectionContext } from '../../contexts';
import { Page, Row, Col, H1, Paragraph } from './shared';

// WIP
export const Collection: React.FC = () => {
  const {
    collectionIsLoading,
    collection,
    loadCollection,
  } = useCollectionContext();

  useEffect(() => {
    // load collection if it hasn't been loaded already
    if (!collectionIsLoading && !collection) loadCollection();
  }, [collectionIsLoading, collection, loadCollection]);

  return (
    <Page title="Collection">
      <Row>
        <Col md={12}>
          <H1>Collection</H1>
          {(() => {
            if (collectionIsLoading || !collection) {
              return <Paragraph>Loading...</Paragraph>;
            }

            return (
              <Row>
                {collection.map(({ id, img, name }) => (
                  <Col md={3} key={id}>
                    <img className="img-thumbnail" src={img} alt={name} />
                  </Col>
                ))}
              </Row>
            );
          })()}
        </Col>
      </Row>
    </Page>
  );
};
