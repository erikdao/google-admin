import React from 'react';

export function Login(): JSX.Element {
  return (
    <div className="font-sans antialiased text-gray-600 bg-gray-100 h-screen min-h-full flex flex-col relative">
      <main className="relative z-10 flex-auto flex items-center justify-center text-sm text-center text-gray-600 py-16 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-sm">
          <h1 className="text-center font-normal text-3xl mb-6">Sign in</h1>
          <form action="#" method="POST">
            <input type="hidden" value="true" name="remember" />
            <div className="relative">
              <input type="email" name="email" id="email" required className="text-gray-900 ring-gray-900 ring-opacity-5 placeholder-gray-400 appearance-none bg-white rounded-md block w-full px-3 py-2 border border-transparent shadow ring-1 sm:text-sm mb-4 focus:border-teal-500 focus:ring-teal-500 focus:outline-none" placeholder="Email address" />
            </div>
            <div className="relative">
              <input type="password" name="password" id="password" required className="text-gray-900 ring-gray-900 ring-opacity-5 placeholder-gray-400 appearance-none bg-white rounded-md block w-full px-3 py-2 border border-transparent shadow ring-1 sm:text-sm mb-6 focus:border-teal-500 focus:ring-teal-500 focus:outline-none" placeholder="Password" />
            </div>
            <button type="submit" className="block w-full py-2 px-3 border border-transparent rounded-md text-white font-medium bg-gray-700 shadow-sm sm:text-sm mb-10 hover:bg-gray-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-700 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-50">Sign in to account</button>
            <p className="text-center">
              <a href="/" className="text-sm underline hover:text-gray-900">Forgot password?</a>
            </p>
          </form>
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
