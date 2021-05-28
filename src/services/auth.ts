import firebase from 'firebase/app';
import 'firebase/auth';

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
