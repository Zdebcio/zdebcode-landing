import { useElementToggle, useOutsideClick } from '../../hooks';

export const useMobileNavigation = () => {
  const { isElementOpened, handleElementToggle } = useElementToggle();

  const handleClickOutsideMobileMenu = () => {
    isElementOpened && handleElementToggle(false);
  };

  const mobileMenuRef = useOutsideClick(handleClickOutsideMobileMenu);

  return { isElementOpened, handleElementToggle, mobileMenuRef };
};
