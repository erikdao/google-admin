/* eslint-disable react/jsx-boolean-value */
import React, { useState } from 'react';
import { useLocation } from 'react-router';
import { AppContent } from 'src/components/common/AppContent';
import { LeftSideBar } from 'src/components/common/LeftSidebar';
import { Header } from '../components/common/Header';

export default function HomePage(): JSX.Element {
  return (
    <div className="w-full h-full flex flex-col items-stretch">
      <Header />
      {/* 2-column wrapper */}
      <div className="w-full h-full overflow-hidden flex items-center">
        <LeftSideBar />
        <AppContent />
      </div>
    </div>
  );
}
