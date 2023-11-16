import React from 'react';
import { Link } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';
import Header from '../components/header';
import Footer from '../components/footer';

const Login = () => {
  return (
    <div className="min-h-screen flex flex-col relative">
      <Header />

      <div className="flex-1 flex items-center justify-center bg-blue-200">
        <div className="bg-white p-8 shadow-md rounded-md w-96">
          <h2 className="text-2xl font-semibold text-center">Login</h2>

          <form className="mt-4 space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 p-2 block w-full rounded-md border-blue-500 border-2 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="mt-1 p-2 block w-full rounded-md border-blue-500 border-2 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              />
            </div>

            <button
              type="submit"
              className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
            >
              Login
            </button>

            <div className="text-center">
              <p className="text-gray-600">Or log in with:</p>
              <button
                className="mt-2 bg-gray-200 p-2 rounded-full hover:bg-gray-300 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50"
              >
                <FaGoogle size={20} />
                <span className="ml-2">Login with Google</span>
              </button>
            </div>

            {/* Link to the registration page */}
            <div className="text-center mt-2">
              <Link
                to="/register"
                className="text-blue-500 hover:underline focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
              >
                Register
              </Link>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Login;
