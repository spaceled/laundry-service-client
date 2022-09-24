import React from 'react';

const PrimaryButton = ({children}) => {
  return (
    <button className="btn btn-success bg-green-400 uppercase text-white font-bold btn-xs sm:btn-sm md:btn-md lg:btn-lg">{children}</button>
  );
};

export default PrimaryButton;