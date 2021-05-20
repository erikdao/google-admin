import React, { useState } from 'react';
import { TLoginCred } from '../../types';

interface ILoginFormProps {
  loading?: boolean;
  onSubmit: (params: TLoginCred) => Promise<void>;
}

export function LoginForm(props: ILoginFormProps): JSX.Element {
  const { loading } = props;

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

  return (
    <form action="#" method="POST" onSubmit={handleSubmit}>
      <input type="hidden" value="true" name="remember" />
      <div className="relative">
        <input
          type="email"
          name="email"
          id="email"
          required
          className="text-gray-900 ring-gray-900 ring-opacity-5 placeholder-gray-400 appearance-none bg-white rounded-md block w-full px-3 py-2 border border-transparent shadow ring-1 sm:text-sm mb-4 focus:border-teal-500 focus:ring-teal-500  focus:outline-none"
          placeholder="Email address"
          value={data.email}
          onChange={handleChange}
          autoComplete="off"
        />
      </div>
      <div className="relative">
        <input
          type="password"
          name="password"
          id="password"
          required
          className="text-gray-900 ring-gray-900 ring-opacity-5 placeholder-gray-400 appearance-none bg-white rounded-md block w-full px-3 py-2 border border-transparent shadow ring-1 sm:text-sm mb-6 focus:border-teal-500 focus:ring-teal-500 focus:outline-none"
          placeholder="Password"
          value={data.password}
          onChange={handleChange}
          autoComplete="off"
        />
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
  loading: false,
};
