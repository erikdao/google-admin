import React, { useState } from 'react';
import { IErrorProps, TLoginCred } from 'src/types';

import { LoginForm } from '../components/auth';

export function Login(): JSX.Element {
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<IErrorProps[]>([]);

  const sleep = () => new Promise((resolve) => setTimeout(resolve, 3000));

  const handleLoginSubmit = async (data: TLoginCred): Promise<void> => {
    // eslint-disable-next-line
    setLoading(true);
    await sleep();
    setErrors([{ target: 'email' }, { target: 'password' }]);
    setLoading(false);
  };

  return (
    <div className="font-sans antialiased text-gray-600 bg-gray-100 h-screen min-h-full flex flex-col relative">
      <main className="relative z-10 flex-auto flex items-center justify-center text-sm text-center text-gray-600 py-16 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-sm">
          <h1 className="text-center font-normal text-4xl mb-6">Sign in</h1>
          {errors && errors.length > 0 && (
            <p className="text-center font-bold text-red-500 mb-6">
              These credentials don&apos;t match our records.
            </p>
          )}
          <LoginForm errors={errors} loading={loading} onSubmit={handleLoginSubmit} />
        </div>
      </main>

      <footer className="relative z-10 flex-none text-sm text-center p-4 sm:px-6 lg:px-8">
        <div className="text-gray-900 sm:flex sm:items-center sm:justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <p>Don&apos;t have account?</p>
          <a href="/" className="rounded-md border border-gray-300 hover:border-gray-400 py-2 px-10 font-medium flex items-center justify-center">Sign up</a>
        </div>
      </footer>
    </div>
  );
}
