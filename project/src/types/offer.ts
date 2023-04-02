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
  id: OfferId;
  previewImage: string;
  location: {
    latitude: number;
    longitude: number;
    zoom: number;
  };
  city: City;
}

export type City = {
  location: {
    latitude: number;
    longitude: number;
    zoom: number;
  };
  name: string;
}

export type Host = {
  avatarUrl: string;
  name: string;
  isPro: boolean;
  id: number;
}

export type ApartmentType = 'Apartment' | 'Private Room' | 'House' | 'Hotel';
export type OfferId = number;
export type Offers = Offer[];
