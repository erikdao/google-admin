import React from 'react';
import { Outlet } from 'react-router';
import { Header } from 'src/components/common/Header';
import { DirectorySideBar } from 'src/components/directory/DirectorySideBar';

export default function DirectoryPage(): JSX.Element {
  return (
    <div className="w-full h-full flex flex-col items-stretch">
      <Header />
      {/* 2-column wrapper */}
      <div className="w-full h-full overflow-hidden flex items-center">
        <DirectorySideBar />
        <Outlet />
      </div>
    </div>
  );
}
