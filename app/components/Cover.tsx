import React from "react";

const Cover: React.FC = () => {
  return (
    <div className="h-100 flex justify-center items-center bg-cover bg-center">
      <img
        src="/images/cover.png"
        alt="غلاف المطعم"
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default Cover;
