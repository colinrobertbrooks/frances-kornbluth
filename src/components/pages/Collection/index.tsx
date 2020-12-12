import React, { useEffect } from 'react';
import { useQueryParam, NumberParam } from 'use-query-params';
import { useCollectionContext } from '../../../contexts';
import { Page, Row, Col, Heading, styled } from '../shared';
import Loader from './Loader';
import { SlideProvider, SlideToggle, Slide } from './slide';
import Filters from './Filters';
import List from './List';
import Modal from './Modal';
import { FilterSvg } from '../../svg';
import { getRems } from '../../../styles';

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
    <Page title="Collection">
      <Row>
        <Col md={12}>
          {(() => {
            if (collectionIsLoading || !collection)
              return (
                <>
                  <Heading className="mb-4">Collection</Heading>
                  <Loader />
                </>
              );

            return (
              <SlideProvider>
                <div className="d-flex align-items-center mb-4">
                  <Heading className="mb-0">Collection</Heading>
                  <SlideToggle
                    openLabel="Open filters"
                    closeLabel="Close filters"
                  >
                    <FilterIcon />
                  </SlideToggle>
                </div>
                <Slide closeLabel="Close filters">
                  <Filters />
                </Slide>
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
              </SlideProvider>
            );
          })()}
        </Col>
      </Row>
    </Page>
  );
};

const FilterIcon = styled(FilterSvg)`
  height: ${getRems(22)};
`;
