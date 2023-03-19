export type ApartmentType = 'Apartment' | 'Private Room' | 'House' | 'Hotel';

export type Host = {
  avatarUrl: string;
  name: string;
  isPro: boolean;
  id: number;
}

export type Reviews = {
  comment: string;
  date: string;
  id: number;
  rating: number;
  user: {
    avatarUrl: string;
    id: number;
    isPro: boolean;
    name: string;
  };
}

export type City = {
  location: {
    latitude: number;
    longitude: number;
    zoom: number;
  };
  name: string;
}

export type Offer = {
  images: string[];
  isPremium: boolean;
  price: number;
  title: string;
  description: string;
  type: ApartmentType;
  rating: number;
  bedrooms: number;
  maxAdults: number;
  goods: string[];
  host: Host;
  id: number;
  previewImage: string;
  location: {
    latitude: number;
    longitude: number;
    zoom: number;
  };
  city: City;
}
