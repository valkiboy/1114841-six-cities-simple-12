import { Offer } from '../types/offer';

export const offers: Offer[] = [
  {
    'id': 1,
    'images': ['img/apartment-01.jpg', 'img/apartment-01.jpg', 'img/apartment-02.jpg', 'img/apartment-02.jpg', 'img/apartment-03.jpg', 'img/apartment-03.jpg'],
    'isPremium': true,
    'price': 120,
    'title': 'Beautiful & luxurious apartment at great location',
    'description': 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
    'type': 'Apartment',
    'rating': 4.2,
    'bedrooms': 4,
    'maxAdults': 4,
    'goods': ['Wi-Fi',
      'Washing machine',
      'Towels',
      'Heating',
      'Coffee machine',
      'Kitchen'
    ],
    'host': {
      'avatarUrl': 'img/avatar-angelina.jpg',
      'id': 4,
      'isPro': true,
      'name': 'Angelina'
    },
    'previewImage': 'img/apartment-01.jpg',
    'location': {
      'latitude': 52.3909553943508,
      'longitude': 4.85309666406198,
      'zoom': 8
    },
    'city': {
      'location': {
        'latitude': 52.370216,
        'longitude': 4.895168,
        'zoom': 10
      },
      'name': 'Amsterdam'
    },
  },
  {
    'id': 2,
    'images': ['img/room.jpg', 'img/room.jpg', 'img/apartment-01.jpg', 'img/apartment-02.jpg', 'img/apartment-03.jpg', 'img/apartment-03.jpg'],
    'isPremium': false,
    'price': 80,
    'title': 'Wood and stone place',
    'description': 'An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.',
    'type': 'Private Room',
    'rating': 2.5,
    'bedrooms': 1,
    'maxAdults': 2,
    'goods': ['Wi-Fi',
      'Washing machine',
      'Heating',
      'Coffee machine',
      'Cabel TV'
    ],
    'host': {
      'avatarUrl': 'img/avatar-angelina.jpg',
      'id': 4,
      'isPro': true,
      'name': 'Marina'
    },
    'previewImage': 'img/room.jpg',
    'location': {
      'latitude': 52.3609553943508,
      'longitude': 4.85309666406198,
      'zoom': 8
    },
    'city': {
      'location': {
        'latitude': 52.370216,
        'longitude': 4.895168,
        'zoom': 10
      },
      'name': 'Amsterdam'
    },
  },
  {
    'id': 3,
    'images': ['img/apartment-02.jpg', 'img/apartment-02.jpg', 'img/apartment-01.jpg', 'img/apartment-03.jpg', 'img/apartment-01.jpg', 'img/room.jpg'],
    'isPremium': false,
    'price': 132,
    'title': 'Canal View Prinsengracht',
    'description': 'An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.',
    'type': 'Apartment',
    'rating': 4.8,
    'bedrooms': 3,
    'maxAdults': 7,
    'goods': ['Wi-Fi',
      'Towels',
      'Heating',
      'Baby seat',
      'Kitchen',
      'Dishwasher',
      'Cabel TV'
    ],
    'host': {
      'avatarUrl': 'img/avatar-angelina.jpg',
      'id': 3,
      'isPro': true,
      'name': 'Olga'
    },
    'previewImage': 'img/apartment-02.jpg',
    'location': {
      'latitude': 52.3909553943508,
      'longitude': 4.929309666406198,
      'zoom': 8
    },
    'city': {
      'location': {
        'latitude': 52.370216,
        'longitude': 4.895168,
        'zoom': 10
      },
      'name': 'Amsterdam'
    },
  },
  {
    'id': 4,
    'images': ['img/apartment-03.jpg', 'img/apartment-03.jpg', 'img/apartment-02.jpg', 'img/apartment-01.jpg', 'img/apartment-02.jpg', 'img/room.jpg'],
    'isPremium': true,
    'price': 180,
    'title': 'Nice, cozy, warm big bed apartment',
    'description': 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
    'type': 'Apartment',
    'rating': 5,
    'bedrooms': 8,
    'maxAdults': 15,
    'goods': ['Wi-Fi',
      'Washing machine',
      'Towels',
      'Heating',
      'Coffee machine',
      'Baby seat',
      'Kitchen',
      'Dishwasher',
      'Cabel TV',
      'Fridge'
    ],
    'host': {
      'avatarUrl': 'img/avatar-angelina.jpg',
      'id': 4,
      'isPro': true,
      'name': 'Natasha'
    },
    'previewImage': 'img/apartment-03.jpg',
    'location': {
      'latitude': 52.3809553943508,
      'longitude': 4.939309666406198,
      'zoom': 8
    },
    'city': {
      'location': {
        'latitude': 52.370216,
        'longitude': 4.895168,
        'zoom': 10
      },
      'name': 'Amsterdam'
    },
  },
];
