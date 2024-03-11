import { AnchorLink } from 'gatsby-plugin-anchor-links';
import React from 'react';

import paths from '../../config/paths';
import { useStickyElement } from '../../hooks';
import { NavigationLink } from '../../ts/interfaces';
import { Logo } from '../Logo';
import { MobileNavigation } from '../MobileNavigation';
import { Navigation } from '../Navigation';
import { useNavbarStyles } from './useNavbarStyles';

export const Navbar = () => {
  const { elementRef, isElementPinned } = useStickyElement();
  const { logoStyles, navigationStyles } = useNavbarStyles(isElementPinned);

  const links: NavigationLink[] = [
    { title: 'Start', to: paths.START },
    { title: 'About me', to: paths.ABOUT_ME },
    { title: 'Skills', to: paths.SKILLS },
    { title: 'Experience', to: paths.EXPERIENCE },
    { title: 'Education', to: paths.EDUCATION },
    { title: 'Projects', to: paths.PROJECTS },
    { title: 'Contact', to: paths.CONTACT }
  ];

  return (
    <header className="navbar-container" ref={elementRef}>
      <nav className={navigationStyles}>
        <div className="flex-1">
          <AnchorLink to="/#start" title="Start">
            <Logo className={logoStyles} />
          </AnchorLink>
        </div>
        <div className="flex-none">
          <Navigation items={links} className="hidden xl:flex" />
          <MobileNavigation items={links} />
        </div>
      </nav>
    </header>
  );
};
