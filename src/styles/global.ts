import { createGlobalStyle } from 'styled-components';
import { MIN_SCREEN_WIDTH_PX, HEADER_HEIGHT_PX } from './constants';
import { colors } from './colors';

export const GlobalStyles = createGlobalStyle`
  #root {
    height: calc(100% - ${HEADER_HEIGHT_PX}px);
    min-width: ${MIN_SCREEN_WIDTH_PX}px;
  }

  body {
    background-color: ${colors.body};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;
