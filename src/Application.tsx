import React, { useEffect, useState } from 'react';
import {
  BrowserRouter,
  Navigate,
  Routes,
  Route,
} from 'react-router-dom';
import { DirectoryGroupApp, DirectoryUserApp } from './apps';
import { Login, SignUp } from './pages';
import DirectoryPage from './pages/DirectoryPage';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import { TUser } from './types';
import { UserContext } from './contexts';
import { isAuthenticated } from './services/auth';

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

  return (
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
  );
}

export default Application;
