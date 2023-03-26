export const DEFAULT_CITY = 'Paris';

export const AppRoute = {
  Root: '/',
  Login: '/login',
  Room: '/offer/:id',
  PageNotFound: '/404'
} as const;

export const URL_MARKER_DEFAULT =
  '/img/pin.svg';

export const URL_MARKER_CURRENT =
  '/img/pin-active.svg';

export const SortItems = {
  Popular: 'Popular',
  LowToHigh: 'Price: low to high',
  HighToLow: 'Price: high to low',
  Rating: 'Top rated first'
} as const;
