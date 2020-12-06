import { createGlobalStyle } from 'styled-components';
import { NAVBAR_HEIGHT_PX, MIN_SCREEN_WIDTH_PX } from './constants';

export const GlobalStyles = createGlobalStyle`
  #root {
    height: calc(100% - ${NAVBAR_HEIGHT_PX}px);
    min-width: ${MIN_SCREEN_WIDTH_PX}px;
  }

  body {
    background-color: #fcfcfc;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;
