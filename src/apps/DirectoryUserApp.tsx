import { PlusIcon, SwitchHorizontalIcon, UserIcon } from '@heroicons/react/solid';
import { Location, State } from 'history';
import React, { useState } from 'react';
import { useLocation } from 'react-router';
import { CreateUserDialog, DeleteUserDialog } from 'src/components/auth';
import { BulkUpdateUsersDialog } from 'src/components/directory/BulkUpdateUsersDialog';
import { DirectoryUserOviewer } from 'src/components/directory/DirectoryUserOviewer';
import { UserListView } from 'src/components/directory/UserListView';

function useSearch(location: Location<State>) {
  return new URLSearchParams(location.search);
}

export function DirectoryUserApp(): JSX.Element {
  const location = useLocation();
  const [dialog, setDialog] = useState<string | null>(useSearch(location).get('action_id'));

  return (
    <div className="flex-1 flex-grow h-full overflow-x-hidden overflow-y-auto p-6">
      <div className="w-full flex items-center justify-between">
        <div className="flex-0 flex-shrink-0 flex-grow flex items-center">
          <div className="h-8 w-8 p-1 bg-lblue-200 rounded mr-3">
            <UserIcon className="h-full w-full text-lblue-500" />
          </div>
          <h1 className="font-light text-3xl leading-4">Users</h1>
        </div>
        <div className="flex-1 flex-shrink-0 flex-grow-0 flex items-center">
          <button
            type="button"
            onClick={() => setDialog('ADD_USER')}
            className="w-40 inline-flex justify-center rounded-md border boder-transparent shadow-sm px-3 py-1 bg-white font-medium text-sm text-gray-700 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-700"
          >
            <PlusIcon className="h-5 w-5 text-gray-700 mr-2 hover:text-gray-500" />
            Add new user
          </button>

          <button
            type="button"
            onClick={() => setDialog('BULK_UPDATE_USER')}
            className="w-44 inline-flex justify-center rounded-md border boder-transparent shadow-sm px-3 py-1 ml-2 bg-white font-medium text-sm text-gray-700 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-700"
          >
            <SwitchHorizontalIcon className="h-5 w-5 text-gray-700 mr-2 hover:text-gray-500" />
            Bulk update users
          </button>
        </div>
      </div>

      <div className="w-full mt-6">
        <h2 className="text-gray-500 text-xs font-medium uppercase tracking-wide">Overview</h2>
        <DirectoryUserOviewer />
      </div>

      <div className="w-full mt-6">
        <h2 className="text-gray-500 text-xs font-medium uppercase tracking-wide">Directory</h2>

        <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg mt-4">
          <UserListView />
        </div>
      </div>

      {/* Dialog */}
      {dialog === 'DELETE_USER' && (
        <DeleteUserDialog isOpen onClose={() => setDialog(null)} />
      )}
      {dialog === 'ADD_USER' && (
        <CreateUserDialog isOpen onClose={() => setDialog(null)} />
      )}
      {dialog === 'BULK_UPDATE_USER' && (
        <BulkUpdateUsersDialog isOpen onClose={() => setDialog(null)} />
      )}
    </div>
  );
}
