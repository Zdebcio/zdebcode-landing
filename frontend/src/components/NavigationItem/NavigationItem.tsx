import { AnchorLink } from 'gatsby-plugin-anchor-links';
import React from 'react';

import { cn } from '../../lib/utils';

export interface NavigationItemProps {
  to: string;
  title: string;
  click?: () => void;
  className?: string;
}

export const NavigationItem = ({ to, title, click, className }: NavigationItemProps) => (
  <AnchorLink className={cn('nav-link', className)} to={to} title={title} onAnchorLinkClick={click}>
    <span>{title}</span>
  </AnchorLink>
);
