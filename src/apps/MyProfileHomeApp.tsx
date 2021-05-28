import React, { useContext } from 'react';
import * as contexts from 'src/contexts';
import DataIcon from 'src/assets/icons/dataandpersonalization_icon_96x96.png';
import SecurityIcon from 'src/assets/icons/securitycheckup_green_96x96.png';
import StorageIcon from 'src/assets/icons/googleonestorage_spot_72x72.png';
import PrivacyIcon from 'src/assets/icons/privacycheckup_initial_active_96x96.png';

const dumbUser = {
  photoURL: '',
  displayName: null,
};

export function MyProfileHomeApp(): JSX.Element {
  const authUser = useContext(contexts.AuthContext) || dumbUser;

  return (
    <div className="flex-1 flex-grow h-full flex flex-col overflow-x-hidden overflow-y-auto p-6 bg-white">
      <div className="flex-1 flex flex-col items-center max-w-7xl md:max-w-4xl mx-auto">
        <div className="flex-0 flex flex-col items-center justify-center p-4 space-y-4 pt-8 w-full">
          <img src={authUser.photoURL} alt="" className="h-24 w-24 bg-gray-100 border-4 border-gray-200 rounded-full" />
          <h1 className="font-normal text-3xl text-gray-700">Welcome, {authUser.displayName}</h1>
          <p className="text-base text-gray-500">Manage your info, privacy, and security to make Google work better for you. <a href="/" className="text-red-700">Learn more</a></p>
        </div>

        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 w-full text-sm">
          <li className="col-span-1 bg-white rounded-lg divide-y divide-gray-200 border border-gray-200 flex flex-col items-stretch">
            <div className="p-4 flex items-start flex-grow flex-shrink-0">
              <div className="flex flex-col flex-grow mr-4">
                <h3 className="text-xl">Privacy &amp; personalization</h3>
                <p className="text-sm text-gray-500 wrap mt-2">See the data in your Google Account and choose what activity is saved to personalize your Google experience</p>
              </div>
              <div className="flex-shrink-0 flex-grow-0 flex items-center justify-end">
                <img src={DataIcon} className="h-22 w-22" alt="Data & Personalization" />
              </div>
            </div>
            <div className="p-4 block text-blue-500 text-left hover:bg-gray-100 cursor-pointer flex-grow-0 flex-shrink-0">
              Manage data &amp; your personalizations
            </div>
          </li>

          <li className="col-span-1 bg-white rounded-lg divide-y divide-gray-200 border border-gray-200 flex flex-col items-stretch">
            <div className="p-4 flex items-start flex-grow flex-shrink-0">
              <div className="flex flex-col flex-grow mr-4">
                <h3 className="text-xl">We keep your account protected</h3>
                <p className="text-sm text-gray-500 wrap mt-2">The Security Checkup gives you personalized recommendations to secure your account</p>
              </div>
              <div className="flex-shrink-0 flex-grow-0 flex items-center justify-end">
                <img src={SecurityIcon} className="h-22 w-22" alt="Data & Personalization" />
              </div>
            </div>
            <div className="p-4 block text-blue-500 text-left hover:bg-gray-100 cursor-pointer flex-grow-0 flex-shrink-0">
              Get started
            </div>
          </li>

          <li className="col-span-1 bg-white rounded-lg divide-y divide-gray-200 border border-gray-200 flex flex-col items-stretch">
            <div className="p-4 flex items-start flex-grow flex-shrink-0">
              <div className="flex flex-col flex-grow mr-4">
                <h3 className="text-xl">Account storage</h3>
                <p className="text-sm text-gray-500 wrap mt-2">Your account storage is shared across Google services, like Drive, Gmail, and Photos</p>
              </div>
              <div className="flex-shrink-0 flex-grow-0 flex items-center justify-end">
                <img src={StorageIcon} className="h-22 w-22" alt="Data & Personalization" />
              </div>
            </div>
            <div className="p-4 block text-blue-500 text-left hover:bg-gray-100 cursor-pointer flex-grow-0 flex-shrink-0">
              Manage storage
            </div>
          </li>

          <li className="col-span-1 bg-white rounded-lg divide-y divide-gray-200 border border-gray-200 flex flex-col items-stretch">
            <div className="p-4 flex items-start flex-grow flex-shrink-0">
              <div className="flex flex-col flex-grow mr-4">
                <h3 className="text-xl">Privacy suggestions available</h3>
                <p className="text-sm text-gray-500 wrap mt-2">Take the Privacy Checkup and choose the settings that are right for you</p>
              </div>
              <div className="flex-shrink-0 flex-grow-0 flex items-center justify-end">
                <img src={PrivacyIcon} className="h-22 w-22" alt="Data & Personalization" />
              </div>
            </div>
            <div className="p-4 block text-blue-500 text-left hover:bg-gray-100 cursor-pointer flex-grow-0 flex-shrink-0">
              Review suggestions (3)
            </div>
          </li>
        </ul>

        <div className="p-4 text-sm text-gray-500 mt-10">
          Only you can see your settings. You might also want to review your settings
          for Maps, Search, or whichever Google services you use most.
          Google keeps your data private, safe, and secure. <a href="/" className="text-red-700">Learn more</a>
        </div>
      </div>
    </div>
  );
}
