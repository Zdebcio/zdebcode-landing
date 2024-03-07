import React, { MouseEvent } from 'react';

import { cn } from '../../lib/utils';
import CloseIcon from '../icons/CloseIcon';
import MenuIcon from '../icons/MenuIcon';

interface MenuButtonProps {
  open: boolean;
  toggleClick: (event: MouseEvent<HTMLElement>) => void;
  className?: string;
}

const MenuButton = ({ open, toggleClick, className }: MenuButtonProps) => {
  const buttonStyles = cn(
    'btn btn-circle btn-link swap swap-rotate',
    open ? 'swap-active' : '',
    className
  );

  return (
    <button className={buttonStyles} onClick={toggleClick}>
      <MenuIcon className="swap-off h-8 w-8 fill-primary" />
      <CloseIcon className="swap-on h-8 w-8 fill-primary" />
    </button>
  );
};

export default MenuButton;
