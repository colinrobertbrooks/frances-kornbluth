import { BASE_FONT_SIZE_PX } from './constants';

export const getRems = (px: number): string => `${px / BASE_FONT_SIZE_PX}rem`;
