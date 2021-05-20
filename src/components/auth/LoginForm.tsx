import React, { useState } from 'react';
import clsx from 'clsx';
import { ExclamationCircleIcon } from '@heroicons/react/solid';
import { IErrorProps, TLoginCred, hasError } from '../../types';

interface ILoginFormProps {
  errors?: IErrorProps[];

  /** Whether the form should be in waiting state */
  loading?: boolean;

  /** Callback invoke when the form is submitted */
  onSubmit: (params: TLoginCred) => Promise<void>;
}

export function LoginForm(props: ILoginFormProps): JSX.Element {
  const { loading, errors } = props;

  const [data, setData] = useState<TLoginCred>({
    email: '', password: '',
  });

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    const d = { ...data, [event.currentTarget.name]: event.currentTarget.value };
    setData(d);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (props.onSubmit) {
      props.onSubmit(data);
    }
  };

  const fieldClass = (field: string) => clsx(
    'text-gray-900 ring-opacity-5 appearance-none bg-white rounded-md block w-full px-3 py-2 border shadow ring-1 sm:text-sm mb-4 focus:outline-none',
    { 'ring-gray-900 border-transparent placeholder-gray-400 focus:border-teal-500 focus:ring-teal-500': !hasError(errors, field) },
    { 'ring-red-500 border-red-500 placeholder-red-500 focus:border-red-500 focus:ring-red-500': hasError(errors, field) },
  );

  return (
    <form action="#" method="POST" onSubmit={handleSubmit}>
      <input type="hidden" value="true" name="remember" />
      <div className="relative">
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
        />
        {hasError(errors, 'email') && (
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <ExclamationCircleIcon className="h-5 w-5 text-red-500" aria-hidden="true" />
          </div>
        )}
      </div>
      <div className="relative">
        <input
          type="password"
          name="password"
          id="password"
          required
          className={fieldClass('password')}
          placeholder="Password"
          value={data.password}
          onChange={handleChange}
          autoComplete="off"
        />
        {hasError(errors, 'password') && (
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <ExclamationCircleIcon className="h-5 w-5 text-red-500" aria-hidden="true" />
          </div>
        )}
      </div>
      <button
        type="submit"
        disabled={loading}
        className="block w-full py-2 px-3 border border-transparent rounded-md text-white font-medium bg-gray-700 shadow-sm sm:text-sm mb-10 hover:bg-gray-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-700 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-50 disabled:opacity-50"
      >
        Sign in to account
      </button>
      <p className="text-center">
        <a href="/" className="text-sm underline hover:text-gray-900">Forgot password?</a>
      </p>
    </form>
  );
}

LoginForm.defaultProps = {
  errors: [],
  loading: false,
};
