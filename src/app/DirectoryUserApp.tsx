import { Location, State } from 'history';
import React, { useState } from 'react';
import { useLocation } from 'react-router';
import { CreateUserDialog, DeleteUserDialog } from 'src/components/auth';

function useSearch(location: Location<State>) {
  return new URLSearchParams(location.search);
}

export function DirectoryUserApp(): JSX.Element {
  const location = useLocation();
  const [dialog, setDialog] = useState<string | null>(useSearch(location).get('action_id'));

  return (
    <div className="flex-1 flex-grow h-full overflow-x-hidden overflow-y-auto p-6">
      <h1 className="font-bold text-3xl leading-4">Users</h1>
      {dialog === 'DELETE_USER' && (
        <DeleteUserDialog isOpen onClose={() => setDialog(null)} />
      )}
      {dialog === 'ADD_USER' && (
        <CreateUserDialog isOpen onClose={() => setDialog(null)} />
      )}
    </div>
  );
}
