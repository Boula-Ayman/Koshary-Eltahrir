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
import { useCart } from "../context/CartContext";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { cartlist } = useCart();

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
              الرئيسية
            </Link>
            <Link
              to="/menu"
              className="hover:text-[#8dc88c]  text-gray-700 font-bold"
            >
              القائمة
            </Link>
            <Link
              to="/about"
              className="hover:text-[#8dc88c]  text-gray-700 font-bold"
            >
              عن المتجر
            </Link>
            <Link
              to="/contact"
              className="hover:text-[#8dc88c]  text-gray-700 font-bold"
            >
              تواصل معنا
            </Link>
          </div>
          {/* Icons */}
          <div className="flex items-center space-x-4 relative">
            {/* <Heart className="text-gray-700 hover:text-[#8dc88c] cursor-pointer" /> */}
            <Link
              to="/cart"
              className="text-gray-700 hover:text-[#8dc88c] cursor-pointer relative"
            >
              <ShoppingCart size={24} />
              {cartlist.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
                  {cartlist.length}
                </span>
              )}
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
              <span>الرئيسية</span>
            </Link>
            <Link
              to="/menu"
              className="flex items-center space-x-3 hover:text-[#8dc88c] text-gray-700 font-bold py-3 px-4 rounded-lg hover:bg-[#f0f9f0] transition-all duration-200"
              onClick={() => setIsOpen(false)}
            >
              <Utensils size={20} />
              <span>القائمة</span>
            </Link>
            <Link
              to="/about"
              className="flex items-center space-x-3 hover:text-[#8dc88c] text-gray-700 font-bold py-3 px-4 rounded-lg hover:bg-[#f0f9f0] transition-all duration-200"
              onClick={() => setIsOpen(false)}
            >
              <Info size={20} />
              <span>عن المتجر</span>
            </Link>
            <Link
              to="/contact"
              className="flex items-center space-x-3 hover:text-[#8dc88c] text-gray-700 font-bold py-3 px-4 rounded-lg hover:bg-[#f0f9f0] transition-all duration-200"
              onClick={() => setIsOpen(false)}
            >
              <Phone size={20} />
              <span>تواصل معنا</span>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
