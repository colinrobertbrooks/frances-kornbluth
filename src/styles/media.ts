/* eslint-disable @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types */
import { css } from 'styled-components';
import { breakpoints } from './breakpoints';

export const media = {
  sm: (literals: TemplateStringsArray, ...args: any[]) => css`
    @media screen and (min-width: ${breakpoints.sm}px) {
      ${css(literals, ...args)};
    }
  `,
  md: (literals: TemplateStringsArray, ...args: any[]) => css`
    @media screen and (min-width: ${breakpoints.md}px) {
      ${css(literals, ...args)};
    }
  `,
  lg: (literals: TemplateStringsArray, ...args: any[]) => css`
    @media screen and (min-width: ${breakpoints.lg}px) {
      ${css(literals, ...args)};
    }
  `,
  xl: (literals: TemplateStringsArray, ...args: any[]) => css`
    @media screen and (min-width: ${breakpoints.xl}px) {
      ${css(literals, ...args)};
    }
  `,
};

export const getCurrentMedia = (windowWidth: number): string => {
  const breakpointValues = Object.values(breakpoints);
  let currentMedia = 'xs';

  breakpointValues.some((value, idx) => {
    const nextValue = breakpointValues[idx + 1] || Infinity;

    if (windowWidth >= value && windowWidth < nextValue) {
      currentMedia = Object.keys(breakpoints)[idx];
      return true;
    }

    return false;
  });

  return currentMedia;
};
