import { useEffect, RefObject } from 'react';

export function useClickOutside(
  containerRef: RefObject<HTMLElement>, status: boolean,  close: () => void) {

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
    if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
      close();
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [status]);
}