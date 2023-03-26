import { createReducer } from '@reduxjs/toolkit';
// import { changeCity } from './action';
import { changeCity, changeCurrentOffers } from './action';
import { DEFAULT_CITY } from '../common/const';
import { offers } from '../mocks/offers';


const initialState = {
  city: DEFAULT_CITY,
  offers: offers,
  currentOffers: 0,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })

    .addCase(changeCurrentOffers, (state, action) => {
      state.currentOffers = action.payload;
    });
});

export { reducer };
