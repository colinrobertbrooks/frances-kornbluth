import { SITE_HAS_GLOBAL_BANNER } from '../consts';

/*
 *  screen
 */
export const MIN_SCREEN_WIDTH_PX = 320;

/*
 *  global banner
 */
export const GLOBAL_BANNER_HEIGHT_PX = 57;

/*
 *  navbar
 */
export const NAVBAR_HEIGHT_PX = 57;

/*
 *  header
 */
export const HEADER_HEIGHT_PX = SITE_HAS_GLOBAL_BANNER
  ? GLOBAL_BANNER_HEIGHT_PX + NAVBAR_HEIGHT_PX
  : NAVBAR_HEIGHT_PX;

/*
 *  main
 */
export const MAIN_PADDING_TOP_PX = 24;

/*
 *  footer
 */
export const FOOTER_MARGIN_TOP_PX = 48;

export const FOOTER_MIN_HEIGHT_PX = 43;

/*
 *  typography
 */
export const BASE_FONT_SIZE_PX = 16;
