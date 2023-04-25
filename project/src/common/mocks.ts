import { datatype, helpers, image, internet, lorem } from 'faker';
import { UserData } from '../types/user-data';
import { Cities } from './const';
import { Offer, Offers } from '../types/offer';
import { NewReview, Review } from '../types/review';

export const makeFackeUserData = (): UserData => ({
  id: datatype.number(),
  email: internet.email(),
  token: datatype.string(),
  avatarUrl: internet.avatar(),
  isPro: datatype.boolean(),
  name: internet.userName(),
});

export const makeFackeOfferData = (): Offer => ({
  images: datatype.array(6).map(() => image.imageUrl(640, 480, 'nature', true)),
  isPremium: datatype.boolean(),
  price: datatype.number(),
  title: datatype.string(),
  description: datatype.string(),
  type: 'Apartment',
  rating: datatype.number(5),
  bedrooms: datatype.number(10),
  maxAdults: datatype.number(10),
  goods: datatype.array(10).map((e) => String(e)),
  host: {
    avatarUrl: internet.avatar(),
    name: internet.userName(),
    isPro: datatype.boolean(),
    id: datatype.number(),
  },
  id: datatype.number(),
  previewImage: image.imageUrl(640, 480, 'cat' , true),
  location: {
    latitude: datatype.float(),
    longitude: datatype.float(),
    zoom: helpers.randomize([10, 13, 16]),
  },
  city: {
    location: {
      latitude: datatype.float(),
      longitude: datatype.float(),
      zoom: helpers.randomize([10, 13, 16]),
    },
    name: helpers.randomize(Object.values(Cities)),
  },
});

export const makeFackeOffersData = (): Offers => (datatype.array(10).map(() => makeFackeOfferData()));

export const makeFackeReview = (): Review => ({
  comment: datatype.string(),
  date: datatype.string(),
  id: datatype.number(),
  rating: datatype.float(5),
  user: {
    avatarUrl: internet.avatar(),
    id: datatype.number(),
    isPro: datatype.boolean(),
    name: internet.userName(),
  },
});

export const makeFackeReviews = (): Review[] => (datatype.array(10).map(() => makeFackeReview()));

export const makeFakeNewReview = (): NewReview => ({
  offerId: datatype.number(),
  comment: lorem.paragraph(1),
  rating: datatype.number(5),
});

export const makeFakeId = (): number => (datatype.number());
