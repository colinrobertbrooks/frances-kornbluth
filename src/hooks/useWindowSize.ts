import { useState, useEffect } from 'react';

export interface IWindowSize {
  width: number;
  height: number;
}

export function useWindowSize(): IWindowSize {
  const [windowSize, setWindowSize] = useState<{
    width: number;
    height: number;
  }>({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const onResize = () =>
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });

    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return windowSize;
}
