import { ArrowLeftIcon, HeartIcon } from '@heroicons/react/solid';
import {
  CollectionIcon,
  CreditCardIcon,
  IdentificationIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  ViewGridIcon,
} from '@heroicons/react/outline';
import clsx from 'clsx';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export function MyProfileSidebar(): JSX.Element {
  const location = useLocation();
  return (
    <nav className="flex-grow-0 w-1/4 md:w-1/5 h-full overflow-hidden text-gray-700 bg-white border border-r-1 divide-y divide-gray-200 flex flex-col">
      <div className="flex-0 flex-grow overflow-x-hidden overflow-y-auto p-2">
        <Link to="/" className="block w-full">
          <div
            className={clsx(
              'flex items-center px-4 py-3 hover:bg-gray-100 rounded',
              { 'bg-gray-300 text-gray-700': location.pathname === '/' },
            )}
          >
            <ArrowLeftIcon className="h-5 w-5 text-gray-500 mr-4" />
            <span className="font-normal text-sm">Back to home</span>
          </div>
        </Link>
        <Link to="/my-profile">
          <div
            className={clsx(
              'flex items-center px-4 py-3 hover:bg-gray-100 rounded',
              { 'bg-blue-50 text-lblue-600': location.pathname === '/my-profile' },
            )}
          >
            <ViewGridIcon
              className={clsx('h-5 w-5 mr-4', { 'text-lblue-600': location.pathname === '/my-profile' })}
            />
            <span className="font-semibold text-sm">Dashboard</span>
          </div>
        </Link>
        <Link to="/my-profile/personal-information">
          <div
            className={clsx(
              'flex items-center px-4 py-3 hover:bg-gray-100 rounded',
              { 'bg-blue-50 text-lblue-600': location.pathname.includes('/my-profile/personal-information') },
            )}
          >
            <IdentificationIcon className={clsx('h-5 w-5 mr-4', { 'text-lblue-600': location.pathname.includes('/my-profile/personal-information') })} />
            <span className="font-semibold text-sm">Personal Information</span>
          </div>
        </Link>
        <Link to="/my-profile/data-and-personalization">
          <div
            className={clsx(
              'flex items-center px-4 py-3 hover:bg-gray-100 rounded',
              { 'bg-gray-300 text-lblue-500': location.pathname.includes('data-and-personalization') },
            )}
          >
            <CollectionIcon className={clsx('h-5 w-5 mr-4', { 'text-lblue-600': location.pathname.includes('data-and-personalization') })} />
            <span className="font-semibold text-sm">Data &amp; personalization</span>
          </div>
        </Link>
        <Link to="/my-profile/security">
          <div
            className={clsx(
              'flex items-center px-4 py-3 hover:bg-gray-100 rounded',
              { 'bg-gray-300 text-lblue-500': location.pathname.includes('/my-profile/security') },
            )}
          >
            <ShieldCheckIcon className="h-5 w-5 text-gray-600 mr-4" />
            <span className="font-semibold text-sm">Security</span>
          </div>
        </Link>
        <Link to="/my-profile/groups">
          <div
            className={clsx(
              'flex items-center px-4 py-3 hover:bg-gray-100 rounded',
              { 'bg-gray-300 text-lblue-500': location.pathname.includes('/my-profile/groups') },
            )}
          >
            <UserGroupIcon className="h-5 w-5 text-gray-600 mr-4" />
            <span className="font-semibold text-sm">People groups</span>
          </div>
        </Link>
        <Link to="/my-profile/billing">
          <div
            className={clsx(
              'flex items-center px-4 py-3 hover:bg-gray-100 rounded',
              { 'bg-gray-300 text-lblue-500': location.pathname.includes('/my-profile/billing') },
            )}
          >
            <CreditCardIcon className="h-5 w-5 text-gray-600 mr-4" />
            <span className="font-semibold text-sm">Payment &amp; subscriptions</span>
          </div>
        </Link>
      </div>
      <div className="flex-1 flex-grow-0 w-full bg-gray-50 text-xs p-4 text-gray-400 flex">
        Made with <HeartIcon className="h-3 w-3 mx-1 text-rose-400" /> in Stockholm
      </div>
    </nav>
  );
}
