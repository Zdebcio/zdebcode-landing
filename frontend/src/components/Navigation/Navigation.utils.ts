import { useEffect, useRef, useState } from 'react';

import { cn } from '../../lib/utils';

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

export const useNavigationStyles = (pinned?: boolean) => {
  const navigationStyles = cn(
    'navbar relative top-0 z-50 min-h-20 bg-transparent px-5 transition-colors sm:px-14 lg:px-20',
    pinned && 'fixed bg-base-200 shadow-md'
  );

  const logoStyles = cn('h-16 fill-base-100 transition-colors', pinned && 'fill-primary');

  return { navigationStyles, logoStyles };
};
