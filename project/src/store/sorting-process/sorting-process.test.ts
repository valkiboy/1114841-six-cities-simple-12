import { DEFAULT_CITY, DEFAULT_SORT_TYPE, Cities, SortTypes } from '../../common/const';
import { SortingProcess } from '../../types/state';
import { changeCity, changeSort, sortingProcess } from './sorting-process';

describe('sortingProcess', () => {
  let state: SortingProcess;

  beforeEach(() => {
    state = {city: DEFAULT_CITY, sorting: DEFAULT_SORT_TYPE};
  });

  it('without additional parameters should return initial state', () => {
    expect(sortingProcess.reducer(void 0, { type: 'UNKNOWN_ACTION' }))
      .toEqual(state);
  });

  it('change city location', () => {
    expect(sortingProcess.reducer(state, changeCity(Cities.Brussels)))
      .toEqual({ city: Cities.Brussels, sorting: DEFAULT_SORT_TYPE });
  });

  it('change sortigType', () => {
    expect(sortingProcess.reducer(state, changeSort(SortTypes.LowToHigh)))
      .toEqual({ city: DEFAULT_CITY, sorting: SortTypes.LowToHigh });
  });

});
