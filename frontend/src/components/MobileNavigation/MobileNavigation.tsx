import React from 'react';

import { useOutsideClick } from '../../hooks';
import { useElementToggle } from '../../hooks';
import { cn } from '../../lib/utils';
import { NavigationLink } from '../../ts/interfaces';
import { MenuButton } from '../MenuButton';
import { Navigation } from '../Navigation';

export interface MobileNavigationProps {
  items: NavigationLink[];
  className?: string;
}

export const MobileNavigation = ({ items, className }: MobileNavigationProps) => {
  const { isElementOpened, handleElementToggle } = useElementToggle();

  const handleClickOutsideMobileMenu = () => {
    isElementOpened && handleElementToggle(false);
  };

  const mobileMenuRef = useOutsideClick(handleClickOutsideMobileMenu);

  return (
    <div
      ref={mobileMenuRef}
      className={cn(
        'dropdown dropdown-end xl:hidden',
        isElementOpened && 'dropdown-open',
        className
      )}
    >
      <MenuButton toggleClick={() => handleElementToggle()} open={isElementOpened} />
      {isElementOpened && (
        <Navigation
          items={items}
          itemClick={() => handleElementToggle(false)}
          className="mobile-nav"
        />
      )}
    </div>
  );
};
