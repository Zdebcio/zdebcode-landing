import React from 'react';

import { StartLinks } from '../StartLinks';
import { StartTitle } from '../StartTitle';

export const StartSection = () => (
  <section id="start" className="start">
    <div className="start-content">
      <StartTitle />
      <StartLinks />
    </div>
  </section>
);
