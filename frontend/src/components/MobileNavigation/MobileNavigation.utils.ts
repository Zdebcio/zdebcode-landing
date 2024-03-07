import { useEffect, useRef, useState } from 'react';

export const usePinNavigation = () => {
  const elementRef = useRef<HTMLDivElement>(null);
  const [isNavPinned, setIsNavPinned] = useState<boolean>(false);

  useEffect(() => {
    const offsetTop = elementRef.current?.offsetTop ?? 0;

    const handleSetNavPinned = () => setIsNavPinned(window.scrollY >= offsetTop);

    handleSetNavPinned();

    window.addEventListener('scroll', handleSetNavPinned);

    return () => {
      document.removeEventListener('scroll', handleSetNavPinned);
    };
  }, [elementRef]);

  return { elementRef, isNavPinned };
};

export const useOutsideClick = (callback: () => void) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(<Node>event!.target)) {
        callback();
      }
    };

    document.addEventListener('mousedown', handleClick);

    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  }, [callback]);

  return ref;
};
