import { createGlobalStyle } from 'styled-components';
import { MIN_SCREEN_WIDTH_PX, HEADER_HEIGHT_PX } from './constants';
import { colors } from './colors';

export const GlobalStyles = createGlobalStyle`
  html {
    scroll-behavior: smooth;
  }

  body {
    background-color: ${colors.body};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  #root {
    height: calc(100% - ${HEADER_HEIGHT_PX}px);
    min-width: ${MIN_SCREEN_WIDTH_PX}px;
  }

  .modal {
    align-items: center;
    display: flex !important;
    justify-content: center;
  }

  .modal-dialog {
    margin: 0;
    margin-top: ${HEADER_HEIGHT_PX}px;
    margin-right: 8px;
    margin-left: 8px;
    max-width: none;
    min-width: 304px;
  }

  .js-focus-visible :focus:not(.focus-visible) {
    outline: none;
  }
`;
