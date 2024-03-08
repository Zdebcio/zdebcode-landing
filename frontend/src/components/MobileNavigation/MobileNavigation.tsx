import React, { useState } from 'react';

import { useOutsideClick } from '../../hooks';
import { cn } from '../../lib/utils';
import { NavigationLink } from '../../ts/interfaces';
import { MenuButton } from '../MenuButton';
import { Navigation } from '../Navigation';

export interface MobileNavigationProps {
  items: NavigationLink[];
  className?: string;
}

export const MobileNavigation = ({ items, className }: MobileNavigationProps) => {
  const handleClickOutsideMobileMenu = () => {
    isMenuOpened && handleMenuToggle(false);
  };

  const mobileMenuRef = useOutsideClick(handleClickOutsideMobileMenu);

  const [isMenuOpened, setIsMenuOpened] = useState<boolean>(false);

  const handleMenuToggle = (shouldOpen?: boolean) => setIsMenuOpened(shouldOpen ?? !isMenuOpened);

  return (
    <div
      ref={mobileMenuRef}
      className={cn('dropdown dropdown-end xl:hidden', isMenuOpened && 'dropdown-open', className)}
    >
      <MenuButton toggleClick={() => handleMenuToggle()} open={isMenuOpened} />
      {isMenuOpened && (
        <Navigation
          items={items}
          itemClick={() => handleMenuToggle(false)}
          className="menu dropdown-content z-[1] mt-4 w-52 rounded-box bg-base-200 p-2 shadow"
        />
      )}
    </div>
  );
};
