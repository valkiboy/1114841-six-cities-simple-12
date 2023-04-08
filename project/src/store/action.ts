import { createAction } from '@reduxjs/toolkit';
import { Offer } from '../types/offer';
import { Review } from '../types/review';
import { AppRoute, AuthorizationStatus } from '../common/const';
import { UserData } from '../types/user-data';

export const changeCity = createAction('city/changeCity', (value: string) => ({
  payload: value,
}));

export const changeSort = createAction('offers/changeSort', (sort:string) => ({
  payload: sort,
}));

export const loadOffers = createAction<Offer[]>('data/loadOffers');

export const loadCurrentOffer = createAction<Offer>('data/loadCurrentOffer');

export const loadOffersNearby = createAction<Offer[]>('data/loadOffersNearby');

export const loadCurrentReviews = createAction<Review[]>('data/loadCurrentReviews');

export const setReviewIsLoading = createAction<boolean>('data/setReviewIsLoading');

export const loadUserData = createAction<UserData>('data/loadUserData');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

export const setOffersDataLoadingStatus = createAction<boolean>('data/setOffersDataLoadingStatus');

export const setCurrentOfferLoadingStatus = createAction<boolean>('data/setCurrentOffersLoadingStatus');

export const redirectToRoute = createAction<AppRoute>('app/redirectToRoute');
