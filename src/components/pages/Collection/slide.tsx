import React, { createContext, useContext, useState } from 'react';
import { useTimeout } from '../../../hooks';
import { colors, HEADER_HEIGHT_PX } from '../../../styles';
import { styled, css, keyframes } from '../shared';

const SLIDE_ANIMATION_MS = 300;

/*
 *  context
 */
// TODO: focus management
interface ISlideContext {
  isOpening: boolean;
  isOpen: boolean;
  isClosing: boolean;
  isClosed: boolean;
  toggle: () => void;
}

const SlideContext = createContext<ISlideContext>({
  isOpening: false,
  isOpen: false,
  isClosing: false,
  isClosed: true,
  toggle: () => undefined,
});

export const SlideProvider: React.FC = ({ children }) => {
  const [isOpening, setIsOpening] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [isClosed, setIsClosed] = useState(true);

  useTimeout(
    () => {
      setIsOpening(false);
      setIsOpen(true);
    },
    isOpening ? SLIDE_ANIMATION_MS - 1 : null
  );
  useTimeout(
    () => {
      setIsClosing(false);
      setIsClosed(true);
    },
    isClosing ? SLIDE_ANIMATION_MS - 1 : null
  );

  const openSlide = () => {
    setIsOpening(true);
    setIsOpen(false);
    setIsClosing(false);
    setIsClosed(false);
  };

  const closeSlide = () => {
    setIsOpening(false);
    setIsOpen(false);
    setIsClosing(true);
    setIsClosed(false);
  };

  return (
    <SlideContext.Provider
      value={{
        isOpening,
        isOpen,
        isClosing,
        isClosed,
        toggle: isOpen || isOpening ? closeSlide : openSlide,
      }}
    >
      {children}
    </SlideContext.Provider>
  );
};

export const useSlideContext = (): ISlideContext => useContext(SlideContext);

/*
 * toggle
 */
// TODO: styling, icon, aria-label & title
export const SlideToggle: React.FC = () => {
  const { toggle } = useSlideContext();

  return (
    <ToggleElement type="button" onClick={toggle} className="ml-2">
      Toggle Filters
    </ToggleElement>
  );
};

const ToggleElement = styled.button``;

/*
 *  slide
 */
export const Slide: React.FC = ({ children }) => {
  const { isOpening, isOpen, isClosing, isClosed } = useSlideContext();

  return (
    <SlideElement
      isOpening={isOpening}
      isOpen={isOpen}
      isClosing={isClosing}
      isClosed={isClosed}
    >
      {children}
    </SlideElement>
  );
};

/*
 *  slide
 */
const slideInRight = keyframes`
  from {
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }
  to {
    transform: translate3d(0, 0, 0);
  }
`;

const slideOutRight = keyframes`
  from {
    transform: translate3d(0, 0, 0);
  }
  to {
    visibility: hidden;
    transform: translate3d(100%, 0, 0);
  }
`;

const SlideElement = styled.div<{
  isOpening: boolean;
  isOpen: boolean;
  isClosing: boolean;
  isClosed: boolean;
}>`
  animation: ${({ isOpening, isClosing }) => {
    if (isOpening)
      return css`
        ${SLIDE_ANIMATION_MS}ms ${slideInRight} forwards
      `;
    if (isClosing)
      return css`
        ${SLIDE_ANIMATION_MS}ms ${slideOutRight} backwards
      `;
    return null;
  }};
  background-color: ${colors.trueWhite};
  border-left: 1px solid ${colors.border};
  height: 100%;
  position: fixed;
  right: 0;
  top: ${HEADER_HEIGHT_PX}px;
  width: 320px;
  visibility: ${({ isOpen, isClosed }) => {
    if (isOpen) return 'visible';
    if (isClosed) return 'hidden';
    return null;
  }};
  z-index: 999;
`;
