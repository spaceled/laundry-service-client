import React from 'react';

const H1 = ({children}) => {
  return (
    <>
      <h1 className="text-5xl font-bold text-center my-10 uppercase">{children}</h1>
      <div className="border-b-4 border-green-500 border-box w-32 mx-auto mb-5"></div>
    </>
  );
};

export default H1;