import {
  ArrowLeftIcon,
  HeartIcon,
  StarIcon, ViewListIcon,
} from '@heroicons/react/solid';
import clsx from 'clsx';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export function ReportSidebar(): JSX.Element {
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
        <Link to="/reports/">
          <div
            className={clsx(
              'flex items-center px-4 py-3 hover:bg-gray-100 rounded',
              { 'bg-gray-300 text-gray-700': location.pathname === '/reports/' },
            )}
          >
            <StarIcon className="h-5 w-5 text-gray-500 mr-4" />
            <span className="font-semibold text-sm">Highlights</span>
          </div>
        </Link>
        <Link to="/reports/audit">
          <div
            className={clsx(
              'flex items-center px-4 py-3 hover:bg-gray-100 rounded',
              { 'bg-gray-300 text-gray-700': location.pathname.includes('/audit') },
            )}
          >
            <ViewListIcon className="h-5 w-5 text-gray-500 mr-4" />
            <span className="font-bold text-sm">Audit log</span>
          </div>
        </Link>
      </div>
      <div className="flex-1 flex-grow-0 w-full bg-gray-50 text-xs p-4 text-gray-400 flex">
        Made with <HeartIcon className="h-3 w-3 mx-1 text-rose-400" /> in Stockholm
      </div>
    </nav>
  );
}
