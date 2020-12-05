import styled, { css } from 'styled-components';
import { colors, typography, focusOutlineCSS, srOnlyCSS } from '../../styles';

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
