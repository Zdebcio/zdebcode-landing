import { useEffect, useRef, useState } from 'react';

export const useStickyElement = () => {
  const elementRef = useRef<HTMLDivElement>(null);
  const [isElementPinned, setIsElementPinned] = useState<boolean>(false);

  useEffect(() => {
    const offsetTop = elementRef.current?.offsetTop ?? 0;

    const handleSetElementSticky = () => setIsElementPinned(window.scrollY >= offsetTop);

    handleSetElementSticky();

    window.addEventListener('scroll', handleSetElementSticky);

    return () => {
      document.removeEventListener('scroll', handleSetElementSticky);
    };
  }, [elementRef]);

  return { elementRef, isElementPinned };
};
