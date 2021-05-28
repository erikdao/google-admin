/* eslint-disable react/jsx-props-no-spreading */
import { i18n } from '@lingui/core';
import { I18nProvider } from '@lingui/react';
import {
  FirebaseAuthConsumer, FirebaseAuthProvider,
} from '@react-firebase/auth';
import firebase from 'firebase/app';
import 'firebase/auth';
import React, { ReactNode, useState } from 'react';
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
} from 'react-router-dom';
import { messages } from 'src/locales/en/contents.js';
import { DirectoryGroupApp, DirectoryUserApp, MyProfilePersonalInfoApp } from './apps';
import { MyProfileDataPersonalizationApp } from './apps/MyProfileDataPersonalizationApp';
import { MyProfileHomeApp } from './apps/MyProfileHomeApp';
import { firebaseConfig } from './config';
import { AuthContext } from './contexts';
import { Login, SignUp } from './pages';
import DirectoryPage from './pages/DirectoryPage';
import HomePage from './pages/HomePage';
import MyProfilePage from './pages/MyProfilePage';
import NotFoundPage from './pages/NotFoundPage';

i18n.load('vi', messages);
i18n.activate('vi');

function Application(): JSX.Element {
  const [authUser, setAuthUser] = useState(null);

  const authRoutes = (): ReactNode => (
    <AuthContext.Provider value={authUser}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="directory" element={<DirectoryPage />}>
          <Route path="users" element={<DirectoryUserApp />} />
          <Route path="groups" element={<DirectoryGroupApp />} />
          <Route path="units" element={<DirectoryUserApp />} />
          <Route path="calendarresources" element={<DirectoryUserApp />} />
          <Route path="appsettings" element={<DirectoryUserApp />} />
        </Route>
        <Route path="my-profile" element={<MyProfilePage />}>
          <Route path="/" element={<MyProfileHomeApp />} />
          <Route path="personal-information" element={<MyProfilePersonalInfoApp />} />
          <Route path="data-and-personalization" element={<MyProfileDataPersonalizationApp />} />
        </Route>
        <Route path="auth/*" element={<Navigate to="/" />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </AuthContext.Provider>
  );

  const unauthRoutes = (): ReactNode => (
    <Routes>
      <Route path="/" element={<Navigate to="/auth/login" />} />
      <Route path="/auth/login" element={<Login />} />
      <Route path="/auth/signup" element={<SignUp />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );

  return (
    <I18nProvider i18n={i18n}>
      <FirebaseAuthProvider {...firebaseConfig} firebase={firebase}>
        <div className="w-screen h-screen overflow-hidden bg-bgray-50">
          <BrowserRouter>
            <FirebaseAuthConsumer>
              {({ isSignedIn, user }) => {
                if (isSignedIn === true) {
                  setAuthUser(user);
                  return authRoutes();
                }
                return unauthRoutes();
              }}
            </FirebaseAuthConsumer>
          </BrowserRouter>
        </div>
      </FirebaseAuthProvider>
    </I18nProvider>
  );
}

export default Application;
