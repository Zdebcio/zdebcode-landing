import { HeadFC, PageProps } from 'gatsby';
import * as React from 'react';

import { Navbar } from '../components/Navbar';
import { StartSection } from '../components/StartSection';

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      <Navbar />
      <StartSection />
      <div className="min-h-svh"></div>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
