import { BASE_FONT_SIZE_PX } from './consts';

export const getRems = (px: number): string => `${px / BASE_FONT_SIZE_PX}rem`;
