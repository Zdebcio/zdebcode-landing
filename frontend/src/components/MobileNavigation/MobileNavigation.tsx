import React from 'react';

import { cn } from '../../lib/utils';
import { NavigationLink } from '../../ts/interfaces';
import { MenuButton } from '../MenuButton';
import { Navigation } from '../Navigation';
import { useMobileNavigation } from './useMobileNavigation';

export interface MobileNavigationProps {
  items: NavigationLink[];
  className?: string;
}

export const MobileNavigation = ({ items, className }: MobileNavigationProps) => {
  const { isElementOpened, handleElementToggle, mobileMenuRef } = useMobileNavigation();

  const dropdownStyles = cn(
    'dropdown dropdown-end xl:hidden',
    isElementOpened && 'dropdown-open',
    className
  );

  return (
    <div ref={mobileMenuRef} className={dropdownStyles}>
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
