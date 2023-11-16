import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/header';
import Footer from '../components/footer';

const Register = () => {
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    role: 'parent', // Default role
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted with data:', formData);
  };

  return (
    <div className="min-h-screen flex flex-col relative">
      <Header />

      <div className="flex-1 flex items-center justify-center bg-blue-200">
        <div className="bg-white p-8 shadow-md rounded-md w-96">
          <h2 className="text-2xl font-semibold text-center">Register</h2>

          <form className="mt-4 space-y-4" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 p-2 block w-full rounded-md border-blue-500 border-2 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                required
              />
            </div>

            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="mt-1 p-2 block w-full rounded-md border-blue-500 border-2 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                required
              />
            </div>

            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="mt-1 p-2 block w-full rounded-md border-blue-500 border-2 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                required
              />
            </div>

            <div>
              <label htmlFor="role" className="block text-sm font-medium text-gray-700">
                Role
              </label>
              <select
                id="role"
                name="role"
                value={formData.role}
                onChange={handleChange}
                className="mt-1 p-2 block w-full rounded-md border-blue-500 border-2 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              >
                <option value="parent">Parent</option>
                <option value="student">Student</option>
                <option value="teacher">Teacher</option>
                <option value="schoolAdmin">School Admin</option>
              </select>
            </div>

            <button
              type="submit"
              className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
            >
              Register
            </button>
          </form>

          {/* Link to the login page */}
          <div className="text-center mt-2">
            <p>
              Already have an account?{' '}
              <Link
                to="/login"
                className="text-blue-500 hover:underline focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
              >
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Register;
