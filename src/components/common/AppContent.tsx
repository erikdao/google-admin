import {
  AdjustmentsIcon,
  ChipIcon,
  CogIcon,
  CollectionIcon,
  ColorSwatchIcon,
  CreditCardIcon,
  DatabaseIcon,
  DocumentReportIcon,
  InformationCircleIcon,
  KeyIcon,
  OfficeBuildingIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  UserIcon,
} from '@heroicons/react/solid';
import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Container component to hold content of each app
 * @returns JSX.Element
 */
export function AppContent(): JSX.Element {
  return (
    <div className="flex-1 flex-grow h-full overflow-x-hidden overflow-y-auto p-6">
      <ul className="grid gap-6 grid-cols-1 sm:grid-cols-3">
        <li className="col-span-1 flex flex-col text-left bg-white rounded-lg shadow hover:shadow-md divide-y divide-gray-200">
          <div className="flex items-center p-4">
            <UserIcon className="h-7 w-7 text-blue-400 mr-4" />
            <h2 className="font-bold text-lg">Users</h2>
          </div>
          <ul className="p-2 text-sm text-gray-600">
            <li className="px-2 py-1 cursor-pointer hover:bg-gray-100 rounded">
              <Link to="users/?action_id=ADD_USER" className="block">Add a user</Link>
            </li>
            <li className="px-2 py-1 cursor-pointer hover:bg-gray-100 rounded">Delete a user</li>
            <li className="px-2 py-1 cursor-pointer hover:bg-gray-100 rounded">Update a user&apos;s name and email</li>
            <li className="px-2 py-1 cursor-pointer hover:bg-gray-100 rounded">Create an alternate email (email alias)</li>
          </ul>
        </li>

        <li className="col-span-1 flex flex-col text-left bg-white rounded-lg shadow hover:shadow-md divide-y divide-gray-200">
          <div className="flex items-center p-4">
            <CreditCardIcon className="h-7 w-7 text-red-400 mr-4" />
            <h2 className="font-bold text-lg">Billing</h2>
          </div>
          <ul className="p-2 text-sm text-gray-600">
            <li className="px-2 py-1 cursor-pointer hover:bg-gray-100 rounded">Manage subscriptions</li>
            <li className="px-2 py-1 cursor-pointer hover:bg-gray-100 rounded">Payment accounts</li>
            <li className="px-2 py-1 cursor-pointer hover:bg-gray-100 rounded">Get more services</li>
          </ul>
        </li>

        <li className="col-span-1 flex flex-col text-left bg-white rounded-lg shadow hover:shadow-md divide-y divide-gray-200">
          <div className="flex items-center p-4">
            <OfficeBuildingIcon className="h-7 w-7 text-indigo-400 mr-4" />
            <h2 className="font-bold text-lg">Domains</h2>
          </div>
          <ul className="p-2 text-sm text-gray-600">
            <li className="px-2 py-1 cursor-pointer hover:bg-gray-100 rounded">Manage domain</li>
            <li className="px-2 py-1 cursor-pointer hover:bg-gray-100 rounded">Add domains</li>
            <li className="px-2 py-1 cursor-pointer hover:bg-gray-100 rounded">Change your primary domain</li>
          </ul>
        </li>
      </ul>

      <ul className="w-full mt-6 grid gap-6 grid-cols-1 sm:grid-cols-3">
        <li className="col-span-1 flex text-left bg-white rounded-lg shadow hover:shadow-md cursor-pointer">
          <div className="flex-0 flex-shrink-0 flex-grow-0 flex items-center p-4">
            <UserGroupIcon className="h-7 w-7 text-bgray-400" />
          </div>
          <div className="flex-1 flex-grow flex flex-col items-stretch py-2 pr-2">
            <h2 className="font-bold text-lg">Groups</h2>
            <p className="text-sm wrap text-gray-600 leading-4 my-1">
              Create groups for mailing lists and apply policies
            </p>
          </div>
        </li>

        <li className="col-span-1 flex text-left bg-white rounded-lg shadow hover:shadow-md cursor-pointer">
          <div className="flex-0 flex-shrink-0 flex-grow-0 flex items-center p-4">
            <CollectionIcon className="h-7 w-7 text-orange-400" />
          </div>
          <div className="flex-1 flex-grow flex flex-col items-stretch py-2 pr-2">
            <h2 className="font-bold text-lg">Apps</h2>
            <p className="text-sm wrap text-gray-600 leading-4 my-1">
              Manage web and mobile app access and settings
            </p>
          </div>
        </li>

        <li className="col-span-1 flex text-left bg-white rounded-lg shadow hover:shadow-md cursor-pointer">
          <div className="flex-0 flex-shrink-0 flex-grow-0 flex items-center p-4">
            <ChipIcon className="h-7 w-7 text-gray-400" />
          </div>
          <div className="flex-1 flex-grow flex flex-col items-stretch py-2 pr-2">
            <h2 className="font-bold text-lg">Devices</h2>
            <p className="text-sm wrap text-gray-600 leading-4 my-1">
              Manage devices and secure your organization&apos;s data
            </p>
          </div>
        </li>

        <li className="col-span-1 flex text-left bg-white rounded-lg shadow hover:shadow-md cursor-pointer">
          <div className="flex-0 flex-shrink-0 flex-grow-0 flex items-center p-4">
            <AdjustmentsIcon className="h-7 w-7 text-teal-400" />
          </div>
          <div className="flex-1 flex-grow flex flex-col items-stretch py-2 pr-2">
            <h2 className="font-bold text-lg">Account settings</h2>
            <p className="text-sm wrap text-gray-600 leading-4 my-1">
              Manage your organization&apos;s profiles and preferences
            </p>
          </div>
        </li>

        <li className="col-span-1 flex text-left bg-white rounded-lg shadow hover:shadow-md cursor-pointer">
          <div className="flex-0 flex-shrink-0 flex-grow-0 flex items-center p-4">
            <ColorSwatchIcon className="h-7 w-7 text-blue-500" />
          </div>
          <div className="flex-1 flex-grow flex flex-col items-stretch py-2 pr-2">
            <h2 className="font-bold text-lg">Organization units</h2>
            <p className="text-sm wrap text-gray-600 leading-4 my-1">
              Organize users into units for applying policies
            </p>
          </div>
        </li>

        <li className="col-span-1 flex text-left bg-white rounded-lg shadow hover:shadow-md cursor-pointer">
          <div className="flex-0 flex-shrink-0 flex-grow-0 flex items-center p-4">
            <ShieldCheckIcon className="h-7 w-7 text-gray-600" />
          </div>
          <div className="flex-1 flex-grow flex flex-col items-stretch py-2 pr-2">
            <h2 className="font-bold text-lg">Security</h2>
            <p className="text-sm wrap text-gray-600 leading-4 my-1">
              Configure security settings, view alerts and analytics
            </p>
          </div>
        </li>

        <li className="col-span-1 flex text-left bg-white rounded-lg shadow hover:shadow-md cursor-pointer">
          <div className="flex-0 flex-shrink-0 flex-grow-0 flex items-center p-4">
            <DocumentReportIcon className="h-7 w-7 text-yellow-500" />
          </div>
          <div className="flex-1 flex-grow flex flex-col items-stretch py-2 pr-2">
            <h2 className="font-bold text-lg">Report</h2>
            <p className="text-sm wrap text-gray-600 leading-4 my-1">
              Manage your organization&apos;s users and activities
            </p>
          </div>
        </li>

        <li className="col-span-1 flex text-left bg-white rounded-lg shadow hover:shadow-md cursor-pointer">
          <div className="flex-0 flex-shrink-0 flex-grow-0 flex items-center p-4">
            <OfficeBuildingIcon className="h-7 w-7 text-lime-500" />
          </div>
          <div className="flex-1 flex-grow flex flex-col items-stretch py-2 pr-2">
            <h2 className="font-bold text-lg">Building and resources</h2>
            <p className="text-sm wrap text-gray-600 leading-4 my-1">
              Manage your buildings, rooms and resources
            </p>
          </div>
        </li>

        <li className="col-span-1 flex text-left bg-white rounded-lg shadow hover:shadow-md cursor-pointer">
          <div className="flex-0 flex-shrink-0 flex-grow-0 flex items-center p-4">
            <CogIcon className="h-7 w-7 text-rose-500" />
          </div>
          <div className="flex-1 flex-grow flex flex-col items-stretch py-2 pr-2">
            <h2 className="font-bold text-lg">Rules</h2>
            <p className="text-sm wrap text-gray-600 leading-4 my-1">
              Manage rules to set alerts and actions
            </p>
          </div>
        </li>

        <li className="col-span-1 flex text-left bg-white rounded-lg shadow hover:shadow-md cursor-pointer">
          <div className="flex-0 flex-shrink-0 flex-grow-0 flex items-center p-4">
            <KeyIcon className="h-7 w-7 text-emerald-500" />
          </div>
          <div className="flex-1 flex-grow flex flex-col items-stretch py-2 pr-2">
            <h2 className="font-bold text-lg">Admin roles</h2>
            <p className="text-sm wrap text-gray-600 leading-4 my-1">
              Assign roles to control the permissions for Admin Console
            </p>
          </div>
        </li>

        <li className="col-span-1 flex text-left bg-white rounded-lg shadow hover:shadow-md cursor-pointer">
          <div className="flex-0 flex-shrink-0 flex-grow-0 flex items-center p-4">
            <DatabaseIcon className="h-7 w-7 text-amber-400" />
          </div>
          <div className="flex-1 flex-grow flex flex-col items-stretch py-2 pr-2">
            <h2 className="font-bold text-lg">Data migration</h2>
            <p className="text-sm wrap text-gray-600 leading-4 my-1">
              Manage your data from other products and services
            </p>
          </div>
        </li>

        <li className="col-span-1 flex text-left bg-white rounded-lg shadow hover:shadow-md cursor-pointer">
          <div className="flex-0 flex-shrink-0 flex-grow-0 flex items-center p-4">
            <InformationCircleIcon className="h-7 w-7 text-green-500" />
          </div>
          <div className="flex-1 flex-grow flex flex-col items-stretch py-2 pr-2">
            <h2 className="font-bold text-lg">Support</h2>
            <p className="text-sm wrap text-gray-600 leading-4 my-1">
              Connect with Help Assistant
            </p>
          </div>
        </li>

      </ul>
    </div>
  );
}
