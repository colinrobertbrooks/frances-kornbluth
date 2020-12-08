import styled, { css } from 'styled-components';
import {
  colors,
  typography,
  focusOutlineCSS,
  srOnlyCSS,
  HEADER_HEIGHT_PX,
  MAIN_PADDING_TOP_PX,
} from '../../styles';

const resetCSS = css`
  clip: auto;
  clip-path: none;
  height: auto;
`;

const positionCSS = css`
  left: 50%;
  margin-top: 5px;
  margin-left: -100px;
  position: absolute;
  top: 0;
  z-index: 99999;
`;

const styleCSS = css`
  ${focusOutlineCSS}
  background: ${colors.gray};
  border: 1px solid ${colors.border};
  border-radius: 4px;
  color: ${colors.white};
  font-family: ${typography.default};
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  width: 200px;
`;

export const SkipToMain = styled.a.attrs({
  href: '#main',
  children: 'Skip to main content',
})`
  ${srOnlyCSS}

  &:focus,
  &:active {
    ${resetCSS}
    ${positionCSS}
    ${styleCSS}
  }
`;

export const MainAnchor = styled.span.attrs({ id: 'main' })`
  &:before {
    content: '';
    display: block;
    height: ${HEADER_HEIGHT_PX + MAIN_PADDING_TOP_PX}px;
    margin-top: -${HEADER_HEIGHT_PX + MAIN_PADDING_TOP_PX}px;
    pointer-events: none;
    visibility: hidden;
  }
`;
