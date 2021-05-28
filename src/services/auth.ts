import firebase from 'firebase/app';
import 'firebase/auth';
import { IAuthUser } from 'src/types/auth';

/**
 * Invoke Firebase SDK to create a new user
 * @param email string
 * @param password
 */
export const createUser = async (email: string, password: string): Promise<void> => {
  const auth = firebase.auth();
  await auth.createUserWithEmailAndPassword(email, password);
};

export const signOut = async (reload = true): Promise<void> => {
  const auth = firebase.auth();
  await auth.signOut();
  if (reload) {
    window.location.href = '/';
    window.location.reload();
  }
};

export const signIn = async (email: string, password: string): Promise<firebase.User | null> => {
  const auth = firebase.auth();
  const cred = await auth.signInWithEmailAndPassword(email, password);
  return cred.user;
};

export const convertFirebaseUserToAuthUser = (user: firebase.User | null): IAuthUser => {
  if (user === null) {
    return {} as IAuthUser;
  }
  const authUser: IAuthUser = {
    email: user.email || '',
    emailVerified: user.emailVerified,
    displayName: user.displayName || '',
    photoURL: user.photoURL || '',
  };
  return authUser;
};
