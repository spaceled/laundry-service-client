import React from 'react';

const Heading = () => {

  return (
    <div>
      {/* <div className="grid grid-flow-col gap-4 m-12"> */}
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 m-12 gap-10">
        <div className="flex">
          <svg className="fill-teal-400 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
          <div>
            <p>5604 Willow Crossing Ct,</p>
            <p>Clifton, VA, 20124</p>
          </div>
        </div>
        <div>
          <h1 className="text-3xl">PROLAUNDRY & DRY CLEANING</h1>
          <h3 className="text-xl">Save time, Enjoy life</h3>
        </div>
        <div>

        </div>
        <div className="flex">
          <svg className="fill-teal-400 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
          <div>
            <h1>1 (800) 123-45-67</h1>
            <h3>Mon.-Fri. 7:00 AM to 7:00 PM</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Heading;