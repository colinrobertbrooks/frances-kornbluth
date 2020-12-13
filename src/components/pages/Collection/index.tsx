import React, { useEffect } from 'react';
import { useQueryParam, NumberParam } from 'use-query-params';
import { useCollectionContext } from '../../../contexts';
import { getRems, media } from '../../../styles';
import { styled, Page, Row, Col, Heading, Paragraph, Span } from '../shared';
import Loader from './Loader';
import { SlideProvider, SlideToggle, Slide } from './slide';
import { useFilterState, Filters } from './filter';
import List from './List';
import Modal from './Modal';
import { FilterSvg } from '../../svg';

/*
 *  TODO:
 *    - back to top
 *    - indicate filters are applied?
 *    - reset filter button if no records
 */

const getCountText = (all: number, filtered: number): string => {
  if (all === filtered) return `${all} pieces`;
  return `${filtered} of ${all} pieces`;
};

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
  const { filters, filteredCollection, filterProps } = useFilterState(
    collection || []
  );

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
                <HeadingWrapper>
                  <Heading className="mb-0">Collection</Heading>
                  <Count>
                    {getCountText(collection.length, filteredCollection.length)}
                  </Count>
                </HeadingWrapper>
                <SlideToggleWrapper>
                  <SlideToggle
                    openLabel="Open filters"
                    closeLabel="Close filters"
                  >
                    <FilterIcon />
                  </SlideToggle>
                </SlideToggleWrapper>
                <Slide closeLabel="Close filters">
                  <Filters
                    collection={collection}
                    filters={filters}
                    {...filterProps}
                  />
                </Slide>
                <List
                  records={filteredCollection}
                  onRecordClick={(nextModalRecordId) =>
                    setModalRecordId(nextModalRecordId)
                  }
                  noRecords={
                    <Paragraph color="gray" className="text-center">
                      No pieces matches your current filter selections.
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

const HeadingWrapper = styled.div`
  align-items: center;
  display: flex;
  margin-bottom: 28px; // mb-4 + mb-1
  position: relative;
`;

const SlideToggleWrapper = styled.div`
  position: absolute;
  right: 15px;
  top: 7px;

  ${media.sm`
    right: 0;
    top: 14px;
  `}
`;

const Count = styled(Span).attrs({ color: 'gray' })`
  font-size: ${getRems(14)};
  left: 4px;
  position: absolute;
  top: 44px;
`;

const FilterIcon = styled(FilterSvg)`
  height: ${getRems(20)};
`;
