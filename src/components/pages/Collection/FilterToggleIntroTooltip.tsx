import { useState } from 'react';
import styled from 'styled-components';
import { Popover as ReactstrapPopper, PopoverBody } from 'reactstrap';
import { media, typography } from '../../../styles';
import { useLocalStorage, useTimeout } from '../../../hooks';

const FilterToggleIntroTooltip = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [didDismiss, setDidDismiss] = useLocalStorage(
    'DID_DISMISS_COLLECTION_FILTER_TOGGLE_INTRO_TOOLTIP',
    false
  );

  useTimeout(() => setIsOpen(true), !didDismiss ? 200 : null);

  const handleDismiss = () => {
    if (isOpen || !didDismiss) {
      setIsOpen(false);
      setDidDismiss(true);
    }
  };

  return (
    <Popover
      target="js-filter-toggle"
      placement="left-start"
      isOpen={isOpen}
      toggle={handleDismiss}
    >
      <PopoverBody>
        Click here to filter pieces by title, medium, size and more.
      </PopoverBody>
    </Popover>
  );
};

const Popover = styled(ReactstrapPopper)`
  .popover {
    font-family: ${typography.default};
    max-width: 250px;
    z-index: 999;

    ${media.md`
      max-width: 275px;
    `}
  }
`;

export default FilterToggleIntroTooltip;
