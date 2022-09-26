import React from 'react';

const ReUse = ({children}) => {
  return (
    <div>
      <h1>{children}</h1>
      <p>{children.pragraph}</p>
    </div>
  );
};

export default ReUse;