/* eslint-disable react/jsx-boolean-value */
import React from 'react';
import { AppContent } from 'src/components/common/AppContent';
import { LeftSideBar } from 'src/components/common/LeftSidebar';
import { PageTitle } from 'src/components/common/PageTitle';
import { Header } from '../components/common/Header';

export default function HomePage(): JSX.Element {
  return (
    <div className="w-full h-full flex flex-col items-stretch">
      <PageTitle title="Home" />
      <Header />
      {/* 2-column wrapper */}
      <div className="w-full h-full overflow-hidden flex items-center">
        <LeftSideBar />
        <AppContent />
      </div>
    </div>
  );
}
