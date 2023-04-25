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

export enum APIRoute {
  Offers = '/hotels',
  Login = '/login',
  Logout = '/logout',
  Reviews = '/comments'
}

export enum Cities {
  Paris = 'Paris',
  Cologne = 'Cologne',
  Brussels = 'Brussels',
  Amsterdam = 'Amsterdam',
  Hamburg = 'Hamburg',
  Dusseldorf = 'Dusseldorf'
}

export enum NameSpace {
  Data = 'DATA',
  Sorting = 'SORTING',
  User = 'USER',
}

export const DEFAULT_CITY = Cities.Paris;
export const DEFAULT_SORT_TYPE = SortTypes.Popular;
export const MAX_NUMBER_REVIEWS = 10;
export const MAX_NUMBER_IMAGE = 6;
export const REGEX = (/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{2,}$/);

export const shuffle = (items: string[]) => {
  let currentIndex = items.length, temporaryValue, randomIndex;

  while (currentIndex) {

    randomIndex = Math.floor(Math.random() * currentIndex--);

    temporaryValue = items[currentIndex];
    items[currentIndex] = items[randomIndex];
    items[randomIndex] = temporaryValue;
  }

  return items;
};
