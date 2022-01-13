import { useState, useEffect } from 'react';
import { throttle } from '../utils';

const getScrollPosition = () => ({
  x: window.pageXOffset,
  y: window.pageYOffset,
});

export function useWindowScrollPosition(throttleMs = 100): {
  x: number;
  y: number;
} {
  const [scrollPosition, setScrollPosition] = useState(getScrollPosition);

  useEffect(() => {
    let requestRunning: number | null = null;
    const handleScroll = throttle(() => {
      if (!requestRunning) {
        requestRunning = window.requestAnimationFrame(() => {
          setScrollPosition(getScrollPosition);
          requestRunning = null;
        });
      }
    }, throttleMs);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [throttleMs]);

  return scrollPosition;
}
