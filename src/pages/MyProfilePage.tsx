import React from 'react';
import { Outlet } from 'react-router';
import { Header } from 'src/components/common/Header';
import { MyProfileSidebar } from 'src/components/myprofile/MyProfileSidebar';

export default function MyProfilePage(): JSX.Element {
  return (
    <div className="w-full h-full flex flex-col items-stretch">
      <Header />
      {/* 2-column wrapper */}
      <div className="w-full h-full overflow-hidden flex items-center">
        <MyProfileSidebar />
        <Outlet />
      </div>
    </div>
  );
}
