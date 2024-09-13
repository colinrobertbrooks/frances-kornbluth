import { useEffect } from 'react';
import { useQueryParam, NumberParam } from 'use-query-params';
import { FilterSvg } from 'components';
import { useCollectionContext } from 'contexts';
import { getRems, HEADER_HEIGHT_PX, MAIN_PADDING_TOP_PX, media } from 'styles';
import {
  styled,
  Page,
  Heading,
  Paragraph,
  Small,
  OutlineButton,
} from '../shared';
import { HEADING_WRAPPER_MARGIN_BOTTOM_PX } from './consts';
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

  return (
    <Page
      title="Collection"
      description="Collection of artwork by Frances Kornbluth (1920 - 2014), an Abstract Expressionist painter who spent 57 summers painting on Monhegan Island off the coast of Maine."
    >
      {(() => {
        if (collectionIsLoading || !collection)
          return (
            <LoadingWrapper>
              <Heading className="mb-4">Collection</Heading>
              <Loader />
            </LoadingWrapper>
          );

        const count = getCount(collection.length, filteredCollection.length);

        return (
          <>
            <SlideProvider checkIsOutsideClick={checkIsOutsideClick}>
              <HeadingWrapper>
                <Heading className="mb-0">Collection</Heading>
                <HeadingCount>{count}</HeadingCount>
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
              </HeadingWrapper>

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
                  <OutlineButton onClick={resetFilters}>Reset</OutlineButton>
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
  position: relative;
`;

const HeadingCount = styled(Small).attrs({ color: 'gray' })``;

const SlideToggleWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
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
