import React from 'react';

const Heading = () => {
  return (
    <div>
      {/* <div className="grid grid-flow-col gap-4 m-12"> */}
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 m-12 gap-10">
        <div>
          <p>5604 Willow Crossing Ct,</p>
          <p>Clifton, VA, 20124</p>
        </div>
        <div>
          <h1 className="text-3xl">PROLAUNDRY & DRY CLEANING</h1>
          <h3 className="text-xl">Save time, Enjoy life</h3>
        </div>
        <div>
          <h1>1 (800) 123-45-67</h1>
          <h3>Mon.-Fri. 7:00 AM to 7:00 PM</h3>
        </div>
      </div>
    </div>
  );
};

export default Heading;