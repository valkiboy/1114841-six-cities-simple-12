import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../common/const';
import { OffersData } from '../../types/state';
import { fetchCurrentOfferAction, fetchCurrentReviewsAction, fetchOffersAction, fetchOffersNearbyAction, reviewAction } from '../api-actions';
import { toast } from 'react-toastify';

const initialState: OffersData = {
  offers: [],
  isOffersDataLoading: false,
  isCurrentOfferLoading: true,
  currentOffer: null,
  currentReviews: [],
  offersNearby: [],
  reviewIsLoading: false,
  hasError: false,
  textClear: false,
};


export const offersData = createSlice({
  name: NameSpace.Data,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchOffersAction.pending, (state) => {
        state.isOffersDataLoading = true;
        state.hasError = false;
      })
      .addCase(fetchOffersAction.fulfilled, (state, action) => {
        state.offers = action.payload;
        state.isOffersDataLoading = false;
      })
      .addCase(fetchOffersAction.rejected, (state) => {
        state.isOffersDataLoading = false;
        state.hasError = true;
      })
      .addCase(fetchCurrentOfferAction.pending, (state) => {
        state.isCurrentOfferLoading = true;
      })
      .addCase(fetchCurrentOfferAction.fulfilled, (state, action) => {
        state.currentOffer = action.payload;
        state.isCurrentOfferLoading = false;
      })
      .addCase(fetchCurrentOfferAction.rejected, (state) => {
        state.isCurrentOfferLoading = false;
      })
      .addCase(fetchOffersNearbyAction.fulfilled, (state, action) => {
        state.offersNearby = action.payload;
      })
      .addCase(fetchCurrentReviewsAction.fulfilled, (state, action) => {
        state.currentReviews = action.payload;
      })
      .addCase(reviewAction.pending, (state) => {
        state.reviewIsLoading = true;
        state.textClear = false;
      })
      .addCase(reviewAction.fulfilled, (state, action) => {
        state.currentReviews = action.payload;
        state.textClear = true;
        state.reviewIsLoading = false;
      })
      .addCase(reviewAction.rejected, (state) => {
        state.reviewIsLoading = false;
        toast.warn('Отослать обзор не получилось, попробуйте позже');
      });
  }
});

