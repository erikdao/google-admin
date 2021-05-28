import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import GoogleLogo from 'src/assets/images/google_logo.svg';
import { AuthContext } from 'src/contexts';
import { convertFirebaseUserToAuthUser, signIn } from 'src/services/auth';
import { IErrorProps, TLoginCred } from 'src/types';
import { IAuthUser } from 'src/types/auth';
import { LoginForm } from '../components/auth';

/**
 * @param error Firebase error, attributes include `code`, `message`
 */
// eslint-disable-next-line
function convertFirebaseErrors(error: any) {
  const errors: IErrorProps[] = [];
  const { code, message } = error;
  if (code === 'auth/user-not-found') {
    const err: IErrorProps = {
      target: 'email', message,
    };
    errors.push(err);
  }
  if (code === 'auth/wrong-password') {
    const err: IErrorProps = {
      target: 'password', message,
    };
    errors.push(err);
  }
  return errors;
}

export function Login(): JSX.Element {
  const { setAuthUser } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<IErrorProps[]>([]);

  const login = async (email: string, password: string): Promise<void> => {
    try {
      const fbUser = await signIn(email, password);
      if (fbUser !== null) {
        const authenticatedUser: IAuthUser = convertFirebaseUserToAuthUser(fbUser);
        setAuthUser(authenticatedUser);
      }
    } catch (error) {
      setErrors(convertFirebaseErrors(error));
    }
  };

  const handleLoginSubmit = async (data: TLoginCred): Promise<void> => {
    setLoading(true);
    const { email, password } = data;
    await login(email, password);
    setLoading(false);
  };

  return (
    <div className="font-sans antialiased text-gray-600 bg-bgray-100 h-screen min-h-full flex flex-col relative">
      <main className="relative z-10 flex-auto flex items-center justify-center text-sm text-center text-gray-600 py-16 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-sm p-6 bg-white rounded-xl shadow-xl flex flex-col">
          <h1 className="text-center font-semibold text-4xl mb-8">Log in</h1>
          <div className="flex flex-col divide-y space-y-4 divide-gray-200">
            <div className="w-full">
              <button
                type="button"
                className="w-full flex items-center py-3 px-3 border border-teal-600 shadow-sm text-center font-medium rounded-md text-gray-800 bg-white hover:bg-gray-50 focus:outline-none"
              >
                <img src={GoogleLogo} alt="" className="h-4 w-4" />
                <span className="flex-1 flex-grow text-center">Sign in with Google</span>
              </button>
            </div>
            <div className="w-full pt-6">
              {errors && errors.length > 0 && (
                <p className="text-center font-bold text-red-500 mb-6">
                  These credentials don&apos;t match our records.
                </p>
              )}
              <LoginForm errors={errors} loading={loading} onSubmit={handleLoginSubmit} />
            </div>
          </div>
        </div>
      </main>

      <footer className="relative z-10 flex-none text-sm text-center p-4 sm:px-6 lg:px-8">
        <div className="text-gray-900 sm:flex sm:items-center sm:justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <p>Don&apos;t have an account?</p>
          <Link to="/auth/signup" className="rounded-md border border-gray-300 hover:border-gray-400 py-2 px-10 font-medium flex items-center justify-center">Sign up</Link>
        </div>
      </footer>
    </div>
  );
}
