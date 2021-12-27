import React, { useEffect } from 'react';
import { useQueryParam, NumberParam } from 'use-query-params';
import {
  useCollectionContext,
  useNotificationsContext,
} from '../../../contexts';
import {
  getRems,
  HEADER_HEIGHT_PX,
  MAIN_PADDING_TOP_PX,
  media,
} from '../../../styles';
import { Status } from '../../../types';
import { FilterSvg } from '../../svg';
import {
  styled,
  Page,
  Row,
  Col,
  Heading,
  Paragraph,
  Small,
  OutlineButton,
} from '../shared';
import { HEADING_WRAPPER_MARGIN_BOTTOM_PX } from './constants';
import Loader from './Loader';
import { SlideProvider, SlideToggle, Slide } from './slide';
import { useFilterState, Filters } from './filter';
import FilterToggleIntroTooltip from './FilterToggleIntroTooltip';
import List from './List';
import ScrollToTop from './ScrollToTop';
import Modal from './Modal';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const checkIsOutsideClick = (event: any) => {
  // prevents react select clear indicator triggering slide outside click
  const isReactSelectClearIndicator = event.target.classList.contains(
    'react-select__clear-indicator'
  );
  const isReactSelectClearIndicatorSvg =
    event.target.parentElement?.classList.contains(
      'react-select__clear-indicator'
    );
  const isReactSelectClearIndicatorSvgPath =
    event.target.parentElement?.parentElement?.classList.contains(
      'react-select__clear-indicator'
    );
  return (
    !isReactSelectClearIndicator &&
    !isReactSelectClearIndicatorSvg &&
    !isReactSelectClearIndicatorSvgPath
  );
};

const getCount = (all: number, filtered: number): string => {
  if (all === filtered) return `${all} pieces`;
  return `${filtered} of ${all} pieces`;
};

export const Collection = () => {
  /*
   *  collection
   */
  const { collectionIsLoading, collection, loadCollection } =
    useCollectionContext();

  useEffect(() => {
    // load collection if it hasn't been loaded already
    if (!collectionIsLoading && !collection) loadCollection();
  }, [collectionIsLoading, collection, loadCollection]);

  /*
   *  filters
   */
  const { filters, filteredCollection, filterProps, resetFilters } =
    useFilterState(collection || []);

  /*
   *  modal
   */
  const [modalId, setModalId] = useQueryParam('id', NumberParam);

  /*
   *  notifications
   */
  const { addSuccessNotification } = useNotificationsContext();

  useEffect(() => {
    if (filters.status === Status.Available && !modalId) {
      addSuccessNotification({
        shouldAutoDismiss: true,
        heading: 'Available Artwork',
        text: 'Viewing available artwork.',
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Page title="Collection">
      <Row>
        <Col md={12} className="position-relative">
          {(() => {
            if (collectionIsLoading || !collection)
              return (
                <LoadingWrapper>
                  <Heading className="mb-4">Collection</Heading>
                  <Loader />
                </LoadingWrapper>
              );

            const count = getCount(
              collection.length,
              filteredCollection.length
            );

            return (
              <>
                <HeadingWrapper>
                  <Heading className="mb-0">Collection</Heading>
                  <HeadingCount>{count}</HeadingCount>
                </HeadingWrapper>
                <SlideProvider checkIsOutsideClick={checkIsOutsideClick}>
                  <SlideToggleWrapper>
                    <SlideToggle
                      id="js-filter-toggle"
                      openLabel="Open filters"
                      closeLabel="Close filters"
                    >
                      <FilterIcon />
                    </SlideToggle>
                    <FilterToggleIntroTooltip />
                  </SlideToggleWrapper>
                  <Slide closeLabel="Close filters">
                    <FiltersCount>{count}</FiltersCount>
                    <Filters
                      collection={collection}
                      filters={filters}
                      reset={resetFilters}
                      {...filterProps}
                    />
                  </Slide>
                </SlideProvider>
                <List
                  filteredCollection={filteredCollection}
                  onItemClick={(nextModalId) => setModalId(nextModalId)}
                  noItems={
                    <div className="text-center">
                      <Paragraph color="gray" className="mt-2">
                        No pieces match your current filter selections.
                      </Paragraph>
                      <OutlineButton onClick={resetFilters}>
                        Reset
                      </OutlineButton>
                    </div>
                  }
                />
                <ScrollToTop />
                <Modal
                  filteredCollection={filteredCollection}
                  id={modalId}
                  setId={setModalId}
                />
              </>
            );
          })()}
        </Col>
      </Row>
    </Page>
  );
};

const LoadingWrapper = styled.div`
  min-height: calc(100vh - ${HEADER_HEIGHT_PX + MAIN_PADDING_TOP_PX}px);

  ${media.lg`
    min-height: 0;
  `}
`;

const HeadingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: ${HEADING_WRAPPER_MARGIN_BOTTOM_PX}px;
`;

const HeadingCount = styled(Small).attrs({ color: 'gray' })``;

const SlideToggleWrapper = styled.div`
  position: absolute;
  right: 15px;
  top: 7px;

  ${media.sm`
    right: 0;
    top: 14px;
  `}
`;

const FilterIcon = styled(FilterSvg)`
  height: ${getRems(20)};
`;

const FiltersCount = styled(Small).attrs({ color: 'gray' })`
  position: absolute;
  right: 10px;
  top: 8px;

  ${media.md`
    display: none;
  `}
`;
