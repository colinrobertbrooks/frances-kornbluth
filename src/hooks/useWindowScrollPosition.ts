import { useState, useEffect } from 'react';

const getScrollPosition = () => ({
  x: window.pageXOffset,
  y: window.pageYOffset,
});

export function useWindowScrollPosition(): { x: number; y: number } {
  const [scrollPosition, setScrollPosition] = useState(getScrollPosition());

  useEffect(() => {
    let requestRunning: number | null = null;
    const handleScroll = () => {
      if (!requestRunning) {
        requestRunning = window.requestAnimationFrame(() => {
          setScrollPosition(getScrollPosition());
          requestRunning = null;
        });
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return scrollPosition;
}

export default useWindowScrollPosition;
