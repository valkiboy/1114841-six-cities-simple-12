export const DEFAULT_CITY = 'Paris';
export const DEFAULT_SORT_TYPE = 'Popular';

export enum AppRoute {
  Root = '/',
  Login = '/login',
  Room = '/offer/:id',
  PageNotFound = '/404'
}

export const URL_MARKER_DEFAULT =
  '/img/pin.svg';

export const URL_MARKER_CURRENT =
  '/img/pin-active.svg';

export enum SortTypes {
  Popular = 'Popular',
  LowToHigh = 'Price: low to high',
  HighToLow = 'Price: high to low',
  Rating = 'Top rated first'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}
