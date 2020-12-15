import TagManager from 'react-gtm-module';
import { IS_PROD } from './env';

const GOOGLE_TAG_MANAGER_ID = 'GTM-M2SX39M';

export const initGoogleTagManager = (): void => {
  if (IS_PROD) {
    TagManager.initialize({
      gtmId: GOOGLE_TAG_MANAGER_ID,
    });
  }
};
