import { createAction } from '@reduxjs/toolkit';

export const changeCity = createAction('city/changeCity', (value: string) => ({
  payload: value,
}));

export const changeSort = createAction('offers/changeSort', (sort:string) => ({
  payload: sort,
}));
