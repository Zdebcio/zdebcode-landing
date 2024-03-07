import React from 'react';

import { Navigation } from '../Navigation';

export const StartSection = () => {
  return (
    <header id="start" className="start relative min-h-svh py-10">
      <div className="min-h-20 w-full">
        <Navigation />
      </div>
    </header>
  );
};
