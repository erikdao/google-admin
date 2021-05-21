/* eslint-disable jsx-a11y/label-has-associated-control */
import { Dialog } from '@headlessui/react';
import { UserCircleIcon } from '@heroicons/react/solid';
import React, { useRef } from 'react';

interface IDialogProps {
  isOpen?: boolean;
  onClose: () => void;
}

export function CreateUserDialog(props: IDialogProps): JSX.Element {
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

        <div className="inline-block z-10 bg-white rounded text-left overflow-hidden shadow-xl max-w-1/2 w-1/3">
          <Dialog.Title className="w-100 py-4 px-6 bg-gray-700 text-lg text-gray-100 font-bold">Add new user</Dialog.Title>
          <div className="mt-3 px-6 flex justify-center">
            <UserCircleIcon className="h-20 w-20 rounded-full text-gray-400 bg-gray-200 cursor-pointer" />
          </div>
          <div className="px-6 mb-2 mt-2">
            <label htmlFor="first_name" className="block text-sm font-medium text-gray-700">
              First name
            </label>
            <div className="mt-1">
              <input
                type="text"
                name="first_name"
                id="first_name"
                autoComplete="given-name"
                className="shadow-sm focus:ring-gray-700 focus:border-gray-700 block w-full sm:text-sm rounded-md outline-none border-2 border-gray-300 px-3 py-2"
                placeholder="John"
              />
            </div>
          </div>

          <div className="px-6 mb-2">
            <label htmlFor="last_name" className="block text-sm font-medium text-gray-700">
              Last name
            </label>
            <div className="mt-1">
              <input
                type="text"
                name="last_name"
                id="last_name"
                autoComplete="given-name"
                className="shadow-sm focus:ring-gray-700 focus:border-gray-700 block w-full sm:text-sm rounded-md outline-none border-2 border-gray-300 px-3 py-2"
                placeholder="Doe"
              />
            </div>
          </div>

          <div className="px-6 mb-2">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <div className="mt-1 flex">
              <input
                type="text"
                name="email"
                id="email"
                autoComplete="given-name"
                className="shadow-sm focus:ring-gray-700 focus:border-gray-700 block w-full sm:text-sm rounded-none rounded-l-md outline-none border-2 border-gray-300 px-3 py-2"
                placeholder="john.doe"
              />
              <span className="inline-flex items-center px-3 rounded-r-md border border-l-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm">
                @neuraltalks.io
              </span>
            </div>
          </div>

          <div className="px-6 mb-2">
            <label htmlFor="unit" className="block text-sm font-medium text-gray-700">
              Organizational unit
            </label>
            <div className="mt-1">
              <input
                type="text"
                name="unit"
                id="unit"
                autoComplete="given-name"
                className="shadow-sm focus:ring-gray-700 focus:border-gray-700 block w-full sm:text-sm rounded-md outline-none border-2 border-gray-300 px-3 py-2"
                placeholder="neuraltalks.io"
              />
            </div>
          </div>

          <div className="px-6 mb-2">
            <label htmlFor="secondary_email" className="block text-sm font-medium text-gray-700">
              Secondary email
            </label>
            <div className="mt-1">
              <input
                type="text"
                name="secondary_email"
                id="secondary_email"
                autoComplete="given-name"
                className="shadow-sm focus:ring-gray-700 focus:border-gray-700 block w-full sm:text-sm rounded-md outline-none border-2 border-gray-300 px-3 py-2"
                placeholder="john.doe@example.com"
              />
            </div>
          </div>

          <div className="px-6 mb-2">
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
              Phone number
            </label>
            <div className="mt-1">
              <input
                type="text"
                name="phone"
                id="phone"
                autoComplete="given-name"
                className="shadow-sm focus:ring-gray-700 focus:border-gray-700 block w-full sm:text-sm rounded-md outline-none border-2 border-gray-300 px-3 py-2"
                placeholder="+46767666457"
              />
            </div>
          </div>

          <div className="py-4 px-6 mt-2 flex items-start flex-row-reverse border-t-1 border-gray-500">
            <button
              type="button"
              className="w-full inline-flex justify-center rounded-md border boder-transparent shadow-sm px-4 py-2 bg-gray-700 font-medium text-gray-100 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 ml-3 sm:w-auto"
            >
              Create
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

CreateUserDialog.defaultProps = {
  isOpen: false,
};
