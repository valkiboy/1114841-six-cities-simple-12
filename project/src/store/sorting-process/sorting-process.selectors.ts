import { NameSpace, SortTypes } from '../../common/const';
import { Offer } from '../../types/offer';
import { State } from '../../types/state';

export const getCity = (state: State): string => state[NameSpace.Sorting].city;

export const getTypeSorting = (state: State): string => state[NameSpace.Sorting].sorting;

export const getSortingOffers = (item: string, items: Offer[]) => {
  switch (item) {
    case SortTypes.LowToHigh:
      return [...items].sort((a, b) => a.price - b.price);
    case SortTypes.HighToLow:
      return [...items].sort((b, a) => a.price - b.price);
    case SortTypes.Rating:
      return [...items].sort((b, a) => a.rating - b.rating);
  }
  return items;
};
