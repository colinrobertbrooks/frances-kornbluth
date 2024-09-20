import { useLayoutEffect } from 'react';

export function useScrollToTopOnMount(): void {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);
}
