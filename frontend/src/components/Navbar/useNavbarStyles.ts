import { cn } from '../../lib/utils';

export const useNavbarStyles = (pinned?: boolean) => {
  const navigationStyles = cn(
    'navigation-wrapper',
    pinned && 'fixed left-0 top-0 bg-base-200 shadow-md'
  );

  const logoStyles = cn('h-14 fill-base-100 transition-colors md:h-16', pinned && 'fill-primary');

  return { navigationStyles, logoStyles };
};
