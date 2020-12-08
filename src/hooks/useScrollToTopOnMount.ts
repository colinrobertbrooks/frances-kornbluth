import { useEffect } from 'react';

export function useScrollToTopOnMount(): void {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
}
