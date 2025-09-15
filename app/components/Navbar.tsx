import React from "react";
import Button from "./Button";
import { Link } from "react-router";
const Navbar: React.FC = () => {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo Section */}
          <Link to="/">
            <img
              src="../../public/images/logo.jpg"
              alt="Logo"
              className="h-12 w-auto rounded-full "
            />
          </Link>

          {/* Links */}
          <div className="hidden md:flex space-x-6">
            <Link
              to="/"
              className="hover:text-[#8dc88c] text-gray-700 font-bold"
            >
              Home
            </Link>
            <Link
              to="/menu"
              className="hover:text-[#8dc88c]  text-gray-700 font-bold"
            >
              Menu
            </Link>
            <Link
              to="/about"
              className="hover:text-[#8dc88c]  text-gray-700 font-bold"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="hover:text-[#8dc88c]  text-gray-700 font-bold"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
