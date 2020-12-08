import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useCollectionContext } from '../../contexts';
import {
  IWindowSize,
  useWindowSize,
  useIntersectionObserver,
} from '../../hooks';
import { colors, media, getCurrentMedia, NAVBAR_HEIGHT_PX } from '../../styles';
import { LoaderSvg } from '../svg';
import { styled, Page, Row, Col, H1 } from './shared';

type ArtworkConfig = {
  [key: string]: number;
};

const artworkHeightConfig: ArtworkConfig = {
  xs: 200,
  sm: 150,
  md: 140,
  lg: 150,
  xl: 175,
};

const artworkColConfig: ArtworkConfig = {
  xs: 12,
  sm: 6,
  md: 4,
  lg: 3,
  xl: 3,
};

const ARTWORK_MARGIN_BOTTOM_PX = 16; // mb-3

const getArtworkHeigh = (windowSize: IWindowSize): number => {
  const currentMedia = getCurrentMedia(windowSize.width);
  return artworkHeightConfig[currentMedia] + ARTWORK_MARGIN_BOTTOM_PX;
};

const getArtworkCols = (windowSize: IWindowSize): number => {
  const currentMedia = getCurrentMedia(windowSize.width);
  return 12 / artworkColConfig[currentMedia];
};

const getAvailableDisplayHeight = (windowSize: IWindowSize): number => {
  const MAIN_PADDING_PX = 24;
  const H1_HEIGHT_PX = 48;
  const H1_MARGIN_BOTTOM = 24;
  return (
    windowSize.height -
    (NAVBAR_HEIGHT_PX + MAIN_PADDING_PX + H1_HEIGHT_PX + H1_MARGIN_BOTTOM)
  );
};

const getInitialDisplayCount = (windowSize: IWindowSize): number => {
  const availableDisplayHeight = getAvailableDisplayHeight(windowSize);
  const artworkHeight = getArtworkHeigh(windowSize);
  const bufferRows = 2;
  const rows = Math.ceil(availableDisplayHeight / artworkHeight) + bufferRows;
  const cols = getArtworkCols(windowSize);
  return rows * cols;
};

const getDisplayCountIncrement = (windowSize: IWindowSize): number => {
  const cols = getArtworkCols(windowSize);
  return cols * 2;
};

// WIP
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
   *  infinite scrolling
   */
  const windowSize = useWindowSize();
  const initialDisplayCount = useMemo(
    () => getInitialDisplayCount(windowSize),
    [windowSize]
  );
  const displayCountIncrement = useMemo(
    () => getDisplayCountIncrement(windowSize),
    [windowSize]
  );

  const [displayCount, setDisplayCount] = useState<number>(initialDisplayCount);

  const displayTrackerRef = useRef(null);
  const [displayTrackerIsVisible] = useIntersectionObserver({
    elementRef: displayTrackerRef,
  });

  useEffect(() => {
    // increment display count as user scrolls
    if (!collectionIsLoading && displayTrackerIsVisible) {
      setDisplayCount(
        (currentDisplayCount) => currentDisplayCount + displayCountIncrement
      );
    }
  }, [collectionIsLoading, displayTrackerIsVisible, displayCountIncrement]);

  useEffect(() => {
    // guard against resizing to a bigger screen breaking infinite scroll
    if (displayCount < initialDisplayCount) {
      setDisplayCount(initialDisplayCount);
    }
  }, [initialDisplayCount, displayCount]);

  return (
    <Page title="Collection">
      <Row>
        <Col md={12}>
          <H1>Collection</H1>
          {(() => {
            if (collectionIsLoading || !collection) return <Loader />;

            return (
              <Row>
                {collection.slice(0, displayCount).map(({ id, img, name }) => (
                  <Col
                    key={id}
                    xs={artworkColConfig.xs}
                    sm={artworkColConfig.sm}
                    md={artworkColConfig.md}
                    lg={artworkColConfig.lg}
                    xl={artworkColConfig.xl}
                  >
                    <ArtworkImg src={img} alt={name} />
                  </Col>
                ))}
              </Row>
            );
          })()}
          <div ref={displayTrackerRef} />
        </Col>
      </Row>
    </Page>
  );
};

const Loader = styled(LoaderSvg).attrs({
  fill: colors.lightRed,
})`
  margin: 0 auto;
`;

const ArtworkImg = styled.img.attrs({ className: 'img-thumbnail' })`
  display: block;
  height: ${artworkHeightConfig.xs}px;
  margin: 0 auto;
  margin-bottom: ${ARTWORK_MARGIN_BOTTOM_PX}px;
  transition: all 250ms;

  ${media.sm`
    height: ${artworkHeightConfig.sm}px;
  `}

  ${media.md`
    height: ${artworkHeightConfig.md}px;
  `}

  ${media.lg`
    height: ${artworkHeightConfig.lg}px;
  `}

  ${media.xl`
    height: ${artworkHeightConfig.xl}px;
  `}
`;
