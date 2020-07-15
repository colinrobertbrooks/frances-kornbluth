import { useEffect } from 'react';

export const useScrollToTopOnMount = (): void => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
};
