import { createReducer } from '@reduxjs/toolkit';

import { changeCity, changeSort } from './action';
import { DEFAULT_CITY, DEFAULT_SORT_TYPE } from '../common/const';
import { offers } from '../mocks/offers';


const initialState = {
  city: DEFAULT_CITY,
  offers: offers,
  sorting: DEFAULT_SORT_TYPE,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })

    .addCase(changeSort, (state, action) => {
      state.sorting = action.payload;
    });
});

export { reducer };
