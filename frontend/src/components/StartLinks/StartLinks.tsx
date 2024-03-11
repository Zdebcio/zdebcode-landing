import { Link } from 'gatsby';
import React from 'react';

import { EmailIcon, GithubIcon, LinkedinIcon } from '../icons';

export interface StartLinksProps {
  linkedin: string;
  github: string;
  email: string;
}

export const StartLinks = ({ linkedin, github, email }: StartLinksProps) => {
  const buttonStyles = 'start-btn btn-primary hover:bg-primary hover:text-base-100';

  return (
    <div className="flex gap-3">
      <Link to={linkedin} target="_blank" className={buttonStyles}>
        <LinkedinIcon />
      </Link>
      <Link to={github} target="_blank" className={buttonStyles}>
        <GithubIcon />
      </Link>
      <Link to={`mailto:${email}`} className={buttonStyles}>
        <EmailIcon />
      </Link>
    </div>
  );
};
