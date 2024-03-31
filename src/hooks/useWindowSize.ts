import { useState, useEffect } from 'react';
import { debounce } from '../utils';

export type WindowSize = {
  width: number;
  height: number;
};

const getWindowSize = () => ({
  width: window.innerWidth,
  height: window.innerHeight,
});

export function useWindowSize(debounceMs = 100): WindowSize {
  const [windowSize, setWindowSize] = useState<WindowSize>(getWindowSize);

  useEffect(() => {
    const onResize = debounce(() => setWindowSize(getWindowSize), debounceMs);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [debounceMs]);

  return windowSize;
}
