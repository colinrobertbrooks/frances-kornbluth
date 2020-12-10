import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Modal as ReactstrapModal } from 'reactstrap';
import { useCollectionContext } from '../../contexts';
import {
  IWindowSize,
  useWindowSize,
  useIntersectionObserver,
} from '../../hooks';
import {
  colors,
  media,
  getCurrentMedia,
  unstyledButtonCSS,
  focusOutlineCSS,
  HEADER_HEIGHT_PX,
  MAIN_PADDING_TOP_PX,
  H1_HEIGHT_PX,
  H1_MARGIN_BOTTOM_PX,
} from '../../styles';
import { ICollectionRecord } from '../../types';
import { LoaderSvg } from '../svg';
import { styled, Page, Row, Col, H1 } from './shared';

type MediaConfig = {
  [key: string]: number;
};

const listItemHeightConfig: MediaConfig = {
  xs: 200,
  sm: 150,
  md: 140,
  lg: 150,
  xl: 175,
};

const listColConfig: MediaConfig = {
  xs: 12,
  sm: 6,
  md: 4,
  lg: 3,
  xl: 3,
};

const LIST_ITEM_MARGIN_BOTTOM_PX = 16; // mb-3

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
   *  list infinite scrolling
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
    if (!collectionIsLoading && listBottomTrackerIsVisible) {
      setListItemCount(
        (currentListItemCount) => currentListItemCount + listItemCountIncrement
      );
    }
  }, [collectionIsLoading, listBottomTrackerIsVisible, listItemCountIncrement]);

  useEffect(() => {
    // guard against resizing to a bigger screen breaking infinite scroll
    if (listItemCount < initialListItemCount) {
      setListItemCount(initialListItemCount);
    }
  }, [initialListItemCount, listItemCount]);

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
                <List>
                  {collection.slice(0, listItemCount).map((record) => (
                    <ListItem
                      record={record}
                      onClick={() => setModalRecordId(record.id)}
                    />
                  ))}
                </List>
              );
            })()}
            <div ref={listDisplayTracker} />
          </Col>
        </Row>
      </Page>
      <Modal
        recordId={modalRecordId}
        handleClose={() => setModalRecordId(null)}
      />
    </>
  );
};

/*
 *  loader
 */
const Loader = styled(LoaderSvg).attrs({
  fill: colors.lightRed,
})`
  margin: 0 auto;
`;

/*
 *  list
 */
const List = styled(Row)``;

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

interface IListItemProps {
  record: ICollectionRecord;
  onClick: () => void;
}

const ListItem = ({ record, onClick }: IListItemProps) => {
  const { id, name, minImgSrc } = record;
  return (
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
        onClick={onClick}
      >
        <ListItemImg src={minImgSrc} alt={name} title={name} />
      </ListItemButton>
    </Col>
  );
};

/*
 *  modal
 */
const ModalOuter = styled(ReactstrapModal)``;

const ModalInner = styled.div`
  padding: 24px 12px;
  position: relative;
  text-align: center;

  ${media.md`
    padding: 24px 32px;
  `}

  ${media.lg`
    padding: 32px 72px;
  `}
`;

const ModalClose = styled.button.attrs({
  'aria-label': 'Close modal',
  className: 'close',
  children: 'x',
  title: 'Close',
})`
  padding: 4px 8px !important;
  position: absolute;
  right: 0;
  top: 0;

  ${media.md`
  padding: 6px 12px !important;
`}

  ${media.lg`
    padding: 10px 20px !important;
  `}
`;

const ModalImg = styled.img.attrs({ className: 'img-thumbnail' })`
  display: block;
  margin: 0 auto;
  margin-bottom: 16px; // mb-3
  max-height: calc(100vh - ${HEADER_HEIGHT_PX + 200}px);
`;

interface IModalProps {
  recordId: number | null;
  handleClose: () => void;
}

const Modal = ({ recordId, handleClose }: IModalProps) => {
  const { collectionIsLoading, getCollectionRecord } = useCollectionContext();
  const record = recordId ? getCollectionRecord(recordId) : undefined;
  const recordIdIsValid = recordId && record;

  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    // derive modal visibility based on record
    if (!collectionIsLoading && recordId && recordIdIsValid) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  }, [collectionIsLoading, recordId, recordIdIsValid]);

  return (
    <ModalOuter isOpen={isOpen}>
      {(() => {
        if (!record) return null;

        const { name, minImgSrc } = record;

        return (
          <ModalInner>
            <ModalClose onClick={handleClose} />
            <h2>{name}</h2>
            <ModalImg src={minImgSrc} alt={name} />
          </ModalInner>
        );
      })()}
    </ModalOuter>
  );
};
