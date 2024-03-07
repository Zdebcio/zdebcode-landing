import { cn } from '../../lib/utils';

export const useNavigationStyles = (pinned?: boolean) => {
  const navigationStyles = cn('navbar-container', pinned && 'fixed bg-base-200 shadow-md');

  const logoStyles = cn('h-16 fill-base-100 transition-colors', pinned && 'fill-primary');

  return { navigationStyles, logoStyles };
};
