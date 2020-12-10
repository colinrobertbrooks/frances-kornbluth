import React, { useEffect, useState } from 'react';
import { Modal as ReactstrapModal } from 'reactstrap';
import { useCollectionContext } from '../../../contexts';
import { media, HEADER_HEIGHT_PX } from '../../../styles';
import { styled } from '../shared';

interface IModalProps {
  recordId: number | null;
  handleClose: () => void;
}

const Modal: React.FC<IModalProps> = ({ recordId, handleClose }) => {
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

  useEffect(() => {
    // derive modal visibility based on record
    if (recordId && recordIdIsValid) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  }, [recordId, recordIdIsValid]);

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

export default Modal;
