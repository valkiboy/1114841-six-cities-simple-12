import { store } from '../store';
import { AuthorizationStatus } from '../common/const';
import { Offer } from './offer';
import { Review } from './review';
import { UserData } from './user-data';

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type UserProcess = {
  authorizationStatus: AuthorizationStatus;
  userData: UserData | null;
}

export type OffersData = {
  offers: Offer[];
  isOffersDataLoading: boolean;
  isCurrentOfferLoading: boolean;
  currentOffer: Offer | null;
  offersNearby: Offer[] | [];
  currentReviews: Review[];
  reviewIsLoading: boolean;
  hasError: boolean;
}

export type SortingProcess = {
  city: string;
  sorting: string;
}
