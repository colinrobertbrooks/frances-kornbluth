import TagManager from 'react-gtm-module';
import { GOOGLE_TAG_MANAGER_ID } from 'consts';
import { IS_PROD } from './env';

export const initGoogleTagManager = (): void => {
  if (IS_PROD) {
    TagManager.initialize({
      gtmId: GOOGLE_TAG_MANAGER_ID,
    });
  }
};
