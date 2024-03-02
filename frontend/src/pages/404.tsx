import { Link, HeadFC, PageProps } from 'gatsby';
import * as React from 'react';

const NotFoundPage: React.FC<PageProps> = () => (
  <main>
    <h1>Page not found</h1>
    <Link to="/">Go home</Link>.
  </main>
);

export default NotFoundPage;

export const Head: HeadFC = () => <title>Not found</title>;
