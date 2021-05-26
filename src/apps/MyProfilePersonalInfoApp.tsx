/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { ChevronRightIcon } from '@heroicons/react/outline';
import React, { useContext, useState } from 'react';
import { PageTitle } from 'src/components/common/PageTitle';
import { BirthdayDialog } from 'src/components/myprofile/BirthdayDialog';
import { UserContext } from 'src/contexts';

export function MyProfilePersonalInfoApp(): JSX.Element {
  const { user } = useContext(UserContext);
  const [dialog, setDialog] = useState('');

  return (
    <>
      <PageTitle title="Personal Information" />
      <div className="flex-1 flex-grow h-full flex flex-col overflow-x-hidden overflow-y-auto p-6 bg-white">
        <div className="flex-1 flex flex-col items-center max-w-7xl md:max-w-4xl mx-auto">
          <div className="flex-0 flex flex-col items-center justify-center p-4 space-y-4 pt-8 w-full">
            <h1 className="font-normal text-3xl text-gray-700">Personal info</h1>
            <p className="text-base text-gray-500">Basic info, like your name and photo, that you use on Google services</p>
          </div>

          <div className="rounded-lg border border-gray-200 w-full mt-2 divide-y divide-gray-200">
            <div className="p-4 divide-y-skip">
              <h3 className="text-2xl text-gray-700">Basic info</h3>
              <p className="text-sm mt-2 text-gray-500">Some info may be visible to other people using Google services. <a href="/" className="text-red-700">Learn more</a></p>
            </div>
            <div className="p-4 flex items-stretch text-xs text-gray-500 hover:cursor-pointer hover:bg-gray-100">
              <div className="flex-shrink-0 w-1/4 uppercase">Photo</div>
              <div className="flex-grow w-2/4 text-sm">You can&apos;t change the photo of this account</div>
              <div className="flex-grow flex justify-end">
                <img src={user.profileImage} alt="" className="rounded-full h-14 w-14" />
              </div>
            </div>

            <div className="p-4 flex items-stretch text-xs  hover:cursor-pointer hover:bg-gray-100">
              <div className="flex-shrink-0 w-1/4 uppercase text-gray-500">Name</div>
              <div className="flex-grow text-sm font-normal text-gray-700">{user.firstName} {user.lastName}</div>
              <div className="flex-grow-0 flex-shrink-0 w-4 flex items-center justify-center">
                <ChevronRightIcon className="h-4 w-4 text-gray-700" />
              </div>
            </div>

            <div
              role="navigation"
              className="p-4 flex items-stretch text-xs  hover:cursor-pointer hover:bg-gray-100 cursor-pointer"
              onClick={() => setDialog('BIRTHDAY')}
              onKeyDown={() => setDialog('BIRTHDAY')}
            >
              <div className="flex-shrink-0 w-1/4 uppercase text-gray-500">Birthday</div>
              <div className="flex-grow text-sm font-normal text-gray-700">Add birthday</div>
              <div className="flex-grow-0 flex-shrink-0 w-4 flex items-center justify-center cursor-pointer">
                <ChevronRightIcon className="h-4 w-4 text-gray-700" onClick={() => setDialog('BIRTHDAY')} />
              </div>
            </div>

            <div className="p-4 flex items-stretch text-xs  hover:cursor-pointer hover:bg-gray-100">
              <div className="flex-shrink-0 w-1/4 uppercase text-gray-500">Password</div>
              <div className="flex-grow text-sm font-normal text-gray-700 flex flex-col">
                <div>••••••••</div>
                <div className="text-sm text-gray-500">Last changed May 11, 2019</div>
              </div>
              <div className="flex-grow-0 flex-shrink-0 w-4 flex items-center justify-center">
                <ChevronRightIcon className="h-4 w-4 text-gray-700" />
              </div>
            </div>
          </div>

          <div className="p-4 text-sm text-gray-500 mt-10">
            Only you can see your settings. You might also want to review your settings
            for Maps, Search, or whichever Google services you use most.
            Google keeps your data private, safe, and secure. <a href="/" className="text-red-700">Learn more</a>
          </div>
        </div>
      </div>

      {dialog === 'BIRTHDAY' && <BirthdayDialog isOpen onClose={() => setDialog('')} />}
    </>
  );
}
