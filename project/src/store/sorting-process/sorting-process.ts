import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import { DEFAULT_CITY, DEFAULT_SORT_TYPE, NameSpace } from '../../common/const';
import { SortingProcess } from '../../types/state';

const initialState: SortingProcess = {
  city: DEFAULT_CITY,
  sorting: DEFAULT_SORT_TYPE,
};

export const sortingProcess = createSlice({
  name: NameSpace.Sorting,
  initialState,
  reducers: {
    changeCity: (state, action: PayloadAction<string>) => {
      state.city = action.payload;
    },
    changeSort: (state, action: PayloadAction<string>) => {
      state.sorting = action.payload;
    },
  },
});

export const {changeCity, changeSort} = sortingProcess.actions;
