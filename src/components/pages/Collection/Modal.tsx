import React, { useEffect, useRef, useState } from 'react';
import { Modal as ReactstrapModal, ModalProps } from 'reactstrap';
import { useCollectionContext } from '../../../contexts';
import { useKeyPress } from '../../../hooks';
import {
  media,
  focusOutlineCSS,
  HEADER_HEIGHT_PX,
  unstyledButtonCSS,
  getRems,
  colors,
  typography,
} from '../../../styles';
import { ICollectionRecord, Status } from '../../../types';
import { TimesSvg, ChevronLeftSvg, ChevronRightSvg } from '../../svg';
import { styled, css } from '../shared';

/*
 *  TODO:
 *    - available & inquire
 *    - index + 1 of records.length
 *    - return focus back to last open item on modal close
 */

type QueryId = number | null | undefined;

interface IModalProps {
  records: ICollectionRecord[];
  recordId: QueryId;
  setRecordId: (nextRecordId: QueryId) => void;
}

const Modal: React.FC<IModalProps> = ({ records, recordId, setRecordId }) => {
  /*
   *  record
   */
  const { getCollectionRecord } = useCollectionContext();
  const record = recordId ? getCollectionRecord(recordId) : undefined;
  const recordIdIsValid = recordId && record;

  /*
   *  visibility
   */
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const closeModal = () => setRecordId(null);

  useEffect(() => {
    // derive modal visibility based on record
    if (recordId && recordIdIsValid) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }

    // clear invalid recordId
    if (recordId && !recordIdIsValid) {
      setRecordId(null);
      // TODO: alert
    }
  }, [recordId, recordIdIsValid, setRecordId]);

  const escapeWasPressed = useKeyPress('Escape');
  useEffect(() => {
    if (isOpen && escapeWasPressed) closeModal();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen, escapeWasPressed]);

  /*
   *  focus management
   */
  const closeRef = useRef<HTMLButtonElement>(null);
  const focusClose = () => {
    if (closeRef.current) closeRef.current.focus();
  };

  /*
   *  carousel
   */
  const getIdx = (id: number) => records.map((r) => r.id).indexOf(id);

  const handlePrevious = () => {
    if (!recordId) return;
    const idx = getIdx(recordId);
    if (idx === 0) {
      setRecordId(records[records.length - 1].id);
    } else {
      setRecordId(records[idx - 1].id);
    }
  };

  const handleNext = () => {
    if (!recordId) return;
    const idx = getIdx(recordId);
    if (idx === records.length - 1) {
      setRecordId(records[0].id);
    } else {
      setRecordId(records[idx + 1].id);
    }
  };

  const leftArrowWasPressed = useKeyPress('ArrowLeft');
  useEffect(() => {
    if (isOpen && leftArrowWasPressed) handlePrevious();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen, leftArrowWasPressed]);

  const rightArrowWasPressed = useKeyPress('ArrowRight');
  useEffect(() => {
    if (isOpen && rightArrowWasPressed) handleNext();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen, rightArrowWasPressed]);

  return (
    <Wrapper isOpen={isOpen} onOpened={focusClose}>
      {(() => {
        if (!record) return null;

        const { title, year, minImgSrc, medium, dimensions } = record;

        return (
          <>
            <Header>
              <Close ref={closeRef} onClick={closeModal} />
              <Title>
                {title}
                {year && <Year>({year})</Year>}
              </Title>
            </Header>
            <Body>
              <CarouselButton
                previous
                aria-label="Go to previous artwork"
                title="Previous"
                onClick={handlePrevious}
              >
                <PreviousIcon />
              </CarouselButton>
              <CarouselButton
                next
                aria-label="Go to next artwork"
                title="Next"
                onClick={handleNext}
              >
                <NextIcon />
              </CarouselButton>
              <Img src={minImgSrc} alt={title} />
            </Body>
            <Footer>
              <Sub>
                {medium}, {dimensions}
              </Sub>
              <CollectionStatus record={record} />
            </Footer>
          </>
        );
      })()}
    </Wrapper>
  );
};

/*
 *  padding
 */
const xPadding = {
  xs: 32,
  md: 32,
  lg: 72,
};

const yPadding = {
  xs: 24,
  md: 24,
  lg: 32,
};

/*
 *  layout
 */
const Wrapper: React.FC<ModalProps> = styled(ReactstrapModal)``;

