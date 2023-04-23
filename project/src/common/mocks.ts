import { datatype, internet } from 'faker';
import { UserData } from '../types/user-data';

export const makeFackeUserData = (): UserData => ({
  id: datatype.number(),
  email: internet.email(),
  token: datatype.string(),
  avatarUrl: internet.avatar(),
  isPro: datatype.boolean(),
  name: internet.userName(),
});
