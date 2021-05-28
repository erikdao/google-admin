/* eslint-disable prefer-destructuring */
import React, {
  createContext, useContext, useEffect, useState,
} from 'react';
import { IAuthUser } from 'src/types/auth';
import { FirebaseContext } from './FirebaseProvider';

export interface IAuthContext {
  authUser: IAuthUser;
  setAuthUser: (user: IAuthUser) => void;
  logout: () => Promise<void>;
}

export const AuthContext = createContext({} as IAuthContext);

// eslint-disable-next-line
function AuthProvider({ children }: any) {
  const { firebase } = useContext(FirebaseContext);
  const currentUser = firebase.auth().currentUser;
  const [authUser, setAuthUser] = useState({} as IAuthUser);

  const logout = async (): Promise<void> => {
    await firebase.auth().signOut();
    window.location.href = '/';
    window.location.reload();
  };

  useEffect(() => {
    const user: IAuthUser = {
      email: currentUser?.email || '',
      emailVerified: currentUser?.emailVerified || false,
      displayName: currentUser?.displayName || '',
      photoURL: currentUser?.photoURL || '',
    };
    setAuthUser(user);
  }, [currentUser]);

  return (
    <>
      <AuthContext.Provider value={{ authUser, setAuthUser, logout }}>
        {children}
      </AuthContext.Provider>
    </>
  );
}

export default AuthProvider;
