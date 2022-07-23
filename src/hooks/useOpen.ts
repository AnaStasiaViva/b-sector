import { RefObject, useEffect, useState } from "react";

export function useOpen(
  containerRef: RefObject<HTMLElement>) {

   const [isOpen, setOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
    if (containerRef.current && containerRef.current.contains(e.target as Node)) {
      setOpen(!isOpen);
      }
    };
    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [isOpen]);

  return [isOpen, setOpen];
}