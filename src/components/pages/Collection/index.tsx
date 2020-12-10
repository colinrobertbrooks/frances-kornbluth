import React, { useEffect, useState } from 'react';
import { useCollectionContext } from '../../../contexts';
import { Page, Row, Col, H1 } from '../shared';
import Loader from './Loader';
import List from './List';
import Modal from './Modal';

export const Collection: React.FC = () => {
  /*
   *  collection
   */
  const {
    collectionIsLoading,
    collection,
    loadCollection,
  } = useCollectionContext();

  useEffect(() => {
    // load collection if it hasn't been loaded already
    if (!collectionIsLoading && !collection) loadCollection();
  }, [collectionIsLoading, collection, loadCollection]);

  /*
   *  modal
   */
  const [modalRecordId, setModalRecordId] = useState<number | null>(null);

  return (
    <>
      <Page title="Collection">
        <Row>
          <Col md={12}>
            <H1>Collection</H1>
            {(() => {
              if (collectionIsLoading || !collection) return <Loader />;

              return (
                <>
                  <List
                    records={collection}
                    onItemClick={(nextModalRecordId: number) =>
                      setModalRecordId(nextModalRecordId)
                    }
                  />
                  <Modal
                    recordId={modalRecordId}
                    handleClose={() => setModalRecordId(null)}
                  />
                </>
              );
            })()}
          </Col>
        </Row>
      </Page>
    </>
  );
};
