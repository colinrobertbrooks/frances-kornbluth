import { css } from 'styled-components';
import { lighten } from 'polished';
import { colors } from './colors';

/*
  a11y
*/
export const disabledCSS = css`
  cursor: not-allowed;
  opacity: 0.7;
`;

export const focusBorderCSS = css`
  border-color: #ced4da;
  box-shadow: 0 0 0 0.2rem ${lighten(0.06, colors.lightRed)};
`;

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

export const unstyledLinkCSS = css`
  background-color: transparent;
  color: inherit;
  font-family: inherit;
  font-size: inherit;
  font-style: inherit;
  line-height: inherit;
  font-variant: inherit;
  font-weight: inherit;
  text-decoration: none;

  &:hover,
  &:focus {
    color: inherit;
    text-decoration: none;
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
