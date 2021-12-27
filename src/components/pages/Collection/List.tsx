import React, { useEffect, useMemo, useRef, useState } from 'react';
import {
  IWindowSize,
  useWindowSize,
  useIntersectionObserver,
  usePrevious,
} from '../../../hooks';
import {
  media,
  getCurrentMedia,
  unstyledButtonCSS,
  focusOutlineCSS,
  HEADER_HEIGHT_PX,
  MAIN_PADDING_TOP_PX,
  colors,
  getRems,
  typography,
} from '../../../styles';
import { ICollectionRecord, Status } from '../../../types';
import { styled, Row, Col } from '../shared';
import {
  listItemHeightConfig,
  listColConfig,
  HEADING_WRAPPER_HEIGHT_PX,
  HEADING_WRAPPER_MARGIN_BOTTOM_PX,
  LIST_ITEM_MARGIN_BOTTOM_PX,
} from './constants';

/*
 *  methods
 */
const getListItemHeigh = (windowSize: IWindowSize): number => {
  const currentMedia = getCurrentMedia(windowSize.width);
  return listItemHeightConfig[currentMedia] + LIST_ITEM_MARGIN_BOTTOM_PX;
};

const getListColsPerRow = (windowSize: IWindowSize): number => {
  const currentMedia = getCurrentMedia(windowSize.width);
  return 12 / listColConfig[currentMedia];
};

const getListDisplayHeight = (windowSize: IWindowSize): number => {
  const above =
    HEADER_HEIGHT_PX +
    MAIN_PADDING_TOP_PX +
    HEADING_WRAPPER_HEIGHT_PX +
    HEADING_WRAPPER_MARGIN_BOTTOM_PX;
  return windowSize.height - above;
};

const getInitialListItemCount = (windowSize: IWindowSize): number => {
  const listDisplayHeight = getListDisplayHeight(windowSize);
  const listItemHeight = getListItemHeigh(windowSize);
  const bufferRows = 2;
  const rowCount = Math.ceil(listDisplayHeight / listItemHeight) + bufferRows;
  const colsPerRow = getListColsPerRow(windowSize);
  return rowCount * colsPerRow;
};

const getListItemCountIncrement = (windowSize: IWindowSize): number => {
  const colsPerRow = getListColsPerRow(windowSize);
  const incrementRows = 2;
  return colsPerRow * incrementRows;
};

/*
 *  component
 */
interface IListProps {
  filteredCollection: ICollectionRecord[];
  onItemClick: (id: number) => void;
  noItems: JSX.Element;
}

const List = ({ filteredCollection, onItemClick, noItems }: IListProps) => {
  /*
   *  infinite scrolling
   */
  const windowSize = useWindowSize();
  const initialListItemCount = useMemo(
    () => getInitialListItemCount(windowSize),
    [windowSize]
  );
  const listItemCountIncrement = useMemo(
    () => getListItemCountIncrement(windowSize),
    [windowSize]
  );
  const [listItemCount, setListItemCount] =
    useState<number>(initialListItemCount);

  const listBottomTracker = useRef<HTMLDivElement>(null);
  const [listBottomTrackerIsVisible] = useIntersectionObserver({
    elementRef: listBottomTracker,
  });

  useEffect(() => {
    // increment list item count as user scrolls
    if (listBottomTrackerIsVisible) {
      setListItemCount(
        (currentListItemCount) => currentListItemCount + listItemCountIncrement
      );
    }
  }, [listBottomTrackerIsVisible, listItemCountIncrement]);

  useEffect(() => {
    // guard against resizing to a bigger screen breaking infinite scroll
    if (listItemCount < initialListItemCount) {
      setListItemCount(initialListItemCount);
    }
  }, [initialListItemCount, listItemCount]);

  const previousFilteredCollection = usePrevious(filteredCollection);
  useEffect(() => {
    // reset list item count if record count drops
    if (
      previousFilteredCollection &&
      filteredCollection.length < previousFilteredCollection.length
    ) {
      setListItemCount(initialListItemCount);
    }
  }, [
    previousFilteredCollection,
    filteredCollection,
    initialListItemCount,
    listItemCount,
  ]);

  return (
    <>
      <Row>
        {!filteredCollection.length ? (
          <Col md={12}>{noItems}</Col>
        ) : (
          <>
            {filteredCollection
              .slice(0, listItemCount)
              .map(({ id, title, minImgSrc, tags, status }) => {
                const alt = tags.length
                  ? `${title} (${tags.join(', ')})`
                  : title;

                return (
                  <Col
                    key={id}
                    xs={listColConfig.xs}
                    sm={listColConfig.sm}
                    md={listColConfig.md}
                    lg={listColConfig.lg}
                    xl={listColConfig.xl}
                  >
                    <ModalTrigger
                      aria-label={`${title} (Click for more details)`}
                      onClick={() => onItemClick(id)}
                    >
                      <ImgWrapper>
                        {status === Status.Available && <AvailablePill />}
                        <Img src={minImgSrc} alt={alt} title={title} />
                      </ImgWrapper>
                    </ModalTrigger>
                  </Col>
                );
              })}
          </>
        )}
      </Row>
      <div ref={listBottomTracker} />
    </>
  );
};

const ModalTrigger = styled.button`
  ${unstyledButtonCSS}
  border-radius: 4px;
  display: block;
  margin: 0 auto;
  margin-bottom: ${LIST_ITEM_MARGIN_BOTTOM_PX}px;

  &:hover,
  &:focus {
    box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.15);
  }

  &:focus {
    ${focusOutlineCSS}
  }
`;

const AvailablePill = styled.span.attrs({ children: 'Available' })`
  background-color: ${colors.green};
  border-radius: 4px;
  color: ${colors.white};
  display: none;
  font-family: ${typography.default};
  font-size: ${getRems(10)};
  font-weight: 600;
  left: 8px;
  padding: 2px 4px;
  position: absolute;
  text-transform: uppercase;
  top: 8px;
`;

const ImgWrapper = styled.div`
  position: relative;

  &:hover,
  &:focus {
    ${AvailablePill} {
      display: block;
    }
  }
`;

const Img = styled.img.attrs({ className: 'img-thumbnail' })`
  height: ${listItemHeightConfig.xs}px;
  transition: all 250ms;

  ${media.sm`
    height: ${listItemHeightConfig.sm}px;
  `}

  ${media.md`
    height: ${listItemHeightConfig.md}px;
  `}

  ${media.lg`
    height: ${listItemHeightConfig.lg}px;
  `}

  ${media.xl`
    height: ${listItemHeightConfig.xl}px;
  `}
`;

export default List;
