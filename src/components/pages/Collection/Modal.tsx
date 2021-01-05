import React, { useEffect, useRef, useState } from 'react';
import { Modal as ReactstrapModal, ModalProps } from 'reactstrap';
import { EMAIL_ADDRESS } from '../../../constants';
import {
  useCollectionContext,
  useNotificationsContext,
} from '../../../contexts';
import { useKeyPress } from '../../../hooks';
import {
  media,
  focusOutlineCSS,
  unstyledButtonCSS,
  getRems,
  colors,
  typography,
} from '../../../styles';
import { ICollectionRecord, Status } from '../../../types';
import { TimesSvg, ChevronLeftSvg, ChevronRightSvg } from '../../svg';
import { styled, css, Span, Small, Button } from '../shared';

type QueryId = number | null | undefined;

interface IModalProps {
  filteredCollection: ICollectionRecord[];
  id: QueryId;
  setId: (nextId: QueryId) => void;
}

const Modal: React.FC<IModalProps> = ({ filteredCollection, id, setId }) => {
  const { addErrorNotification } = useNotificationsContext();

  /*
   *  record
   */
  const { getCollectionRecord } = useCollectionContext();
  const record = id ? getCollectionRecord(id) : undefined;
  const idIsValid = id && record;

  /*
   *  visibility
   */
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const closeModal = () => setId(undefined);

  useEffect(() => {
    // derive modal visibility based on record
    if (id && idIsValid) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }

    // clear invalid id
    if (id && !idIsValid) {
      setId(undefined);
      addErrorNotification({
        shouldAutoDismiss: true,
        heading: 'Artwork Not Found',
        text: 'That piece was not found.',
      });
    }
  }, [id, idIsValid, setId, addErrorNotification]);

  const escapeWasPressed = useKeyPress('Escape');
  useEffect(() => {
    if (isOpen && escapeWasPressed) closeModal();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen, escapeWasPressed]);

  /*
   *  focus management
   */
  const closeRef = useRef<HTMLButtonElement>(null);
  const previousRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  /*
   *  carousel
   */
  const getIdx = ($id: number) =>
    filteredCollection.map((r) => r.id).indexOf($id);

  const handlePrevious = () => {
    if (!id) return;
    const idx = getIdx(id);
    if (idx === 0) {
      setId(filteredCollection[filteredCollection.length - 1].id);
    } else {
      setId(filteredCollection[idx - 1].id);
    }
  };

  const handleNext = () => {
    if (!id) return;
    const idx = getIdx(id);
    if (idx === filteredCollection.length - 1) {
      setId(filteredCollection[0].id);
    } else {
      setId(filteredCollection[idx + 1].id);
    }
  };

  const leftArrowWasPressed = useKeyPress('ArrowLeft');
  useEffect(() => {
    if (isOpen && leftArrowWasPressed) {
      if (previousRef.current) previousRef.current.focus();
      handlePrevious();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen, leftArrowWasPressed]);

  const rightArrowWasPressed = useKeyPress('ArrowRight');
  useEffect(() => {
    if (isOpen && rightArrowWasPressed) {
      if (nextRef.current) nextRef.current.focus();
      handleNext();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen, rightArrowWasPressed]);

  return (
    <Wrapper
      isOpen={isOpen}
      onOpened={() => {
        if (closeRef.current) closeRef.current.focus();
      }}
    >
      {(() => {
        if (!record) return null;

        const { title, year, minImgSrc, medium, dimensions, tags } = record;
        const alt = tags.length ? `${title} (${tags.join(', ')})` : title;

        return (
          <>
            <Header>
              <Count>
                {getIdx(Number(id)) + 1} of {filteredCollection.length}
              </Count>
              <Close ref={closeRef} onClick={closeModal} />
              <Title>
                {title}
                {year && <Year>({year})</Year>}
              </Title>
            </Header>
            <Body>
              <CarouselButton
                ref={previousRef}
                previous
                aria-label="Go to previous piece"
                title="Previous"
                onClick={handlePrevious}
              >
                <PreviousIcon />
              </CarouselButton>
              <CarouselButton
                ref={nextRef}
                next
                aria-label="Go to next piece"
                title="Next"
                onClick={handleNext}
              >
                <NextIcon />
              </CarouselButton>
              <Img src={minImgSrc} alt={alt} />
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
 *  typography
 */
const Count = styled(Small).attrs({ color: 'gray' })`
  position: absolute;
  left: 10px;
  top: 5px;

  ${media.md`
    left: 12px;
    top: 6px;
  `}

  ${media.lg`
    left: 18px;
    top: 14px;
  `}
`;

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

const Sub = styled(Span).attrs({ color: 'gray' })`
  display: block;
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
  max-height: 40vh;
  user-select: none;

  ${media.md`
    max-height: 60vh;
  `}

  ${media.lg`
    max-height: 70vh;
  `}
`;

/*
 *  status
 */
const makeInquireHref = (record: ICollectionRecord) => {
  const { title, medium, dimensions, id } = record;
  const subject = `Inquiry: "${title}" (${medium}, ${dimensions})`;
  const body = `I am interested in "${title}" (${medium}, ${dimensions}), which I found at franceskornbluth.com/collection?id=${id}. Please send more information.`;
  return `mailto:${EMAIL_ADDRESS}?&Subject=${subject}&body=${body}`;
};

interface IStatusProps {
  record: ICollectionRecord;
}

const CollectionStatus: React.FC<IStatusProps> = ({ record }) => {
  switch (record.status) {
    case Status.Available: {
      return (
        <div className="mt-2">
          <Button
            color="green"
            className="d-block d-md-inline"
            href={makeInquireHref(record)}
            target="_blank"
            rel="noopener noreferrer"
          >
            Inquire
          </Button>
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
