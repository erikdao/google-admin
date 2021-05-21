import { PlusIcon } from '@heroicons/react/solid';
import React from 'react';

export function UserListView(): JSX.Element {
  const person = {
    image: 'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&h=256&q=80',
    name: 'Erik Dao',
    email: 'cuong@neuraltalks.io',
    title: 'Software Engineer',
    department: 'Platform team',
    role: 'Admin',
  };

  return (
    <table className="min-w-full divide-y divide-gray-200">
      <thead className="bg-gray-100">
        <tr>
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            Name
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            Email
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            Status
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            Last sign in
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            Email usage
          </th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        <tr>
          <td className="p-3 bg-white" colSpan={5}>
            <button
              type="button"
              className="w-auto bg-transparent shadow-sm border border-gray-400 px-2 py-1 rounded-lg inline-flex items-center text-sm text-gray-700 cursor-pointer focus:outline-none focus:border-solid focus:border-gray-700"
            >
              <PlusIcon className="h-5 w-5 text-gray-700 pr-2" />
              Add filters
            </button>
          </td>
        </tr>
        <tr>
          <td className="px-6 py-4 whitespace-nowrap">
            <div className="flex items-center">
              <div className="flex-shrink-0 h-10 w-10">
                <img className="h-10 w-10 rounded-full" src={person.image} alt="" />
              </div>
              <div className="ml-4">
                <div className="text-sm font-medium text-gray-900">Erik Dao</div>
                <div className="text-sm text-gray-500 truncate">{person.title} - {person.department}</div>
              </div>
            </div>
          </td>
          <td className="px-6 py-4 whitespace-nowrap">
            <div className="text-sm text-gray-900">{person.email}</div>
          </td>
          <td className="px-6 py-4 whitespace-nowrap">
            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
              Active
            </span>
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">44 mins ago</td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            5.23 GB
          </td>
        </tr>
      </tbody>
    </table>
  );
}
