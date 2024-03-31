import React, {
  createContext,
  useContext,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import FocusTrap from 'focus-trap-react';
import { useTimeout, useOutsideClick, useWindowSize } from '../../../hooks';
import {
  breakpoints,
  colors,
  focusOutlineCSS,
  getRems,
  HEADER_HEIGHT_PX,
  media,
  unstyledButtonCSS,
} from '../../../styles';
import { TimesSvg } from '../../svg';
import { styled, css, keyframes } from '../shared';

const SLIDE_ANIMATION_MS = 300;

/*
 *  context
 */
interface ISlideContext {
  toggleRef: React.RefObject<HTMLButtonElement>;
  slideRef: React.RefObject<HTMLDivElement>;
  closeRef: React.RefObject<HTMLButtonElement>;
  isOpening: boolean;
  isOpen: boolean;
  isClosing: boolean;
  isClosed: boolean;
  toggle: () => void;
  close: () => void;
}

const SlideContext = createContext<ISlideContext>({
  toggleRef: React.createRef(),
  slideRef: React.createRef(),
  closeRef: React.createRef(),
  isOpening: false,
  isOpen: false,
  isClosing: false,
  isClosed: true,
  toggle: () => undefined,
  close: () => undefined,
});

interface ISlideProviderProps {
  checkIsOutsideClick?: (event: any) => boolean; // eslint-disable-line @typescript-eslint/no-explicit-any
  children: React.ReactNode;
}

export const SlideProvider = ({
  checkIsOutsideClick,
  children,
}: ISlideProviderProps) => {
  /*
   *  focus management
   */
  const toggleRef = useRef<HTMLButtonElement>(null);
  const slideRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const [shouldFocusToggleOnClose, setShouldFocusToggleOnClose] =
    useState(true);

  /*
   *  visibility
   */
  const [isOpening, setIsOpening] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [isClosed, setIsClosed] = useState(true);

  useTimeout(
    () => {
      setIsOpening(false);
      setIsOpen(true);
      if (closeRef.current) closeRef.current.focus();
    },
    isOpening ? SLIDE_ANIMATION_MS : null
  );
  useTimeout(
    () => {
      setIsClosing(false);
      setIsClosed(true);
      if (toggleRef.current && shouldFocusToggleOnClose)
        toggleRef.current.focus();
    },
    isClosing ? SLIDE_ANIMATION_MS - 10 : null
  );

  const open = () => {
    setIsOpening(true);
    setIsOpen(false);
    setIsClosing(false);
    setIsClosed(false);
  };

  const close = (manageFocus = true) => {
    setShouldFocusToggleOnClose(manageFocus);
    setIsOpening(false);
    setIsOpen(false);
    setIsClosing(true);
    setIsClosed(false);
  };

  useOutsideClick(
    slideRef,
    () => {
      if (isOpen) close(false);
    },
    checkIsOutsideClick
  );

  /*
   *  body scroll lock
   */
  const windowSize = useWindowSize();
  useLayoutEffect(() => {
    // lock body scroll when slide is full width
    if (windowSize.width < breakpoints.md) {
      if (isOpen) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
    }
  }, [isOpen, windowSize]);

  return (
    <SlideContext.Provider
      value={{
        toggleRef,
        slideRef,
        closeRef,
        isOpening,
        isOpen,
        isClosing,
        isClosed,
        toggle: () => {
          if (isOpen) close();
          if (isClosed) open();
          return undefined;
        },
        close,
      }}
    >
      {children}
    </SlideContext.Provider>
  );
};

export const useSlideContext = (): ISlideContext => useContext(SlideContext);

/*
 *  toggle
 */
interface ISlideToggleProps {
  id?: string;
  openLabel: string;
  closeLabel: string;
  children: React.ReactNode;
}

export const SlideToggle = ({
  id,
  openLabel,
  closeLabel,
  children,
}: ISlideToggleProps) => {
  const { toggleRef, isOpening, isOpen, toggle } = useSlideContext();
  const label = isOpening || isOpen ? closeLabel : openLabel;

  return (
    <ToggleElement
      ref={toggleRef}
      id={id}
      type="button"
      aria-label={label}
      title={label}
      onClick={toggle}
    >
      {children}
    </ToggleElement>
  );
};

const ToggleElement = styled.button`
  ${unstyledButtonCSS};
  background-color: ${colors.white};
  border: 1px solid ${colors.lightGray};
  border-radius: 4px;
  color: ${colors.darkGray};
  padding: 3px 5px 5px 5px;

  &:hover,
  &:focus {
    border-color: ${colors.darkGray};
  }

  &:focus {
    ${focusOutlineCSS}
  }
`;

/*
 *  slide
 */
interface ISlideProps {
  closeLabel: string;
  children: React.ReactNode;
}

export const Slide = ({ closeLabel, children }: ISlideProps) => {
  const { slideRef, closeRef, isOpening, isOpen, isClosing, isClosed, close } =
    useSlideContext();

  return (
    <FocusTrap
      active={isOpen}
      focusTrapOptions={{
        returnFocusOnDeactivate: false,
      }}
    >
      <SlideElement
        ref={slideRef}
        isOpening={isOpening}
        isOpen={isOpen}
        isClosing={isClosing}
        isClosed={isClosed}
      >
        <Close
          ref={closeRef}
          aria-label={closeLabel}
          title={closeLabel}
          disabled={isClosing}
          onClick={close}
        />
        {isOpening || isOpen ? children : null}
      </SlideElement>
    </FocusTrap>
  );
};

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
    transform: translate3d(100%, 0, 0);
    visibility: hidden;
  }
`;

const SlideElement = styled.div.attrs({ role: 'dialog' })<{
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
  height: calc(100vh - ${HEADER_HEIGHT_PX}px);
  overflow: scroll;
  overscroll-behavior: contain;
  position: fixed;
  padding: 48px 8px 24px 8px;
  right: 0;
  top: ${HEADER_HEIGHT_PX}px;
  width: 100vw;
  visibility: ${({ isOpen, isClosed }) => {
    if (isOpen) return 'visible';
    if (isClosed) return 'hidden';
    return null;
  }};
  z-index: 999;

  ${media.md`
    width: 20vw;
    min-width: 320px;
  `}
`;

const CloseIcon = styled(TimesSvg)`
  height: ${getRems(20)};
`;

const Close = styled.button.attrs<{ 'aria-label': string }>({
  'aria-label': 'Close filters',
  children: <CloseIcon />,
  title: 'Close filters',
})`
  ${unstyledButtonCSS};
  color: ${colors.lightGray};
  left: 0px;
  padding: 5px 10px;
  position: absolute;
  top: 0px;

  &:hover,
  &:focus {
    color: ${colors.darkGray};
  }

  &:focus {
    ${focusOutlineCSS}
  }
`;
