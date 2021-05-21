import { Location, State } from 'history';
import React from 'react';

function useSearch(location: Location<State>) {
  return new URLSearchParams(location.search);
}

export function DirectoryGroupApp(): JSX.Element {
  return (
    <div className="flex-1 flex-grow h-full overflow-x-hidden overflow-y-auto p-6">
      <h1 className="font-bold text-3xl leading-4">Groups</h1>
    </div>
  );
}
