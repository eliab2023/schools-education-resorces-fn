import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="flex justify-between items-center bg-white shadow-md fixed w-full p-4 top-0">
      <h1 className="text-xl font-semibold">
        <Link to="/">Online Exam Simulation Platform</Link>
      </h1>

      {/* Responsive Navigation */}
      <div className="lg:hidden">
        <button
          onClick={toggleMenu}
          className="text-gray-600 focus:outline-none hover:text-gray-800"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>

      {/* Links */}
      <nav className={`lg:flex lg:gap-4 ${isMenuOpen ? "flex flex-col" : "hidden"}`}>
        <Link
          to="/exams"
          className="text-sm font-medium text-gray-600 hover:text-gray-800"
        >
          Exams
        </Link>
        <Link
          to="/results"
          className="text-sm font-medium text-gray-600 hover:text-gray-800"
        >
          {/* Results */}
        </Link>
        <Link
          to="/register"
          className="text-sm font-medium text-gray-600 hover:text-gray-800"
        >
          Register
        </Link>
        <Link
          to="/login"
          className="text-sm font-medium text-gray-600 hover:text-gray-800"
        >
          Login
        </Link>
      </nav>
    </header>
  );
};

export default Header;
