import React from 'react';

import { cn } from '../../lib/utils';
import { NavigationLink } from '../../ts/interfaces';
import { NavigationItem } from '../NavigationItem';

export interface NavigationProps {
  items: NavigationLink[];
  itemClick?: () => void;
  className?: string;
}

export const Navigation = ({ items, itemClick, className }: NavigationProps) => (
  <ul className={cn('flex gap-4', className)}>
    {items.map((item) => (
      <li key={item.to}>
        <NavigationItem {...item} click={itemClick} />
      </li>
    ))}
  </ul>
);
