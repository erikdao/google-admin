/* eslint-disable react/jsx-boolean-value */
import React, { useState } from 'react';
import { useLocation } from 'react-router';
import { AppContent } from 'src/components/common/AppContent';
import { LeftSideBar } from 'src/components/common/LeftSidebar';
import { DirectorySideBar } from 'src/components/directory/DirectorySideBar';
import { ReportSidebar } from 'src/components/reports/ReportSidebar';
import { Header } from '../components/common/Header';

export default function HomePage(): JSX.Element {
  const location = useLocation();

  return (
    <div className="w-full h-full flex flex-col items-stretch">
      <Header />
      {/* 2-column wrapper */}
      <div className="w-full h-full overflow-hidden flex items-center">
        {location.pathname.includes('reports') && <ReportSidebar />}
        {location.pathname.includes('directory') && <DirectorySideBar />}
        {location.pathname === '/' && <LeftSideBar />}
        <AppContent />
      </div>
    </div>
  );
}
