import React from 'react';

export const StartTitle = () => {
  const headingStyles = 'flex flex-col text-center text-5xl landscape:text-right';
  const nameStyles = 'font-semibold text-primary sm:text-7xl xl:text-8xl 2xl:text-9xl';
  const positionStyles =
    'text-xl font-semibold text-secondary sm:text-3xl xl:text-4xl 2xl:text-5xl';

  return (
    <h1 className={headingStyles}>
      <span className={nameStyles}>First Name</span>
      <strong className={positionStyles}>Frontend Web Developer</strong>
    </h1>
  );
};
