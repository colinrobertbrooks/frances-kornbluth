import React, { useEffect, useRef } from 'react';

// https://gist.github.com/Danziger/336e75b6675223ad805a88c2dfdcfd4a#file-timeout-hook-ts
export function useTimeout(
  callback: React.EffectCallback,
  delay: number | null
): React.MutableRefObject<number | null> {
  const timeoutRef = useRef<number | null>(null);
  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    if (typeof delay === 'number') {
      timeoutRef.current = window.setTimeout(
        () => callbackRef.current(),
        delay
      );
      return () => window.clearTimeout(timeoutRef.current || 0);
    }
    return undefined;
  }, [delay]);

  return timeoutRef;
}
