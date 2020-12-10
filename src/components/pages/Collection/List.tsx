import React, { useEffect, useMemo, useRef, useState } from 'react';
import {
  IWindowSize,
  useWindowSize,
  useIntersectionObserver,
} from '../../../hooks';
import {
  media,
  getCurrentMedia,
  unstyledButtonCSS,
  focusOutlineCSS,
  HEADER_HEIGHT_PX,
  MAIN_PADDING_TOP_PX,
  H1_HEIGHT_PX,
  H1_MARGIN_BOTTOM_PX,
} from '../../../styles';
import { ICollectionRecord } from '../../../types';
import { styled, Row, Col } from '../shared';
import {
  listItemHeightConfig,
  listColConfig,
  LIST_ITEM_MARGIN_BOTTOM_PX,
} from './constants';

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
    HEADER_HEIGHT_PX + MAIN_PADDING_TOP_PX + H1_HEIGHT_PX + H1_MARGIN_BOTTOM_PX;
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

interface IListProps {
  records: ICollectionRecord[];
  onItemClick: (id: number) => void;
}

const List: React.FC<IListProps> = ({ records, onItemClick }) => {
  /*
   *   infinite scrolling
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

  const [listItemCount, setListItemCount] = useState<number>(
    initialListItemCount
  );

  const listDisplayTracker = useRef(null);
  const [listBottomTrackerIsVisible] = useIntersectionObserver({
    elementRef: listDisplayTracker,
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

  return (
    <>
      <Row>
        {records.slice(0, listItemCount).map(({ id, name, minImgSrc }) => (
          <Col
            key={id}
            xs={listColConfig.xs}
            sm={listColConfig.sm}
            md={listColConfig.md}
            lg={listColConfig.lg}
            xl={listColConfig.xl}
          >
            <ListItemButton
              aria-label={`${name} (Click for more details)`}
              onClick={() => onItemClick(id)}
            >
              <ListItemImg src={minImgSrc} alt={name} title={name} />
            </ListItemButton>
          </Col>
        ))}
      </Row>
      <div ref={listDisplayTracker} />
    </>
  );
};

const ListItemButton = styled.button`
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

const ListItemImg = styled.img.attrs({ className: 'img-thumbnail' })`
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
