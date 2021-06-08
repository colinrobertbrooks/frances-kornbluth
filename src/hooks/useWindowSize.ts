import { useState, useEffect } from 'react';
import { debounce } from '../utils';

export interface IWindowSize {
  width: number;
  height: number;
}

const getWindowSize = () => ({
  width: window.innerWidth,
  height: window.innerHeight,
});

export function useWindowSize(): IWindowSize {
  const [windowSize, setWindowSize] = useState<IWindowSize>(getWindowSize);

  useEffect(() => {
    const onResize = debounce(() => setWindowSize(getWindowSize), 250);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return windowSize;
}
