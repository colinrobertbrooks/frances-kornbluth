import { css } from 'styled-components';
import { breakpoints } from './breakpoints';

export const media = {
  sm: (literals: TemplateStringsArray, ...args: any[]) => css`
    @media (min-width: ${breakpoints.sm}px) {
      ${css(literals, ...args)};
    }
  `,
  md: (literals: TemplateStringsArray, ...args: any[]) => css`
    @media (min-width: ${breakpoints.md}px) {
      ${css(literals, ...args)};
    }
  `,
  lg: (literals: TemplateStringsArray, ...args: any[]) => css`
    @media (min-width: ${breakpoints.lg}px) {
      ${css(literals, ...args)};
    }
  `,
  xl: (literals: TemplateStringsArray, ...args: any[]) => css`
    @media (min-width: ${breakpoints.xl}px) {
      ${css(literals, ...args)};
    }
  `,
};
