import React from 'react';
import ReactDOM from 'react-dom';
import Application from './Application';
import { FirebaseProvider } from './contexts';
import AuthProvider from './contexts/AuthContext';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <FirebaseProvider>
      <AuthProvider>
        <Application />
      </AuthProvider>
    </FirebaseProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
