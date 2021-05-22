/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext } from 'react';
import { TUser } from 'src/types';

const user: TUser = {
  email: '',
};

export const UserContext = createContext({
  user,
  logout: () => {},
});
