import { createReducer } from '@reduxjs/toolkit';
import { changeCity, changeSort, loadOffers, requireAuthorization, setOffersDataLoadingStatus, loadCurrentOffer, loadOffersNearby, setCurrentOfferLoadingStatus, loadCurrentReviews, loadUserData, setReviewIsLoading } from './action';
import { DEFAULT_CITY, DEFAULT_SORT_TYPE, AuthorizationStatus } from '../common/const';
import { Offer } from '../types/offer';
import { Review } from '../types/review';
import { UserData } from '../types/user-data';


type InitialState = {
  city: string;
  offers: Offer[];
  sorting: string;
  authorizationStatus: AuthorizationStatus;
  isOffersDataLoading: boolean;
  isCurrentOfferLoading: boolean;
  currentOffer: Offer | null;
  currentReviews: Review[];
  offersNearby: Offer[] | [];
  userData: UserData | null;
  reviewIsLoading: boolean;
};


const initialState: InitialState = {
  city: DEFAULT_CITY,
  offers: [],
  sorting: DEFAULT_SORT_TYPE,
  authorizationStatus: AuthorizationStatus.Unknown,
  isOffersDataLoading: false,
  isCurrentOfferLoading: true,
  currentOffer: null,
  currentReviews: [],
  offersNearby: [],
  userData: null,
  reviewIsLoading: false,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })

    .addCase(changeSort, (state, action) => {
      state.sorting = action.payload;
    })

    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
    })

    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })

    .addCase(setOffersDataLoadingStatus, (state, action) => {
      state.isOffersDataLoading = action.payload;
    })

    .addCase(setCurrentOfferLoadingStatus, (state, action) => {
      state.isCurrentOfferLoading = action.payload;
    })

    .addCase(loadCurrentOffer, (state, action) => {
      state.currentOffer = action.payload;
    })

    .addCase(loadCurrentReviews, (state, action) => {
      state.currentReviews = action.payload;
    })

    .addCase(setReviewIsLoading, (state, action) => {
      state.reviewIsLoading = action.payload;
    })

    .addCase(loadUserData, (state, action) => {
      state.userData = action.payload;
    })

    .addCase(loadOffersNearby, (state, action) => {
      state.offersNearby = action.payload;
    });
});

export { reducer };
