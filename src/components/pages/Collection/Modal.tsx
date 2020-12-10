import React, { useEffect, useState } from 'react';
import { Modal as ReactstrapModal } from 'reactstrap';
import { useCollectionContext } from '../../../contexts';
import { useKeyPress } from '../../../hooks';
import {
  media,
  focusOutlineCSS,
  HEADER_HEIGHT_PX,
  unstyledButtonCSS,
  getRems,
  colors,
} from '../../../styles';
import { ICollectionRecord } from '../../../types';
import { TimesSvg, ChevronLeftSvg, ChevronRightSvg } from '../../svg';
import { styled, css } from '../shared';

/*
 *  TODO:
 *    - layout (style header; add additional attributes)
 *    - available & inquire
 *    - focus close button on open
 *    - make current record visible in list and return focus to it on close
 */
interface IModalProps {
  records: ICollectionRecord[];
  recordId: number | null;
  setRecordId: (nextRecordId: number | null) => void;
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
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const closeModal = () => setRecordId(null);

  useEffect(() => {
    // derive modal visibility based on record
    if (recordId && recordIdIsValid) {
      setModalIsOpen(true);
    } else {
      setModalIsOpen(false);
    }
  }, [recordId, recordIdIsValid]);

  const escapeWasPressed = useKeyPress('Escape');
  useEffect(() => {
    if (modalIsOpen && escapeWasPressed) closeModal();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [modalIsOpen, escapeWasPressed]);

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
    if (modalIsOpen && leftArrowWasPressed) handlePrevious();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [modalIsOpen, leftArrowWasPressed]);

  const rightArrowWasPressed = useKeyPress('ArrowRight');
  useEffect(() => {
    if (modalIsOpen && rightArrowWasPressed) handleNext();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [modalIsOpen, rightArrowWasPressed]);

  return (
    <Wrapper isOpen={modalIsOpen}>
      {(() => {
        if (!record) return null;

        const { name, minImgSrc } = record;

        return (
          <>
            <Header>
              <Close onClick={closeModal} />
              <h2>{name}</h2>
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
              <Img src={minImgSrc} alt={name} />
            </Body>
            <Footer />
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
const Wrapper = styled(ReactstrapModal)``;

const Header = styled.div`
  padding-top ${yPadding.xs}px;
  padding-left: ${xPadding.xs}px;
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
  padding-left: ${xPadding.xs}px;
  padding-bottom ${yPadding.xs}px;
  padding-right: ${xPadding.xs}px;


  ${media.md`
    padding-left: ${xPadding.md}px;
    padding-bottom: ${xPadding.md}px;
    padding-right: ${xPadding.md}px;
  `}

  ${media.lg`
    padding-left: ${xPadding.lg}px;
    padding-bottom ${yPadding.lg}px;
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
  title: 'Close',
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

export default Modal;
