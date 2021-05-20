import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login, SignUp } from './pages';
import HomePage from './pages/HomePage';

function Application(): JSX.Element {
  return (
    <div className="w-screen h-screen overflow-hidden bg-bgray-50">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Application;
