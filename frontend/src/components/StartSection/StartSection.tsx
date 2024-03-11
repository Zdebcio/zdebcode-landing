import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';

import { StartLinks } from '../StartLinks';
import { StartTitle } from '../StartTitle';

export const StartSection = () => {
  const { strapiMainInfo } = useStaticQuery<Queries.MainInfoQuery>(graphql`
    query MainInfo {
      strapiMainInfo {
        github
        linkedin
        email
        name
        position
      }
    }
  `);

  const { github, linkedin, email, name, position } = strapiMainInfo;

  return (
    <section id="start" className="start">
      <div className="start-content">
        <StartTitle name={name} position={position} />
        <StartLinks github={github} linkedin={linkedin} email={email} />
      </div>
    </section>
  );
};
