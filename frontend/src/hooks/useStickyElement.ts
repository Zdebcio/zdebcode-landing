import { useEffect, useRef, useState } from 'react';

export const useStickyElement = () => {
  const elementRef = useRef<HTMLDivElement>(null);
  const [isNavPinned, setIsNavPinned] = useState<boolean>(false);

  useEffect(() => {
    const offsetTop = elementRef.current?.offsetTop ?? 0;

    const handleSetElementSticky = () => setIsNavPinned(window.scrollY >= offsetTop);

    handleSetElementSticky();

    window.addEventListener('scroll', handleSetElementSticky);

    return () => {
      document.removeEventListener('scroll', handleSetElementSticky);
    };
  }, [elementRef]);

  return { elementRef, isNavPinned };
};
