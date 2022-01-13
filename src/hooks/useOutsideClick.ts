import { useEffect } from 'react';

export function useOutsideClick(
  ref: React.RefObject<any>,
  callback: () => void,
  checkIsOutsideClick?: (event: any) => boolean
): void {
  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (ref.current && !ref.current.contains(event.target)) {
        if (checkIsOutsideClick && !checkIsOutsideClick(event)) return;
        callback();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [ref, callback, checkIsOutsideClick]);
}
