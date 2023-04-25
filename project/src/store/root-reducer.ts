import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../common/const';
import { offersData } from './offers-data/offers-data';
import { sortingProcess } from './sorting-process/sorting-process';
import { userProcess } from './user-process/user-process';

export const rootReducer = combineReducers({
  [NameSpace.Data]: offersData.reducer,
  [NameSpace.Sorting]: sortingProcess.reducer,
  [NameSpace.User]: userProcess.reducer,
});
