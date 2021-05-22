import { Menu, Popover, Transition } from '@headlessui/react';
import { BellIcon, SearchCircleIcon } from '@heroicons/react/solid';
import React, { Fragment, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Trans } from '@lingui/macro';
import * as contexts from 'src/contexts';

export function Header(): JSX.Element {
  const { user, logout } = useContext(contexts.UserContext);

  const handleSignout = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    logout();
  };

  return (
    <header className="w-100 z-10 px-4 sm:px-4 lg:px-6 bg-gray-700 text-gray-100 shadow-lg">
      <div className="relative h-16 flex justify-between">
        <div className="flex-0 flex-shrink-0 flex-grow flex items-center">
          <div className="flex-0 flex-grow-0 text-2xl">
            <Link to="/" className="flex items-center">
              <>
                <h1 className="font-bold leading-4 mr-1">Google</h1>
                <h1 className="font-thin leading-4">Admin</h1>
              </>
            </Link>
          </div>

          <div className="flex-1 flex-grow flex items-center ml-6 text-sm">
            <div className="relative w-3/4 lg:w-3/5">
              <div className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
                <SearchCircleIcon className="h-5 w-5 flex-shrink-0 text-gray-400" />
              </div>
              <input
                id="search"
                type="text"
                className="block w-full bg-gray-800 text-gray-800 outline-none focus:outline-none focus:bg-gray-50 px-3 py-2 pl-10 rounded transition-colors duration-150 ease-in-out"
                placeholder="Search for users, groups or settings"
              />
            </div>
          </div>
        </div>

        <div className="flex-1 flex-shrink-0 flex-grow-0 ml-4 flex items-center">
          <Popover className="relative">
            <Popover.Button className="flex-shrink-0 rounded-full p-1 hover:bg-gray-800 hover:text-white focus:outline-none focus:bg-gray-900 focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-gray-600">
              <BellIcon className="h-6 w-6" />
            </Popover.Button>

            <Popover.Panel className="absolute z-10 bg-white origin-top-right right-0 rounded-md shadow-lg mt-2 w-screen max-w-sm">
              <div className="p-3 text-gray-700 text-sm text-left">
                <p className="font-semibold text-base">You currently have no notifications</p>
                <p className="text-sm text-gray-500 mt-2">You&apos;ll get notifications for important events in your organization here.</p>
              </div>
            </Popover.Panel>
          </Popover>
          <Menu as="div" className="inline-block text-left relative w-8 ml-4">
            {({ open }) => (
              <>
                <div>
                  <Menu.Button className="flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-700 focus:ring-gray-600">
                    <span className="sr-only">Open user menu</span>
                    <img
                      className="h-8 w-8 rounded-full"
                      src={user.profileImage}
                      alt={`${user.firstName} ${user.lastName}`}
                    />
                  </Menu.Button>
                </div>
                <Transition
                  show={open}
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items
                    static
                    className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none"
                  >
                    <div className="px-4 py-3">
                      <p className="text-sm text-gray-600">Signed in as</p>
                      <p className="text-sm font-medium text-gray-900 truncate">{user.email}</p>
                    </div>
                    <div className="py-1">
                      <Menu.Item>
                        <Link
                          to="/my-profile"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          <Trans id="header.usermenu.profile" />
                        </Link>
                      </Menu.Item>
                      <Menu.Item>
                        <Link
                          to="/settings"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          <Trans id="header.usermenu.settings" />
                        </Link>
                      </Menu.Item>
                      <Menu.Item>
                        <Link
                          to="/"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          onClick={handleSignout}
                        >
                          <Trans id="header.usermenu.signout" />
                        </Link>
                      </Menu.Item>
                    </div>
                  </Menu.Items>
                </Transition>
              </>
            )}
          </Menu>
        </div>
      </div>
    </header>
  );
}
