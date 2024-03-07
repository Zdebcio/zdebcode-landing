import { AnchorLink } from 'gatsby-plugin-anchor-links';
import React from 'react';

import { useStickyElement } from '../../hooks';
import Logo from '../Logo/Logo';
import MobileNavigation from '../MobileNavigation/MobileNavigation';
import NavigationList from '../NavigationList/NavigationList';
import { useNavigationStyles } from './useNavigationStyles';

const Navigation = () => {
  const { elementRef, isNavPinned } = useStickyElement();
  const { logoStyles, navigationStyles } = useNavigationStyles(isNavPinned);

  return (
    <nav className={navigationStyles} ref={elementRef}>
      <div className="flex-1">
        <AnchorLink to="/#start" title="Start">
          <Logo className={logoStyles} />
        </AnchorLink>
      </div>
      <div className="flex-none">
        <NavigationList className="hidden xl:flex" />
        <MobileNavigation />
      </div>
    </nav>
  );
};

export default Navigation;
