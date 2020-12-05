import { css } from 'styled-components';
import { lighten } from 'polished';
import { colors } from './colors';

/*
  a11y
*/
export const focusOutlineCSS = css`
  outline: ${lighten(0.06, colors.lightRed)} auto 1px;
`;

export const srOnlyCSS = css`
  border: 0;
  clip: rect(0, 0, 0, 0);
  clip-path: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;
