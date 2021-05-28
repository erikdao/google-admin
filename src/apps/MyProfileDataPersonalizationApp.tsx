/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState } from 'react';
import PrivacyCheckupScene from 'src/assets/icons/privacycheckup_scene_active.png';
import { PageTitle } from 'src/components/common/PageTitle';
import { BirthdayDialog } from 'src/components/myprofile/BirthdayDialog';

export function MyProfileDataPersonalizationApp(): JSX.Element {
  const [dialog, setDialog] = useState('');

  return (
    <>
      <PageTitle title="Personal Information" />
      <div className="flex-1 flex-grow h-full w-full flex flex-col overflow-x-hidden overflow-y-auto p-6 bg-white">
        <div className="flex-0 flex-shrink-0 flex-grow flex flex-col items-center w-full sm:w-3/4 max-w-7xl md:max-w-4xl mx-auto">
          <div className="flex-0 flex flex-col items-center justify-center p-4 space-y-4 pt-8 w-full">
            <h1 className="font-normal text-3xl text-gray-700">Data &amp; Personalization</h1>
            <p className="text-base text-gray-500">Your data, activity, and preferences that help make Google services more useful for you</p>
          </div>

          {/* Privacy suggestions */}
          <div className="mt-2 rounded-lg border border-gray-300 w-full divide-y divide-gray-200">
            <div className="flex items-stretch">
              <div className="p-4 w-3/5">
                <h3 className="text-2xl text-gray-700">Privacy suggestions available</h3>
                <p className="text-sm text-gray-600">Take the Privacy Checkup and choose the settings that are right for you</p>
              </div>
              <div className="p-4 w-2/5">
                <img src={PrivacyCheckupScene} alt="About me" className="w-100 h-auto" />
              </div>
            </div>

            <div className="p-4 block text-blue-500 text-left text-sm hover:bg-gray-100 cursor-pointer flex-grow-0 flex-shrink-0">
              Review suggestion (1)
            </div>
          </div>
          {/* End Privacy suggestions  */}
        </div>
      </div>

      {dialog === 'BIRTHDAY' && <BirthdayDialog isOpen onClose={() => setDialog('')} />}
    </>
  );
}
