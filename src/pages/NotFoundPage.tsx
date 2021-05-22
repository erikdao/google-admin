import React from 'react';
import { Header } from '../components/common/Header';
import FixingBugs from '../assets/images/fixing_bugs.svg';

export default function NotFoundPage(): JSX.Element {
  return (
    <div className="w-full h-full flex flex-col items-stretch">
      <Header />
      {/* 2-column wrapper */}
      <div className="w-full h-full overflow-hidden flex items-center justify-center">
        <div className="mx-auto max-w-lg flex flex-col p-4">
          <img src={FixingBugs} alt="" className="h-40 w-auto mb-10" />
          <h1 className="font-light text-xl">
            <span className="text-red-700">The request URL was not found on this server. </span>
            <span className="text-gray-400">That&apos;s all we know</span>
          </h1>
        </div>
      </div>
    </div>
  );
}
