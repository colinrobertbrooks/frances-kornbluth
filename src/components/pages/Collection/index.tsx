import React, { useEffect } from 'react';
import { useQueryParam, NumberParam } from 'use-query-params';
import { useCollectionContext } from '../../../contexts';
import { Page, Row, Col, H1 } from '../shared';
import Loader from './Loader';
import List from './List';
import Modal from './Modal';

/*
 *  TODO:
 *    - filter (name & tags)
 *    - count
 *    - back to top
 */

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
  const [modalRecordId, setModalRecordId] = useQueryParam('id', NumberParam);

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
                    records={collection}
                    recordId={modalRecordId}
                    setRecordId={setModalRecordId}
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
