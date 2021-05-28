/* eslint-disable prefer-destructuring */
import React, {
  createContext, useContext, useEffect, useState,
} from 'react';
import { convertFirebaseUserToAuthUser } from 'src/services/auth';
import { IAuthUser } from 'src/types/auth';
import { FirebaseContext } from './FirebaseProvider';

export interface IAuthContext {
  authUser: IAuthUser;
  loadingAuthUser: boolean;
  setAuthUser: (user: IAuthUser) => void;
  logout: () => Promise<void>;
}

export const AuthContext = createContext({} as IAuthContext);

// eslint-disable-next-line
function AuthProvider({ children }: any) {
  const { firebase } = useContext(FirebaseContext);
  const [loadingAuthUser, setLoadingAuthUser] = useState(true);
  const [authUser, setAuthUser] = useState<IAuthUser>({} as IAuthUser);

  const logout = async (): Promise<void> => {
    await firebase.auth().signOut();
    window.location.href = '/';
    window.location.reload();
  };

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setAuthUser(convertFirebaseUserToAuthUser(user));
      setLoadingAuthUser(false);
    });
  }, [firebase]);

  return (
    <>
      <AuthContext.Provider value={{
        authUser, loadingAuthUser, setAuthUser, logout,
      }}
      >
        {children}
      </AuthContext.Provider>
    </>
  );
}

export default AuthProvider;
