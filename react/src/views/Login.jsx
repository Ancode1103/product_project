import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import axiosClient from '../axios';
import { LockClosedIcon } from '@heroicons/react/24/solid';
import { useStateContext } from '../contexts/ContextProvider';

export default function Login() {

  const {setCurrentUser, setUserToken } = useStateContext();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState({ __htmlhtml: ''});

  const onSubmit = (ev) => {
    ev.preventDefault();
    setError({ __html: ''})
    
    axiosClient
      .post('/login',{
        email,
        password,
      })
      .then(({data}) => {
        setCurrentUser(data.user)
        setUserToken(data.token)
      })
      .catch(( error ) => {
        if (error.response) {
          const finalErrors = Object.values(error.response.data.errors).reduce((accum,next) => [...accum, ...next ], [])
          setError({ __html: finalErrors.join('<br>')})
        }
        console.error(error)
      });

  };

  return (
    <>
    
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
            Sign in to your account
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Or{" "}
            <Link
              to="/signup"
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              signup for free
            </Link>
          </p>
          

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          
          {error.__html &&  (<div className=" bg-red-500 rounded py-2 px-3 text-white"
          dangerouslySetInnerHTML={error}>
          </div> )}
          
          <form onSubmit={onSubmit} className="space-y-6" action="#" method="POST">
            <div>
              <div>
                <input
                  id="email_address"
                  name="email"
                  type="text"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={ev => setEmail(ev.target.value)}
                  className="relative block w-full rounded-none border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Email address"
                />
              </div>
              <div>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={ev => setPassword(ev.target.value)}
                  className="relative block w-full rounded-noo border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder='Password'
                />
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-sm text-gray-900"
                >
                  Remember me
                </label>
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="group relative flex w-full justify-center rounded-noo bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                <span className="adsolute inset-y-0 left-0 flex items-center pl-3">
                  <LockClosedIcon
                    className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                    aria-hidden="true"
                  />
                </span>
                Sign in
              </button>
            </div>
          </form>
        </div>
    </>
  )
}