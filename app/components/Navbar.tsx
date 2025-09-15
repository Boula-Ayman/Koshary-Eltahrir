import React, { useState } from "react";
import Button from "./Button";
import { Link } from "react-router";
import {
  ShoppingCart,
  Heart,
  Home,
  Utensils,
  Info,
  Phone,
  X,
} from "lucide-react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
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
          {/* Icons */}
          <div className="flex items-center space-x-4">
            {/* <Heart className="text-gray-700 hover:text-[#8dc88c] cursor-pointer" /> */}
            <Link
              to="/cart"
              className="text-gray-700 hover:text-[#8dc88c] cursor-pointer"
            >
              <ShoppingCart size={24} />
            </Link>
            {/* Mobile Toggle */}
            <div className="md:hidden text-gray-700 hover:text-[#8dc88c] cursor-pointer">
              <button
                className="md:hidden text-gray-700"
                onClick={() => setIsOpen(!isOpen)}
              >
                ☰
              </button>
            </div>
          </div>
        </div>
        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-gradient-to-b from-white to-gray-50 p-6 space-y-4 shadow-xl rounded-xl border border-gray-200 mx-4 mb-4 animate-fade-in">
            <div className="flex justify-end">
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-500 hover:text-gray-700 transition-colors duration-200"
              >
                <X size={24} />
              </button>
            </div>
            <Link
              to="/"
              className="flex items-center space-x-3 hover:text-[#8dc88c] text-gray-700 font-bold py-3 px-4 rounded-lg hover:bg-[#f0f9f0] transition-all duration-200"
              onClick={() => setIsOpen(false)}
            >
              <Home size={20} />
              <span>Home</span>
            </Link>
            <Link
              to="/menu"
              className="flex items-center space-x-3 hover:text-[#8dc88c] text-gray-700 font-bold py-3 px-4 rounded-lg hover:bg-[#f0f9f0] transition-all duration-200"
              onClick={() => setIsOpen(false)}
            >
              <Utensils size={20} />
              <span>Menu</span>
            </Link>
            <Link
              to="/about"
              className="flex items-center space-x-3 hover:text-[#8dc88c] text-gray-700 font-bold py-3 px-4 rounded-lg hover:bg-[#f0f9f0] transition-all duration-200"
              onClick={() => setIsOpen(false)}
            >
              <Info size={20} />
              <span>About</span>
            </Link>
            <Link
              to="/contact"
              className="flex items-center space-x-3 hover:text-[#8dc88c] text-gray-700 font-bold py-3 px-4 rounded-lg hover:bg-[#f0f9f0] transition-all duration-200"
              onClick={() => setIsOpen(false)}
            >
              <Phone size={20} />
              <span>Contact</span>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
