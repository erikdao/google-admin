import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { DirectoryGroupApp, DirectoryUserApp } from './app';
import { Login, SignUp } from './pages';
import DirectoryPage from './pages/DirectoryPage';
import HomePage from './pages/HomePage';

function Application(): JSX.Element {
  return (
    <div className="w-screen h-screen overflow-hidden bg-bgray-50">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="directory" element={<DirectoryPage />}>
            <Route path="users" element={<DirectoryUserApp />} />
            <Route path="groups" element={<DirectoryGroupApp />} />
            <Route path="units" element={<DirectoryUserApp />} />
            <Route path="calendarresources" element={<DirectoryUserApp />} />
            <Route path="appsettings" element={<DirectoryUserApp />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          {/* <Route path="*" element={<HomePage />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Application;