const Header = styled.div`
  padding-top ${yPadding.xs}px;
  padding-left: ${xPadding.xs}px;
  padding-bottom: 12px;
  padding-right: ${xPadding.xs}px;
  position: relative;
  text-align: center;

  ${media.md`
    padding-top: ${xPadding.md}px;
    padding-left: ${xPadding.md}px;
    padding-right: ${xPadding.md}px;
  `}

  ${media.lg`
    padding-top ${yPadding.lg}px;
    padding-left: ${xPadding.lg}px;
    padding-right: ${xPadding.lg}px;
  `}
`;

const Body = styled.div`
  padding-left: ${xPadding.xs}px;
  padding-right: ${xPadding.xs}px;
  position: relative;

  ${media.md`
  padding-left: ${xPadding.md}px;
  padding-right: ${xPadding.md}px;
`}

  ${media.lg`
  padding-left: ${xPadding.lg}px;
  padding-right: ${xPadding.lg}px;
`}
`;

const Footer = styled.div`
  padding-top: 6px;
  padding-left: ${xPadding.xs}px;
  padding-bottom ${yPadding.xs * 0.6}px;
  padding-right: ${xPadding.xs}px;
  text-align: center;


  ${media.md`
    padding-left: ${xPadding.md}px;
    padding-bottom: ${xPadding.md * 0.6}px;
    padding-right: ${xPadding.md}px;
  `}

  ${media.lg`
    padding-left: ${xPadding.lg}px;
    padding-bottom ${yPadding.lg * 0.6}px;
    padding-right: ${xPadding.lg}px;
  `}
`;

/*
 *  close
 */
const CloseIcon = styled(TimesSvg)`
  height: ${getRems(20)};
`;

const Close = styled.button.attrs({
  'aria-label': 'Close modal',
  children: <CloseIcon />,
  title: 'Close modal',
})`
  ${unstyledButtonCSS}
  color: ${colors.lightGray};
  padding: 5px 10px;
  position: absolute;
  right: 0;
  top: 0;

  &:hover,
  &:focus {
    color: ${colors.darkGray};
  }

  ${media.md`
    padding: 8px 12px;
  `}

  ${media.lg`
    padding: 12px 18px;
  `}

  &:focus {
    ${focusOutlineCSS}
  }
`;

/*
 *  carousel
 */
const carouselIconCSS = css`
  height: ${getRems(20)};
`;

const PreviousIcon = styled(ChevronLeftSvg)`
  ${carouselIconCSS}
`;

const NextIcon = styled(ChevronRightSvg)`
  ${carouselIconCSS}
`;

const CarouselButton = styled.button<{ previous?: boolean; next?: boolean }>`
  ${unstyledButtonCSS}
  color: ${colors.lightGray};
  position: absolute;
  height: 100%;
  top: 0;
  width: ${xPadding.xs - 2}px;

  &:hover,
  &:focus {
    color: ${colors.darkGray};
  }

  ${media.md`
    width: ${xPadding.md - 2}px;
  `}

  ${media.lg`
    width: ${xPadding.lg - 2}px;
  `}

  &:focus {
    ${focusOutlineCSS}
  }

  ${({ previous }) =>
    previous &&
    `
      left: 2px;
    `}

  ${({ next }) =>
    next &&
    `
      right: 2px;
    `}
`;

const Img = styled.img.attrs({ className: 'img-thumbnail' })`
  display: block;
  margin: 0 auto;
  max-height: calc(100vh - ${HEADER_HEIGHT_PX + 200}px);
  user-select: none;
`;

/*
 *  typography
 */
const Year = styled.span`
  color: ${colors.gray};

  font-style: normal;
  font-weight: 400;
  margin-left: 6px;
`;

const Title = styled.h2`
  color: ${colors.darkGray};
  font-family: ${typography.default};
  font-size: ${getRems(22)};
  font-style: italic;
  font-weight: 600;
  margin: 0;
`;

const Sub = styled.span`
  color: ${colors.gray};
  display: block;
  font-family: ${typography.default};
`;

interface IStatusProps {
  record: ICollectionRecord;
}

const CollectionStatus: React.FC<IStatusProps> = ({ record }) => {
  switch (record.status) {
    case Status.Available: {
      return (
        <div className="mt-2">
          <button type="button" onClick={() => alert('TODO')}>
            Inquire
          </button>
        </div>
      );
    }
    case Status.Private:
      return <Sub>Collection of {record.holder}</Sub>;
    case Status.Public:
      return <Sub>Collection of the {record.holder}</Sub>;
    default:
      return <Sub>Collection unknown</Sub>;
  }
};

export default Modal;
