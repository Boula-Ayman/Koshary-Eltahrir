import React, { useState } from "react";

interface ButtonProps {
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <button
      onClick={handleClick}
      className={`${
        isClicked ? "bg-[#8dc88c]" : "bg-white"
      } border-2 border-[#8dc88c] hover:bg-[#8dc88c] text-gray-600 font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105 capitalize`}
    >
      {children}
    </button>
  );
};

export default Button;
