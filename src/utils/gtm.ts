import TagManager from 'react-gtm-module';
import { IS_PROD } from './env';
import { GOOGLE_TAG_MANAGER_ID } from '../constants';

export const initGoogleTagManager = (): void => {
  if (IS_PROD) {
    TagManager.initialize({
      gtmId: GOOGLE_TAG_MANAGER_ID,
    });
  }
};
