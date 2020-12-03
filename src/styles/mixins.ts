import { css } from 'styled-components';
import { lighten } from 'polished';
import { colors } from './colors';

export const focusOutlineCSS = css`
  outline: ${lighten(0.06, colors.lightRed)} auto 1px;
`;
