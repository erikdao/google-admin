import { i18n } from '@lingui/core';
import { I18nProvider } from '@lingui/react';
import React, { useEffect, useState } from 'react';
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
} from 'react-router-dom';
import { messages } from 'src/locales/en/contents.js';
import { DirectoryGroupApp, DirectoryUserApp } from './apps';
import { UserContext } from './contexts';
import { Login, SignUp } from './pages';
import DirectoryPage from './pages/DirectoryPage';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import { isAuthenticated } from './services/auth';
import { TUser } from './types';

const sampleUser: TUser = {
  email: 'cuong@neuraltalks.io',
  firstName: 'Cuong',
  lastName: 'Dao',
  profileImage: 'https://avatars.githubusercontent.com/u/26970731',
};

function Application(): JSX.Element {
  const [user, setUser] = useState<TUser>(sampleUser);

  const logout = () => setUser({ email: null });

  useEffect(() => {
    // eslint-disable-next-line
    console.log('user', user);
  }, [user]);

  useEffect(() => {
    i18n.load('en', messages);
    i18n.activate('en');
  }, []);

  return (
    <I18nProvider i18n={i18n}>
      <UserContext.Provider value={{ user, logout }}>
        <div className="w-screen h-screen overflow-hidden bg-bgray-50">
          <BrowserRouter>
            {isAuthenticated(user) ? (
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="directory" element={<DirectoryPage />}>
                  <Route path="users" element={<DirectoryUserApp />} />
                  <Route path="groups" element={<DirectoryGroupApp />} />
                  <Route path="units" element={<DirectoryUserApp />} />
                  <Route path="calendarresources" element={<DirectoryUserApp />} />
                  <Route path="appsettings" element={<DirectoryUserApp />} />
                </Route>
                <Route path="/auth/*" element={<Navigate to="/" />} />
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            ) : (
              <Routes>
                <Route path="/" element={<Navigate to="/auth/login" />} />
                <Route path="/auth/login" element={<Login />} />
                <Route path="/auth/signup" element={<SignUp />} />
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            )}
          </BrowserRouter>
        </div>
      </UserContext.Provider>
    </I18nProvider>
  );
}

export default Application;
