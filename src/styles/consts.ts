/*
 *  screen
 */
export const MIN_SCREEN_WIDTH_PX = 320;

/*
 *  banner
 */
export const HAS_BANNER = false;

export const BANNER_HEIGHT_PX = 57;

/*
 *  navbar
 */
export const NAVBAR_HEIGHT_PX = 57;

/*
 *  header
 */
export const HEADER_HEIGHT_PX = HAS_BANNER
  ? BANNER_HEIGHT_PX + NAVBAR_HEIGHT_PX
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
