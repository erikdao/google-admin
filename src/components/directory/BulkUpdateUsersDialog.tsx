/* eslint-disable jsx-a11y/label-has-associated-control */
import { Dialog } from '@headlessui/react';
import { UserCircleIcon } from '@heroicons/react/solid';
import React, { useRef } from 'react';

interface IDialogProps {
  isOpen?: boolean;
  onClose: () => void;
}

export function BulkUpdateUsersDialog(props: IDialogProps): JSX.Element {
  const { isOpen, onClose } = props;
  const searchRef = useRef(null);

  return (
    <Dialog
      as="div"
      open={isOpen}
      onClose={onClose}
      initialFocus={searchRef}
      className="fixed z-10 inset-0 overflow-y-auto"
    >
      <div className="flex items-center justify-center min-h-screen p-4 text-cetner">
        <Dialog.Overlay className="fixed inset-0 bg-gray-500 opacity-50" />

        <div className="inline-block z-10 bg-white rounded text-left overflow-hidden shadow-xl max-w-1/2 w-1/3">
          <Dialog.Title className="w-100 py-4 px-6 bg-gray-700 text-lg text-gray-100 font-bold">Bulk update users</Dialog.Title>

          <div className="py-4 px-6 mt-2 flex items-start flex-row-reverse border-t-1 border-gray-500">
            <button
              type="button"
              className="w-full inline-flex justify-center rounded-md border boder-transparent shadow-sm px-4 py-2 bg-gray-700 font-medium text-gray-100 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 ml-3 sm:w-auto"
            >
              Upload
            </button>
            <button
              type="button"
              onClick={onClose}
              className="w-full inline-flex justify-center rounded-md border boder-transparent shadow-sm px-4 py-2 bg-white font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 sm:w-auto"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </Dialog>
  );
}

BulkUpdateUsersDialog.defaultProps = {
  isOpen: false,
};
