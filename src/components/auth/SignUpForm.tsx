/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import clsx from 'clsx';
import { ExclamationCircleIcon } from '@heroicons/react/solid';
import {
  IErrorProps,
  TLoginCred,
  hasError,
  getErrorByField,
} from '../../types';

interface ISignUpFormProps {
  errors?: IErrorProps[];

  /** Whether the form should be in waiting state */
  loading?: boolean;

  /** Callback invoke when the form is submitted */
  onSubmit: (params: TLoginCred) => Promise<void>;
}

type TSignUpCred = TLoginCred & {
  passwordConfirm: string;
}

function validatePassword(creds: TSignUpCred): boolean {
  const { password, passwordConfirm } = creds;
  if (password && passwordConfirm && (password !== passwordConfirm)) {
    return false;
  }
  return true;
}

function validateCreds(creds: TSignUpCred): IErrorProps[] {
  const errors: IErrorProps[] = [];
  if (!validatePassword(creds)) {
    errors.push({ target: 'password', message: 'Password confirm does not match' });
    errors.push({ target: 'passwordConfirm', message: 'Password confirm does not match' });
  }
  console.log('errors', errors);
  return errors;
}

export function SignUpForm(props: ISignUpFormProps): JSX.Element {
  const { loading } = props;
  const [data, setData] = useState<TSignUpCred>({
    email: '', password: '', passwordConfirm: '',
  });
  // eslint-disable-next-line react/destructuring-assignment
  const [errors, setErrors] = useState<IErrorProps[]>(props.errors || []);

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    const d = { ...data, [event.currentTarget.name]: event.currentTarget.value };
    setData(d);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const valErrs: IErrorProps[] = validateCreds(data);
    if (valErrs && valErrs.length) {
      setErrors(valErrs);
    } else {
      setErrors([]);
    }

    if (errors.length === 0 && props.onSubmit) {
      props.onSubmit(data);
    }
  };

  const fieldClass = (field: string) => clsx(
    'text-gray-900 ring-opacity-5 appearance-none bg-white rounded-md block w-full px-3 py-2 border shadow ring-1 sm:text-sm focus:outline-none',
    { 'ring-gray-900 border-transparent placeholder-gray-400 focus:border-teal-500 focus:ring-teal-500': !hasError(errors, field) },
    { 'ring-red-500 border-red-500 placeholder-red-500 focus:border-red-500 focus:ring-red-500': hasError(errors, field) },
  );

  return (
    <form action="#" method="POST" onSubmit={handleSubmit} className="text-left">
      <input type="hidden" value="true" name="remember" />
      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email
        </label>
        <div className="mt-1 relative">
          <input
            type="email"
            name="email"
            id="email"
            required
            className={fieldClass('email')}
            placeholder="Email address"
            value={data.email}
            onChange={handleChange}
            aria-invalid="true"
            aria-describedby="email-error"
            autoComplete="nah"
          />
          {hasError(errors, 'email') && (
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              <ExclamationCircleIcon className="h-5 w-5 text-red-500" aria-hidden="true" />
            </div>
          )}
        </div>
      </div>

      <div className="mb-4">
        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
          Password
        </label>
        <div className="mt-1 relative">
          <input
            type="password"
            name="password"
            id="password"
            required
            className={fieldClass('password')}
            placeholder="Password"
            value={data.password}
            onChange={handleChange}
            aria-invalid="true"
            aria-describedby="password-error"
            autoComplete="nah"
          />
          {hasError(errors, 'password') && (
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              <ExclamationCircleIcon className="h-5 w-5 text-red-500" aria-hidden="true" />
            </div>
          )}
        </div>
        {hasError(errors, 'password') && (
          <p className="mt-1 text-sm text-red-600">
            {getErrorByField(errors, 'password').message}
          </p>
        )}
      </div>

      <div className="mb-4">
        <label htmlFor="passwordConfirm" className="block text-sm font-medium text-gray-700">
          Confirm password
        </label>
        <div className="mt-1 relative">
          <input
            type="password"
            name="passwordConfirm"
            id="passwordConfirm"
            required
            className={fieldClass('passwordConfirm')}
            placeholder="Confirm password"
            value={data.passwordConfirm}
            onChange={handleChange}
            autoComplete="nah"
          />
          {hasError(errors, 'passwordConfirm') && (
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              <ExclamationCircleIcon className="h-5 w-5 text-red-500" aria-hidden="true" />
            </div>
          )}
        </div>
        {hasError(errors, 'passwordConfirm') && (
          <p className="mt-1 text-sm text-red-600">
            {getErrorByField(errors, 'passwordConfirm').message}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={loading}
        className="block w-full py-2 px-3 border border-transparent rounded-md text-white font-medium bg-gray-700 shadow-sm sm:text-sm mb-10 hover:bg-gray-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-700 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-50 disabled:opacity-50"
      >
        Sign up
      </button>
    </form>
  );
}

SignUpForm.defaultProps = {
  errors: [],
  loading: false,
};
