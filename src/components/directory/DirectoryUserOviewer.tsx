import clsx from 'clsx';
import React from 'react';

export function DirectoryUserOviewer(): JSX.Element {
  return (
    <ul className="mt-3 grid grid-cols-1 gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <li className="col-span-1 flex shadow-sm rounded-md">
        <div
          className={clsx(
            'bg-green-500',
            'flex-shrink-0 flex items-center justify-center w-16 text-white text-2xl font-medium rounded-l-md',
          )}
        >
          1128
        </div>
        <div className="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate">
          <div className="flex-1 px-4 py-2 text-sm truncate">
            <a href="/" className="text-gray-900 font-medium hover:text-gray-600">
              Total users
            </a>
            <p className="text-gray-500">Last joined at May 21st, 2021 05:47</p>
          </div>
        </div>
      </li>

      <li className="col-span-1 flex shadow-sm rounded-md">
        <div
          className={clsx(
            'bg-amber-500',
            'flex-shrink-0 flex items-center justify-center w-16 text-white text-2xl font-medium rounded-l-md',
          )}
        >
          21
        </div>
        <div className="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate">
          <div className="flex-1 px-4 py-2 text-sm truncate">
            <a href="/" className="text-gray-900 font-medium hover:text-gray-600">
              Suspended users
            </a>
            <p className="text-gray-500">Last suspened Jan 22nd, 2021 15:47</p>
          </div>
        </div>
      </li>

      <li className="col-span-1 flex shadow-sm rounded-md">
        <div
          className={clsx(
            'bg-blue-500',
            'flex-shrink-0 flex items-center justify-center w-16 text-white text-2xl font-medium rounded-l-md',
          )}
        >
          3
        </div>
        <div className="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate">
          <div className="flex-1 px-4 py-2 text-sm truncate">
            <a href="/" className="text-gray-900 font-medium hover:text-gray-600">
              Organizational units
            </a>
            <p className="text-gray-500">All function properly</p>
          </div>
        </div>
      </li>
    </ul>
  );
}
