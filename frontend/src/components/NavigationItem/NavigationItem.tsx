import { AnchorLink } from 'gatsby-plugin-anchor-links';
import React from 'react';

export interface NavigationItemProps {
  to: string;
  title: string;
  click?: () => void;
}

export const NavigationItem = ({ to, title, click }: NavigationItemProps) => (
  <AnchorLink
    className="font-semibold uppercase text-primary"
    to={to}
    title={title}
    onAnchorLinkClick={click}
  >
    <span>{title}</span>
  </AnchorLink>
);
