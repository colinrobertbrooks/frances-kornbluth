import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import { useWindowScrollPosition } from '../../../hooks';
import {
  colors,
  getRems,
  media,
  unstyledButtonCSS,
  HEADER_HEIGHT_PX,
  FOOTER_MIN_HEIGHT_PX,
} from '../../../styles';
import { ChevronUpSvg } from '../../svg';

const ScrollToTop: React.FC = () => {
  const windowScrollPosition = useWindowScrollPosition();
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    if (windowScrollPosition.y > HEADER_HEIGHT_PX) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, [windowScrollPosition.y]);

  const handleScrollToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  return (
    <Element
      aria-hidden
      tabIndex={-1}
      title="Back to top"
      isVisible={isVisible}
      onClick={handleScrollToTop}
    >
      <Icon />
    </Element>
  );
};

const styleCSS = css`
  background-color: ${colors.white};
  border: 1px solid ${colors.lightGray};
  border-radius: 4px;
  color: ${colors.darkGray};
  padding: 3px 5px;

  &:hover {
    border-color: ${colors.darkGray};
  }
`;

const positionCSS = css`
  bottom: 15px;
  position: fixed;
  right: 15px;
  z-index: 99;

  ${media.lg`
    bottom: ${FOOTER_MIN_HEIGHT_PX + 16}px;
    right: 32px;
  `}
`;

const visibilityCSS = css<{ isVisible: boolean }>`
  opacity: 0;
  transition: all 200ms ease-in-out;

  ${({ isVisible }) =>
    isVisible &&
    `
      opacity: 1;
    `};
`;

const Element = styled.button<{ isVisible: boolean }>`
  ${unstyledButtonCSS}
  ${styleCSS}
  ${positionCSS}
  ${visibilityCSS}
  display: flex;
`;

const Icon = styled(ChevronUpSvg)`
  height: ${getRems(20)};
`;

export default ScrollToTop;
