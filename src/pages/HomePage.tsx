import {
  ChipIcon, CogIcon, CollectionIcon, CreditCardIcon, DocumentReportIcon,
  HeartIcon,
  HomeIcon, ShieldCheckIcon, UserCircleIcon, UserIcon, ViewGridIcon,
} from '@heroicons/react/solid';
import React from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../components/common/Header';

export default function HomePage(): JSX.Element {
  return (
    <div className="w-full h-full flex flex-col items-stretch">
      <Header />
      {/* 2-column wrapper */}
      <nav className="flex-grow-0 w-1/5 h-full overflow-hidden text-gray-700 bg-white border border-r-1 divide-y divide-gray-200 flex flex-col">
        <div className="flex-0 flex-grow overflow-x-hidden overflow-y-auto">
          <Link to="/" className="block w-full">
            <div className="flex items-center px-4 py-3 hover:bg-gray-100">
              <HomeIcon className="h-5 w-5 text-gray-500 mr-4" />
              <span className="font-normal text-sm">Home</span>
            </div>
          </Link>
          <Link to="/dashboard">
            <div className="flex items-center px-4 py-3 hover:bg-gray-100">
              <ViewGridIcon className="h-5 w-5 text-gray-500 mr-4" />
              <span className="font-normal text-sm">Dashboard</span>
            </div>
          </Link>
          <Link to="/directory">
            <div className="flex items-center px-4 py-3 hover:bg-gray-100">
              <UserIcon className="h-5 w-5 text-gray-500 mr-4" />
              <span className="font-normal text-sm">Directory</span>
            </div>
          </Link>
          <Link to="/devices">
            <div className="flex items-center px-4 py-3 hover:bg-gray-100">
              <ChipIcon className="h-5 w-5 text-gray-500 mr-4" />
              <span className="font-normal text-sm">Devices</span>
            </div>
          </Link>
          <Link to="/apps">
            <div className="flex items-center px-4 py-3 hover:bg-gray-100">
              <CollectionIcon className="h-5 w-5 text-gray-500 mr-4" />
              <span className="font-normal text-sm">Apps</span>
            </div>
          </Link>
          <Link to="/security">
            <div className="flex items-center px-4 py-3 hover:bg-gray-100">
              <ShieldCheckIcon className="h-5 w-5 text-gray-500 mr-4" />
              <span className="font-normal text-sm">Security</span>
            </div>
          </Link>
          <Link to="/reports">
            <div className="flex items-center px-4 py-3 hover:bg-gray-100">
              <DocumentReportIcon className="h-5 w-5 text-gray-500 mr-4" />
              <span className="font-normal text-sm">Reporting</span>
            </div>
          </Link>
          <Link to="/billing">
            <div className="flex items-center px-4 py-3 hover:bg-gray-100">
              <CreditCardIcon className="h-5 w-5 text-gray-500 mr-4" />
              <span className="font-normal text-sm">Billing</span>
            </div>
          </Link>
          <Link to="/accounts">
            <div className="flex items-center px-4 py-3 hover:bg-gray-100">
              <UserCircleIcon className="h-5 w-5 text-gray-500 mr-4" />
              <span className="font-normal text-sm">Account</span>
            </div>
          </Link>
          <Link to="/rules">
            <div className="flex items-center px-4 py-3 hover:bg-gray-100">
              <CogIcon className="h-5 w-5 text-gray-500 mr-4" />
              <span className="font-normal text-sm">Rules</span>
            </div>
          </Link>
        </div>

        <div className="flex-1 flex-grow-0 w-full bg-gray-50 text-xs p-4 text-gray-600 flex">
          Made with <HeartIcon className="h-3 w-3 mx-1" /> in Stockholm
        </div>
      </nav>
    </div>
  );
}
