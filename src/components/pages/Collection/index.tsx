import React, { useEffect } from 'react';
import { useQueryParam, NumberParam } from 'use-query-params';
import { useCollectionContext } from '../../../contexts';
import { styled, Page, Row, Col, Heading, Paragraph } from '../shared';
import Loader from './Loader';
import { SlideProvider, SlideToggle, Slide } from './slide';
import { useFilterState, Filters } from './filter';
import List from './List';
import Modal from './Modal';
import { FilterSvg } from '../../svg';
import { getRems } from '../../../styles';

/*
 *  TODO:
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
   *  filters
   */
  const { filteredCollection, filterProps } = useFilterState(collection || []);

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
                  <Filters {...filterProps} />
                </Slide>
                <List
                  records={filteredCollection}
                  onRecordClick={(nextModalRecordId) =>
                    setModalRecordId(nextModalRecordId)
                  }
                  // TODO: reset filters button
                  noRecords={
                    <Paragraph color="gray" className="text-center">
                      No artwork matches your current filter selections.
                    </Paragraph>
                  }
                />
                <Modal
                  records={filteredCollection}
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
