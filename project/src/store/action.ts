import { createAction } from '@reduxjs/toolkit';
import { Offer } from '../types/offer';
import { Review } from '../types/review';
import { AppRoute, AuthorizationStatus } from '../common/const';

export const changeCity = createAction('city/changeCity', (value: string) => ({
  payload: value,
}));

export const changeSort = createAction('offers/changeSort', (sort:string) => ({
  payload: sort,
}));

export const loadOffers = createAction<Offer[]>('data/loadOffers');

export const loadCurrentOffer = createAction<Offer>('data/loadCurrentOffer');

export const loadOffersNearby = createAction<Offer[]>('data/loadOffersNearby');

export const loadComments = createAction<Review[]>('data/loadReviexs');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

export const setOffersDataLoadingStatus = createAction<boolean>('data/setOffersDataLoadingStatus');

export const setError = createAction<string | null>('data/setError');

export const redirectToRoute = createAction<AppRoute>('app/redirectToRoute');
