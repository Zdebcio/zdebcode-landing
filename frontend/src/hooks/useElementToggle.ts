import { useState } from 'react';

export const useElementToggle = () => {
  const [isElementOpened, setIsElementOpened] = useState<boolean>(false);

  const handleElementToggle = (shouldOpen?: boolean) =>
    setIsElementOpened(shouldOpen ?? !isElementOpened);

  return { isElementOpened, handleElementToggle };
};
