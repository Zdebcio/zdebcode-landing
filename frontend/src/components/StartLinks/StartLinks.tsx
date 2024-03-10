import { Link } from 'gatsby';
import React from 'react';

import { EmailIcon, GithubIcon, LinkedinIcon } from '../icons';

export const StartLinks = () => {
  const buttonStyles = 'start-btn btn-primary hover:bg-primary hover:text-base-100';

  return (
    <div className="flex gap-3">
      <Link to="#" target="_blank" className={buttonStyles}>
        <LinkedinIcon />
      </Link>
      <Link to="#" target="_blank" className={buttonStyles}>
        <GithubIcon />
      </Link>
      <Link to="mailto:#" className={buttonStyles}>
        <EmailIcon />
      </Link>
    </div>
  );
};
