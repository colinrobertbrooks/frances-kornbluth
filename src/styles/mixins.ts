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

/*
 *  links
 */
export const linkCSS = css`
  a {
    color: ${colors.red};

    &:hover,
    &:focus {
      color: ${colors.darkRed};
    }

    &:focus {
      ${focusOutlineCSS}
    }
  }
`;

/*
 *  resets
 */
export const unstyledButtonCSS = css`
  background-color: inherit;
  border: none;
  cursor: pointer;
  font-size: inherit;
  font-weight: inherit;
  padding: 0;
`;
