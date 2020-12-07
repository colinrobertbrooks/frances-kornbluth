import React, { useEffect } from 'react';
import { useCollectionContext } from '../../contexts';
import { media } from '../../styles';
import { styled, Page, Row, Col, H1, Paragraph } from './shared';

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
                  <Col sm={6} md={4} lg={3} key={id}>
                    <Artwork src={img} alt={name} />
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

const Artwork = styled.img.attrs({ className: 'img-thumbnail mb-3' })`
  display: block;
  height: auto;
  margin: 0 auto;
  transition: all 250ms;

  ${media.sm`
    height: 150px;
  `}

  ${media.md`
    height: 140px;
  `}

  ${media.lg`
    height: 150px;
  `}

  ${media.xl`
    height: 175px;
  `}
`;
