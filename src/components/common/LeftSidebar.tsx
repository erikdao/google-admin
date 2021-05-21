import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  ChipIcon, CogIcon, CollectionIcon, CreditCardIcon, DocumentReportIcon,
  HeartIcon,
  HomeIcon, ShieldCheckIcon, UserCircleIcon, UserIcon, ViewGridIcon,
} from '@heroicons/react/solid';
import clsx from 'clsx';

export function LeftSideBar(): JSX.Element {
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
            <HomeIcon className="h-5 w-5 text-gray-500 mr-4" />
            <span className="font-semibold text-sm">Home</span>
          </div>
        </Link>
        <Link to="/dashboard">
          <div
            className={clsx(
              'flex items-center px-4 py-3 hover:bg-gray-100 rounded',
              { 'bg-gray-300 text-gray-700': location.pathname.includes('dashboard') },
            )}
          >
            <ViewGridIcon className="h-5 w-5 text-gray-500 mr-4" />
            <span className="font-semibold text-sm">Dashboard</span>
          </div>
        </Link>
        <Link to="/directory/users">
          <div
            className={clsx(
              'flex items-center px-4 py-3 hover:bg-gray-100 rounded',
              { 'bg-gray-300 text-gray-700': location.pathname.includes('directory') },
            )}
          >
            <UserIcon className="h-5 w-5 text-gray-500 mr-4" />
            <span className="font-bold text-sm">Directory</span>
          </div>
        </Link>
        <Link to="/devices">
          <div
            className={clsx(
              'flex items-center px-4 py-3 hover:bg-gray-100 rounded',
              { 'bg-gray-300 text-gray-700': location.pathname.includes('devices') },
            )}
          >
            <ChipIcon className="h-5 w-5 text-gray-500 mr-4" />
            <span className="font-bold text-sm">Devices</span>
          </div>
        </Link>
        <Link to="/apps">
          <div
            className={clsx(
              'flex items-center px-4 py-3 hover:bg-gray-100 rounded',
              { 'bg-gray-300 text-gray-700': location.pathname.includes('apps') },
            )}
          >
            <CollectionIcon className="h-5 w-5 text-gray-500 mr-4" />
            <span className="font-bold text-sm">Apps</span>
          </div>
        </Link>
        <Link to="/security">
          <div
            className={clsx(
              'flex items-center px-4 py-3 hover:bg-gray-100 rounded',
              { 'bg-gray-300 text-gray-700': location.pathname.includes('security') },
            )}
          >
            <ShieldCheckIcon className="h-5 w-5 text-gray-500 mr-4" />
            <span className="font-bold text-sm">Security</span>
          </div>
        </Link>
        <Link to="/reports">
          <div
            className={clsx(
              'flex items-center px-4 py-3 hover:bg-gray-100 rounded',
              { 'bg-gray-300 text-gray-700': location.pathname.includes('reports') },
            )}
          >
            <DocumentReportIcon className="h-5 w-5 text-gray-500 mr-4" />
            <span className="font-bold text-sm">Reporting</span>
          </div>
        </Link>
        <Link to="/billing">
          <div
            className={clsx(
              'flex items-center px-4 py-3 hover:bg-gray-100 rounded',
              { 'bg-gray-300 text-gray-700': location.pathname.includes('billing') },
            )}
          >
            <CreditCardIcon className="h-5 w-5 text-gray-500 mr-4" />
            <span className="font-bold text-sm">Billing</span>
          </div>
        </Link>
        <Link to="/accounts">
          <div
            className={clsx(
              'flex items-center px-4 py-3 hover:bg-gray-100 rounded',
              { 'bg-gray-300 text-gray-700': location.pathname.includes('accounts') },
            )}
          >
            <UserCircleIcon className="h-5 w-5 text-gray-500 mr-4" />
            <span className="font-bold text-sm">Account</span>
          </div>
        </Link>
        <Link to="/rules">
          <div
            className={clsx(
              'flex items-center px-4 py-3 hover:bg-gray-100 rounded',
              { 'bg-gray-300 text-gray-700': location.pathname.includes('rules') },
            )}
          >
            <CogIcon className="h-5 w-5 text-gray-500 mr-4" />
            <span className="font-bold text-sm">Rules</span>
          </div>
        </Link>
      </div>

      <div className="flex-1 flex-grow-0 w-full bg-gray-50 text-xs p-4 text-gray-400 flex">
        Made with <HeartIcon className="h-3 w-3 mx-1 text-rose-400" /> in Stockholm
      </div>
    </nav>
  );
}
