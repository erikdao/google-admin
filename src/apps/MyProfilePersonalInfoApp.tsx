import React from 'react';

export function MyProfilePersonalInfoApp(): JSX.Element {
  return (
    <div className="flex-1 flex-grow h-full flex flex-col overflow-x-hidden overflow-y-auto p-6 bg-white">
      <div className="flex-1 flex flex-col items-center max-w-7xl md:max-w-4xl mx-auto">
        <div className="flex-0 flex flex-col items-center justify-center p-4 space-y-4 pt-8 w-full">
          <h1 className="font-normal text-3xl text-gray-700">Personal info</h1>
          <p className="text-base text-gray-500">Basic info, like your name and photo, that you use on Google services</p>
        </div>

        <div className="p-4 text-sm text-gray-500 mt-10">
          Only you can see your settings. You might also want to review your settings
          for Maps, Search, or whichever Google services you use most.
          Google keeps your data private, safe, and secure. <a href="/" className="text-red-700">Learn more</a>
        </div>
      </div>
    </div>
  );
}
