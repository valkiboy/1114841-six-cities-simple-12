export type ApartmentType = 'Apartment' | 'Private Room' | 'House' | 'Hotel';

export type Host = {
  avatarUrl: string;
  name: string;
  isPro: boolean;
  id: number;
}

export type Reviews = {
  id: number;
  src: string;
  name: string;
  score: number;
  data: string;
  text: string;
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
