import { createAction } from '@reduxjs/toolkit';
import { Offer } from '../types/offer';
import { AuthorizationStatus } from '../common/const';

export const changeCity = createAction('city/changeCity', (value: string) => ({
  payload: value,
}));

export const changeSort = createAction('offers/changeSort', (sort:string) => ({
  payload: sort,
}));

export const loadOffers = createAction<Offer[]>('data/loadOffers');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

export const setOffersDataLoadingStatus = createAction<boolean>('data/setOffersDataLoadingStatus');
