import React from 'react';

import { cn } from '../../lib/utils';
import { NavigationLink } from '../../ts/interfaces';
import { NavigationItem } from '../NavigationItem';

export interface NavigationListProps {
  items: NavigationLink[];
  itemClick?: () => void;
  className?: string;
}

export const NavigationList = ({ items, itemClick, className }: NavigationListProps) => (
  <ul className={cn('flex gap-4', className)}>
    {items.map((item) => (
      <li key={item.to}>
        <NavigationItem {...item} click={itemClick} />
      </li>
    ))}
  </ul>
);
