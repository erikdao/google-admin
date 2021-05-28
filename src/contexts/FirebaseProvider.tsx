import firebase from 'firebase/app';
import React, { createContext } from 'react';
import { firebaseConfig } from 'src/config';

export interface IFirebaseContext {
  firebase: firebase.app.App;
}

export const FirebaseContext = createContext({} as IFirebaseContext);

const initFirebase = () => {
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
};

// eslint-disable-next-line
export const FirebaseProvider = ({ children }: any) => {
  initFirebase();
  return (
    <FirebaseContext.Provider value={{ firebase: firebase.app() } as IFirebaseContext}>
      {children}
    </FirebaseContext.Provider>
  );
};
