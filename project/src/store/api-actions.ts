import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state.js';
import { Offer, OfferId } from '../types/offer.js';
import { Review } from '../types/review.js';
import { loadOffers, loadCurrentOffer, requireAuthorization, setOffersDataLoadingStatus, redirectToRoute, loadOffersNearby, setCurrentOfferLoadingStatus, loadCurrentReviews, loadUserData, setReviewIsLoading } from './action';
import { saveToken, dropToken } from '../services/token';
import { APIRoute, AppRoute, AuthorizationStatus } from '../common/const';
import { AuthData } from '../types/auth-data';
import { UserData } from '../types/user-data';
import { UserReview } from '../types/user-review.js';
import { toast } from 'react-toastify';


export const fetchOffersAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
>(
  'data/fetchOffers',
  async (_arg, { dispatch, extra: api }) => {
    dispatch(setOffersDataLoadingStatus(true));
    const { data } = await api.get<Offer[]>(APIRoute.Offers);
    dispatch(loadOffers(data));
    dispatch(setOffersDataLoadingStatus(false));
  },
);

export const fetchCurrentOfferAction = createAsyncThunk<void, OfferId, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
>(
  'data/loadCurrentOffer',
  async (offerId, { dispatch, extra: api }) => {
    try {
      dispatch(setCurrentOfferLoadingStatus(true));
      const { data } = await api.get<Offer>(`${APIRoute.Offers}/${offerId}`);
      dispatch(loadCurrentOffer(data));
      dispatch(setCurrentOfferLoadingStatus(false));
    } catch {
      dispatch(redirectToRoute(AppRoute.PageNotFound));
    }
  },
);

export const fetchOffersNearbyAction = createAsyncThunk<void, OfferId, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
>(
  'data/loadOffersNearby',
  async (offerId, { dispatch, extra: api }) => {
    try {
      const { data } = await api.get<Offer[]>(`${APIRoute.Offers}/${offerId}/${'nearby'}`);
      dispatch(loadOffersNearby(data));
    } catch {
      dispatch(redirectToRoute(AppRoute.PageNotFound));
    }
  },
);

export const fetchCurrentReviewsAction = createAsyncThunk<void, OfferId, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
>(
  'data/loadCurrentReviews',
  async (offerId, { dispatch, extra: api }) => {
    try {
      const { data } = await api.get<Review[]>(`${APIRoute.Reviews}/${offerId}`);
      dispatch(loadCurrentReviews(data));
    } catch {
      dispatch(redirectToRoute(AppRoute.PageNotFound));
    }
  },
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
>(
  'user/checkAuth',
  async (_arg, { dispatch, extra: api }) => {
    try {
      await api.get(APIRoute.Login);
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
    } catch {
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
>(
  'user/login',
  async ({ login: email, password }, { dispatch, extra: api }) => {
    const { data } = await api.post<UserData>(APIRoute.Login, { email, password });
    saveToken(data.token);
    dispatch(loadUserData(data));
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
    dispatch(redirectToRoute(AppRoute.Root));
  },
);

export const reviewAction = createAsyncThunk<void, UserReview, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
>(
  'user/setNewReview',
  async ({ id, comment, rating }, { dispatch, extra: api }) => {
    try {
      dispatch(setReviewIsLoading(true));
      const { data } = await api.post<Review[]>(`${APIRoute.Reviews}/${id}`, { comment, rating });
      dispatch(setReviewIsLoading(false));
      dispatch(loadCurrentReviews(data));
    } catch {
      dispatch(setReviewIsLoading(false));
      toast.warn('Отослать обзор не получилось, попробуйте позже');
    }
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
>(
  'user/logout',
  async (_arg, { dispatch, extra: api }) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
  },
);
