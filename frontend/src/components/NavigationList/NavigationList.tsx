import React from 'react';

import { cn } from '../../lib/utils';
import NavigationItem from '../NavigationItem/NavigationItem';

export interface NavigationListProps {
  className?: string;
  itemClick?: () => void;
}

const NavigationList = ({ className, itemClick }: NavigationListProps) => (
  <ul className={cn('flex gap-4', className)}>
    <li>
      <NavigationItem to="/#start" title="Start" click={itemClick} />
    </li>
    <li>
      <NavigationItem to="/#about" title="About me" click={itemClick} />
    </li>
    <li>
      <NavigationItem to="/#skills" title="Skills" click={itemClick} />
    </li>
    <li>
      <NavigationItem to="/#experience" title="Experience" click={itemClick} />
    </li>
    <li>
      <NavigationItem to="/#education" title="Education" click={itemClick} />
    </li>
    <li>
      <NavigationItem to="/#projects" title="Projects" click={itemClick} />
    </li>
    <li>
      <NavigationItem to="/#contact" title="Contact" click={itemClick} />
    </li>
  </ul>
);

export default NavigationList;
