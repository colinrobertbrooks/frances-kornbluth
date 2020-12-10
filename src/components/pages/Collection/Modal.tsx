import React, { useEffect, useState } from 'react';
import { Modal as ReactstrapModal } from 'reactstrap';
import { useCollectionContext } from '../../../contexts';
import { useKeyPress } from '../../../hooks';
import { media, focusOutlineCSS, HEADER_HEIGHT_PX } from '../../../styles';
import { ICollectionRecord } from '../../../types';
import { styled } from '../shared';

/*
 *  TODO:
 *    - style next/previous buttons
 *    - layout (style header; add additional attributes)
 *    - available & inquire
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
    <ModalOuter isOpen={modalIsOpen}>
      {(() => {
        if (!record) return null;

        const { name, minImgSrc } = record;

        return (
          <ModalInner>
            <ModalClose onClick={closeModal} />
            <h2>{name}</h2>
            <ModalImg src={minImgSrc} alt={name} />
            <button type="button" onClick={handlePrevious}>
              Previous
            </button>
            <button type="button" onClick={handleNext}>
              Next
            </button>
          </ModalInner>
        );
      })()}
    </ModalOuter>
  );
};

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

  &:focus {
    ${focusOutlineCSS}
  }
`;

const ModalImg = styled.img.attrs({ className: 'img-thumbnail' })`
  display: block;
  margin: 0 auto;
  margin-bottom: 16px; // mb-3
  max-height: calc(100vh - ${HEADER_HEIGHT_PX + 200}px);
`;

export default Modal;
