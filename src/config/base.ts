/**
 * Base config
 */
export type TFirebaseConfig = {
  appId: string;
  apiKey: string;
  projectId: string;
  authDomain: string;
  databaseURL: string;
  storageBucket?: string;
  messagingSenderId?: string;
  measurementId?: string;
};

export const firebaseConfig: TFirebaseConfig = {
  apiKey: 'AIzaSyDjgFsz4aFlQ1nRurhxYuW3kDNUM7lhqts',
  authDomain: 'neuraltalks-gadmin-dev.firebaseapp.com',
  projectId: 'neuraltalks-gadmin-dev',
  storageBucket: 'neuraltalks-gadmin-dev.appspot.com',
  messagingSenderId: '627958509301',
  appId: '1:627958509301:web:f7e073444e795686a6dfbc',
  measurementId: 'G-7BZQHK2VNK',
  databaseURL: '',
};
