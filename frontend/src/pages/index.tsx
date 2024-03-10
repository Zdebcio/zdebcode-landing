import { HeadFC, PageProps } from 'gatsby';
import * as React from 'react';

import { StartSection } from '../components/StartSection';

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      <StartSection />
      <div className="min-h-svh"></div>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
