import { makeFackeOfferData, makeFackeOffersData, makeFackeReviews } from '../../common/mocks';
import { OffersData } from '../../types/state';
import { fetchCurrentOfferAction, fetchCurrentReviewsAction, fetchOffersAction, fetchOffersNearbyAction, reviewAction } from '../api-actions';
import { offersData } from './offers-data';

const fackeOffersData = makeFackeOffersData();
const fackeOfferData = makeFackeOfferData();
const fakeReviewsData = makeFackeReviews();

describe('Reducer: offers', () => {
  let state: OffersData;

  beforeEach(() => {
    state = {
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
  });

  it('without additional parameters should return initial state', () => {
    expect(offersData.reducer(void 0, { type: 'UNKNOWN_ACTION' }))
      .toEqual(state);
  });

  describe('loadOffersAction', () => {
    it('should update offersAction by pending offers', () => {
      state.isOffersDataLoading = true;
      state.hasError = false;
      expect(offersData.reducer(state, { type: fetchOffersAction.pending.type }))
        .toEqual(state = {
          offers: [],
          isOffersDataLoading: true,
          isCurrentOfferLoading: true,
          currentOffer: null,
          currentReviews: [],
          offersNearby: [],
          reviewIsLoading: false,
          hasError: false,
          textClear: false,
        });
    });

    it('should update offersAction by load offers', () => {
      state.offers = fackeOffersData;
      state.isOffersDataLoading = false;
      expect(offersData.reducer(state, { type: fetchOffersAction.fulfilled.type, payload: fackeOffersData }))
        .toEqual(state = {
          offers: fackeOffersData,
          isOffersDataLoading: false,
          isCurrentOfferLoading: true,
          currentOffer: null,
          currentReviews: [],
          offersNearby: [],
          reviewIsLoading: false,
          hasError: false,
          textClear: false,
        });
    });

    it('should update offersAction by rejected offers', () => {
      state.isOffersDataLoading = false;
      state.hasError = true;
      expect(offersData.reducer(state, { type: fetchOffersAction.rejected.type }))
        .toEqual(state = {
          offers: [],
          isOffersDataLoading: false,
          isCurrentOfferLoading: true,
          currentOffer: null,
          currentReviews: [],
          offersNearby: [],
          reviewIsLoading: false,
          hasError: true,
          textClear: false,
        });
    });
  });

  describe('loadCurrentOfferAction', () => {
    it('should update currentOfferAction by pending', () => {
      state.isCurrentOfferLoading = true;
      expect(offersData.reducer(state, { type: fetchCurrentOfferAction.pending.type }))
        .toEqual(state = {
          offers: [],
          isOffersDataLoading: false,
          isCurrentOfferLoading: true,
          currentOffer: null,
          currentReviews: [],
          offersNearby: [],
          reviewIsLoading: false,
          hasError: false,
          textClear: false,
        });
    });

    it('should update currentOfferAction by load offers', () => {
      state.currentOffer = fackeOfferData;
      state.isCurrentOfferLoading = false;
      expect(offersData.reducer(state, { type: fetchCurrentOfferAction.fulfilled.type, payload: fackeOfferData }))
        .toEqual(state = {
          offers: [],
          isOffersDataLoading: false,
          isCurrentOfferLoading: false,
          currentOffer: fackeOfferData,
          currentReviews: [],
          offersNearby: [],
          reviewIsLoading: false,
          hasError: false,
          textClear: false,
        });
    });

    it('should update currentOfferAction by rejected', () => {
      state.isCurrentOfferLoading = false;
      expect(offersData.reducer(state, { type: fetchCurrentOfferAction.rejected.type }))
        .toEqual(state = {
          offers: [],
          isOffersDataLoading: false,
          isCurrentOfferLoading: false,
          currentOffer: null,
          currentReviews: [],
          offersNearby: [],
          reviewIsLoading: false,
          hasError: false,
          textClear: false,
        });
    });
  });

  describe('loadOffersNearbyAction', () => {
    it('should update offersNearbyAction by load offers', () => {
      state.offersNearby = fackeOffersData;
      expect(offersData.reducer(state, { type: fetchOffersNearbyAction.fulfilled.type, payload: fackeOffersData }))
        .toEqual(state = {
          offers: [],
          isOffersDataLoading: false,
          isCurrentOfferLoading: true,
          currentOffer: null,
          currentReviews: [],
          offersNearby: fackeOffersData,
          reviewIsLoading: false,
          hasError: false,
          textClear: false,
        });
    });
  });

  describe('loadCurrentReviewsAction', () => {
    it('should update currentReviewsAction by load offers', () => {
      state.currentReviews = fakeReviewsData;
      expect(offersData.reducer(state, { type: fetchCurrentReviewsAction.fulfilled.type, payload: fakeReviewsData }))
        .toEqual(state = {
          offers: [],
          isOffersDataLoading: false,
          isCurrentOfferLoading: true,
          currentOffer: null,
          currentReviews: fakeReviewsData,
          offersNearby: [],
          reviewIsLoading: false,
          hasError: false,
          textClear: false,
        });
    });
  });

  describe('reviewsAction', () => {
    it('should update reviewAction by pending', () => {
      state.reviewIsLoading = true;
      state.textClear = false;
      expect(offersData.reducer(state, { type: reviewAction.pending.type }))
        .toEqual(state = {
          offers: [],
          isOffersDataLoading: false,
          isCurrentOfferLoading: true,
          currentOffer: null,
          currentReviews: [],
          offersNearby: [],
          reviewIsLoading: true,
          hasError: false,
          textClear: false,
        });
    });

    it('should update reviewAction by fulfilled', () => {
      state.currentReviews = fakeReviewsData;
      state.textClear = true;
      state.reviewIsLoading = false;
      expect(offersData.reducer(state, { type: reviewAction.fulfilled.type, payload: fakeReviewsData }))
        .toEqual(state = {
          offers: [],
          isOffersDataLoading: false,
          isCurrentOfferLoading: true,
          currentOffer: null,
          currentReviews: fakeReviewsData,
          offersNearby: [],
          reviewIsLoading: false,
          hasError: false,
          textClear: true,
        });
    });

    it('should update reviewAction by rejected', () => {
      state.reviewIsLoading = false;
      expect(offersData.reducer(state, { type: reviewAction.rejected.type }))
        .toEqual(state = {
          offers: [],
          isOffersDataLoading: false,
          isCurrentOfferLoading: true,
          currentOffer: null,
          currentReviews: [],
          offersNearby: [],
          reviewIsLoading: false,
          hasError: false,
          textClear: false,
        });
    });
  });
});
