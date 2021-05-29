/* eslint-disable jsx-a11y/label-has-associated-control */
import { Dialog } from '@headlessui/react';
import clsx from 'clsx';
import React, {
  useContext, useRef, useState,
} from 'react';
import { AuthContext } from 'src/contexts';
import { updateUserProfile } from 'src/services/auth';
import { IDialogProps } from 'src/types';
import { IAuthUser } from 'src/types/auth';
import { LoadingIcon } from '../common/LoadingIcon';

export function UpdatePhoneDialog(props: IDialogProps): JSX.Element {
  const ref = useRef(null);
  const { authUser, setAuthUser } = useContext(AuthContext);
  const { isOpen, onClose } = props;

  const [loading, setLoading] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState(authUser?.phoneNumber);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(event.currentTarget.value);
  };

  const submitChange = async (): Promise<void> => {
    if (phoneNumber?.length === 0) {
      return;
    }
    setLoading(true);
    try {
      const user: IAuthUser = await updateUserProfile({ phoneNumber });
      setAuthUser(user);
      onClose();
    } catch (error) {
      // eslint-disable-next-line
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog
      as="div"
      open={isOpen}
      onClose={onClose}
      initialFocus={ref}
      className="fixed z-1 inset-0 overflow-hidden"
    >
      <div className="flex items-center justify-center min-h-screen p-4 text-cetner">
        <Dialog.Overlay className="fixed inset-0 bg-gray-500 opacity-50" />

        <div className="inline-block z-10 bg-white rounded text-left shadow-xl max-w-1/2 w-1/3">
          <Dialog.Title className="w-100 py-4 px-6 bg-gray-700 text-lg text-gray-100 font-bold rounded-t">Update phone number</Dialog.Title>

          <div className="px-6 mb-2 mt-4 flex items-center">
            <div className="relative w-full">
              <label htmlFor="day" className="block text-sm font-medium">
                Phone number
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="phoneNumber"
                  id="phoneNumber"
                  className={clsx(
                    'bg-white relative h-10 w-full border rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 sm:text-sm',
                    'text-gray-700 border-gray-300 focus:ring-gray-600 focus:border-gray-600',
                    'disabled:opacity-75',
                  )}
                  value={phoneNumber}
                  onChange={handleChange}
                  placeholder="E.g. (+1) 256 7861"
                />
              </div>
            </div>
          </div>

          <div className="px-6 mb-2 mt-4 flex text-sm text-gray-600">
            Changes to your name will be reflected across your Google Account.
          </div>
          <div className="py-4 px-6 mt-16 flex items-start flex-row-reverse border-t-1 border-gray-500">
            <button
              ref={ref}
              type="button"
              className="w-full inline-flex justify-center items-center rounded-md border boder-transparent shadow-sm px-4 py-2 bg-gray-700 font-medium text-gray-100 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 ml-3 sm:w-auto"
              onClick={submitChange}
              disabled={loading}
            >
              {loading && <LoadingIcon className="mr-3 h-4 w-4 text-gray-200" />}
              <span>Save</span>
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
