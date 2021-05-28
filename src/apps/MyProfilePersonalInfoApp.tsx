/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { ChevronRightIcon } from '@heroicons/react/outline';
import React, { createRef, useContext, useState } from 'react';
import AboutMeScene from 'src/assets/icons/aboutme_scene.png';
import { PageTitle } from 'src/components/common/PageTitle';
import { BirthdayDialog } from 'src/components/myprofile/BirthdayDialog';
import { UpdateNameDialog } from 'src/components/myprofile/UpdateNameDialog';
import { DialogType } from 'src/constants';
import { AuthContext } from 'src/contexts';
import { updateUserProfile } from 'src/services/auth';
import { createUploadImageTask } from 'src/services/storage';
import { IAuthUser } from 'src/types/auth';

const dumbUser = {
  email: null,
  displayName: null,
  photoURL: '',
};

export function MyProfilePersonalInfoApp(): JSX.Element {
  const { authUser, setAuthUser } = useContext(AuthContext) || dumbUser;
  const [dialog, setDialog] = useState('');

  const photoUploadRef: React.RefObject<HTMLInputElement> = createRef();

  const handlePhotoClick = (event: React.MouseEvent<HTMLImageElement>) => {
    event.preventDefault();
    if (photoUploadRef && photoUploadRef.current) {
      photoUploadRef.current.click();
    }
  };

  const handlePhotoKeyDown = () => null;

  const innerUploadImage = (file: File) => {
    const folder = 'profile-images';
    const uploadTask = createUploadImageTask(file, folder);
    uploadTask.then((snapshot) => {
      snapshot.ref.getDownloadURL().then((photoURL) => {
        updateUserProfile({ photoURL }).then((user: IAuthUser) => {
          setAuthUser(user);
        });
      });
    });
  };

  const handlePhotoChanged = async (event: React.ChangeEvent<HTMLInputElement>): Promise<void> => {
    const file = event.currentTarget.files && event.currentTarget.files[0];
    if (file) {
      innerUploadImage(file);
    }
  };

  return (
    <>
      <PageTitle title="Personal Information" />
      <div className="flex-1 flex-grow h-full w-full flex flex-col overflow-x-hidden overflow-y-auto p-6 bg-white">
        <div className="flex-0 flex-shrink-0 flex-grow flex flex-col items-center w-full sm:w-3/4 max-w-7xl md:max-w-4xl mx-auto">
          <div className="flex-0 flex flex-col items-center justify-center p-4 space-y-4 pt-8 w-full">
            <h1 className="font-normal text-3xl text-gray-700">Personal info</h1>
            <p className="text-base text-gray-500">Basic info, like your name and photo, that you use on Google services</p>
          </div>

          {/* Basic info */}
          <div className="rounded-lg border border-gray-300 w-full mt-2 divide-y divide-gray-200">
            <div className="p-4 divide-y-skip">
              <h3 className="text-2xl text-gray-700">Basic info</h3>
              <p className="text-sm mt-2 text-gray-500">Some info may be visible to other people using Google services. <a href="/" className="text-red-700">Learn more</a></p>
            </div>
            <div className="p-4 flex items-stretch text-xs text-gray-500 hover:cursor-pointer hover:bg-gray-100">
              <div className="flex-shrink-0 w-1/4 uppercase">Photo</div>
              <div className="flex-grow w-2/4 text-sm">Click on the image and select a new file to update</div>
              <div className="flex-grow flex justify-end">
                <img
                  src={authUser.photoURL}
                  alt=""
                  className="rounded-full h-14 w-14"
                  onClick={handlePhotoClick}
                  onKeyDown={handlePhotoKeyDown}
                />
                <input type="file" id="photoUpload" name="photoUpload" className="sr-only" ref={photoUploadRef} onChange={handlePhotoChanged} />
              </div>
            </div>

            <div className="p-4 flex items-stretch text-xs  hover:cursor-pointer hover:bg-gray-100">
              <div className="flex-shrink-0 w-1/4 uppercase text-gray-500">Name</div>
              <div className="flex-grow text-sm font-normal text-gray-700">{authUser.displayName}</div>
              <div className="flex-grow-0 flex-shrink-0 w-4 flex items-center justify-center">
                <ChevronRightIcon
                  className="h-4 w-4 text-gray-700"
                  onClick={() => setDialog(DialogType.MY_PROFILE_UPDATE_NAME)}
                />
              </div>
            </div>

            <div
              role="navigation"
              className="p-4 flex items-stretch text-xs  hover:cursor-pointer hover:bg-gray-100 cursor-pointer"
              onClick={() => setDialog(DialogType.MY_PROFILE_UPDATE_BIRTHDAY)}
              onKeyDown={() => setDialog(DialogType.MY_PROFILE_UPDATE_BIRTHDAY)}
            >
              <div className="flex-shrink-0 w-1/4 uppercase text-gray-500">Birthday</div>
              <div className="flex-grow text-sm font-normal text-gray-700">Add birthday</div>
              <div className="flex-grow-0 flex-shrink-0 w-4 flex items-center justify-center cursor-pointer">
                <ChevronRightIcon
                  className="h-4 w-4 text-gray-700"
                  onClick={() => setDialog(DialogType.MY_PROFILE_UPDATE_BIRTHDAY)}
                />
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
          {/* End Basic info */}

          {/* Contact info */}
          <div className="mt-8 rounded-lg border border-gray-300 w-full divide-y divide-gray-200">
            <div className="p-4 divide-y-skip">
              <h3 className="text-2xl text-gray-700">Contact info</h3>
            </div>
            <div className="p-4 flex items-stretch text-xs text-gray-500 hover:cursor-pointer hover:bg-gray-100">
              <div className="flex-shrink-0 w-1/4 uppercase">Email</div>
              <div className="flex-grow w-2/4 text-sm text-gray-700">
                <p>{authUser?.email}</p>
                <p className="text-gray-500">+2 more</p>
              </div>
              <div className="flex-grow-0 flex-shrink-0 w-4 flex items-center justify-center">
                <ChevronRightIcon className="h-4 w-4 text-gray-700" />
              </div>
            </div>

            <div className="p-4 flex items-stretch text-xs  hover:cursor-pointer hover:bg-gray-100">
              <div className="flex-shrink-0 w-1/4 uppercase text-gray-500">Phone</div>
              <div className="flex-grow text-sm font-normal text-gray-700">
                <p>076766xxxx</p>
                <p>+84328xxxxxx</p>
              </div>
              <div className="flex-grow-0 flex-shrink-0 w-4 flex items-center justify-center">
                <ChevronRightIcon className="h-4 w-4 text-gray-700" />
              </div>
            </div>
          </div>
          {/* End Contact info */}

          {/* Choose what others see */}
          <div className="mt-8 rounded-lg border border-gray-300 w-full divide-y divide-gray-200">
            <div className="flex items-stretch">
              <div className="p-4 w-1/2">
                <h3 className="text-2xl text-gray-700">Choose what others see</h3>
                <p className="text-sm text-gray-600">You decide what personal info you make visible across Google services</p>
              </div>
              <div className="p-4 w-1/2">
                <img src={AboutMeScene} alt="About me" className="w-100 h-auto" />
              </div>
            </div>

            <div className="p-4 block text-blue-500 text-left text-sm hover:bg-gray-100 cursor-pointer flex-grow-0 flex-shrink-0">
              <a href="/">Go to About me</a>
            </div>
          </div>
          {/* Choose what others see  */}
        </div>
      </div>

      {dialog === DialogType.MY_PROFILE_UPDATE_BIRTHDAY && <BirthdayDialog isOpen onClose={() => setDialog('')} />}
      {dialog === DialogType.MY_PROFILE_UPDATE_NAME && <UpdateNameDialog isOpen onClose={() => setDialog('')} />}
    </>
  );
}
