/* eslint-disable react/destructuring-assignment */
import { Dialog } from '@headlessui/react';
import React, { useRef } from 'react';

interface IDialogProps {
  isOpen?: boolean;
  onClose: () => void;
}

export function DeleteUserDialog(props: IDialogProps): JSX.Element {
  const { isOpen, onClose } = props;
  const searchRef = useRef(null);

  return (
    <Dialog
      as="div"
      initialFocus={searchRef}
      open={isOpen}
      onClose={onClose}
      className="fixed z-10 inset-0 overflow-y-auto"
    >
      <div className="flex items-center justify-center min-h-screen p-4 text-cetner">
        <Dialog.Overlay className="fixed inset-0 bg-gray-500 opacity-50" />

        <div className="inline-block z-10 bg-white rounded text-left overflow-hidden shadow-xl max-w-lg mx-auto">
          <Dialog.Title className="w-100 py-4 px-6 bg-gray-700 text-lg text-white font-bold">Delete user</Dialog.Title>
          <Dialog.Description className="px-6 py-4 text-base text-gray-500">
            Users you delete will no longer be able to access Google Workspace services.
            Keep in mind, you can suspend the use if you want to remove Google Workspace access
            immediately, but aren&apos;t ready to delete the account yet.
          </Dialog.Description>
          <div className="px-6 py-4 mb-20">
            <input
              type="text"
              name="user"
              id="user"
              ref={searchRef}
              className="text-gray-900 ring-opacity-5 appearance-none bg-white rounded-md block w-full px-3 py-2 border shadow ring-1 ring-gray-900 border-transparent placeholder-gray-400 focus:border-gray-500 focus:ring-gray-500 sm:text-sm focus:outline-none"
              placeholder="User you want to delete"
            />
          </div>
          <div className="py-4 px-6 mt-2 flex items-start flex-row-reverse border-t-1 border-gray-500">
            <button
              type="button"
              // onClick={() => setIsOpen(false)}
              className="w-full inline-flex justify-center rounded-md border boder-transparent shadow-sm px-4 py-2 bg-red-600 font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 ml-3 sm:w-auto"
              disabled
            >
              Delete
            </button>
            <button
              type="button"
              onClick={onClose}
              className="w-full inline-flex justify-center rounded-md border boder-transparent shadow-sm px-4 py-2 bg-white font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 sm:w-auto"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </Dialog>
  );
}

DeleteUserDialog.defaultProps = {
  isOpen: false,
};
