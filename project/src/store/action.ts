import { createAction } from '@reduxjs/toolkit';

export const changeCity = createAction('city/changeCity', (value: string) => ({
  payload: value,
}));

export const changeSort = createAction('city/changeCity', (value: string) => ({
  payload: value,
}));

export const changeCurrentOffers = createAction('offers/changeCurrentOffers', (value: number) => ({
  payload: value,
}));
