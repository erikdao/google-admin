/* eslint-disable jsx-a11y/label-has-associated-control */
import { Dialog, Listbox } from '@headlessui/react';
import clsx from 'clsx';
import React, { useRef, useState } from 'react';
import { IDialogProps } from 'src/types';

const MONTHS = [
  { id: null, name: ' ' },
  { id: 1, name: 'January' },
  { id: 2, name: 'February' },
  { id: 3, name: 'March' },
  { id: 4, name: 'April' },
  { id: 5, name: 'May' },
  { id: 6, name: 'June' },
  { id: 7, name: 'July' },
  { id: 8, name: 'August' },
  { id: 9, name: 'September' },
  { id: 10, name: 'October' },
  { id: 11, name: 'November' },
  { id: 12, name: 'December' },
];

export function BirthdayDialog(props: IDialogProps): JSX.Element {
  const ref = useRef(null);

  const { isOpen, onClose } = props;
  const [selectedMonth, setSelectedMonth] = useState(MONTHS[0]);
  const [error, setError] = useState<string>('');

  return (
    <Dialog
      as="div"
      open={isOpen}
      initialFocus={ref}
      onClose={onClose}
      className="fixed z-1 inset-0 overflow-hidden"
    >
      <div className="flex items-center justify-center min-h-screen p-4 text-cetner">
        <Dialog.Overlay className="fixed inset-0 bg-gray-500 opacity-50" />

        <div className="inline-block z-10 bg-white rounded text-left shadow-xl max-w-1/2 w-1/3">
          <Dialog.Title className="w-100 py-4 px-6 bg-gray-700 text-lg text-gray-100 font-bold rounded-t">Update birthday</Dialog.Title>

          <div className="px-6 mb-2 mt-4 flex items-center">
            <div className="w-2/4 mr-2">
              <Listbox value={selectedMonth} onChange={setSelectedMonth}>
                {({ open }) => (
                  <>
                    <Listbox.Label className="block text-sm font-medium text-gray-700">Month</Listbox.Label>
                    <div className="mt-1 relative">
                      <Listbox.Button
                        className={clsx(
                          'bg-white relative h-10 w-full border rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 sm:text-sm',
                          { 'text-gray-700 border-gray-300 focus:ring-gray-600 focus:border-gray-600': !error },
                          { 'text-red-900 border-red-500 focus:ring-red-500 focus:border-red-500 placeholder-red-500': error },
                        )}
                      >
                        <span className="block">{selectedMonth.name}</span>
                      </Listbox.Button>

                      {open && (
                        <Listbox.Options
                          static
                          className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm"
                        >
                          {MONTHS.map((month) => (
                            <Listbox.Option
                              key={month.id}
                              className={({ active }) => clsx(
                                active ? 'text-white bg-gray-600' : 'text-gray-900',
                                'cursor-default select-none relative py-2 pl-3 pr-9',
                              )}
                              value={month}
                            >
                              {({ selected }) => (
                                <>
                                  <span className={clsx(selected ? 'font-semibold' : 'font-normal', 'block truncate')}>
                                    {month.name}
                                  </span>
                                </>
                              )}
                            </Listbox.Option>
                          ))}
                        </Listbox.Options>
                      )}
                    </div>
                  </>
                )}
              </Listbox>
            </div>

            <div className="w-1/4 flex flex-col mr-2">
              <div className="relative">
                <label htmlFor="day" className="block text-sm font-medium">
                  Day
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="day"
                    id="day"
                    className={clsx(
                      'bg-white relative h-10 w-full border rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 sm:text-sm',
                      { 'text-gray-700 border-gray-300 focus:ring-gray-600 focus:border-gray-600': !error },
                      { 'text-red-900 border-red-500 focus:ring-red-500 focus:border-red-500 placeholder-red-500': error },
                    )}
                    placeholder="DD"
                  />
                </div>
              </div>
            </div>

            <div className="w-1/4 flex flex-col">
              <div className="relative">
                <label htmlFor="day" className="block text-sm font-medium text-gray-700">
                  Year
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="year"
                    id="year"
                    className={clsx(
                      'bg-white relative h-10 w-full border rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 sm:text-sm',
                      { 'text-gray-700 border-gray-300 focus:ring-gray-600 focus:border-gray-600': !error },
                      { 'text-red-900 border-red-500 focus:ring-red-500 focus:border-red-500 placeholder-red-500': error },
                    )}
                    placeholder="YYYY"
                  />
                </div>
              </div>
            </div>
          </div>
          {error && <p className="mt-2 px-6 text-sm text-red-600">{error}</p>}

          <div className="px-6 mt-4 text-sm text-gray-500">
            Once you add info you can choose who can see it. <a href="/" className="text-red-700">Learn more</a>
          </div>

          <div className="py-4 px-6 mt-16 flex items-start flex-row-reverse border-t-1 border-gray-500">
            <button
              ref={ref}
              type="button"
              onClick={() => setError('Enter a valid birthday')}
              className="w-full inline-flex justify-center rounded-md border boder-transparent shadow-sm px-4 py-2 bg-gray-700 font-medium text-gray-100 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 ml-3 sm:w-auto"
            >
              Save
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
