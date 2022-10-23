import React from 'react';

const Heading = () => {

  return (
    // grid grid-flow-col w-auto sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3
    <div className="container mx-auto">
      <div className="m-10">
        <div class="grid sm:grid-cols-1 lg:grid-flow-col auto-cols-auto">
          <div className="flex">
            <svg class="h-10 w-10 text-green-500" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <circle cx="12" cy="11" r="3" />  <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 0 1 -2.827 0l-4.244-4.243a8 8 0 1 1 11.314 0z" /></svg>
            <div>
              <p>5604 Willow Crossing Ct,Clifton, VA, 20124</p>
            </div>
          </div>
          <div className="mx-10 px-5">
            <h1 className="text-4xl font-bold text-center"><span className="text-green-400">PRO</span>LAUNDRY <span className="text-2xl">&</span> <span className="text-sky-400">DRY</span>CLEANING</h1>
            <h3 className="text-xl text-center">Save time, Enjoy life</h3>
          </div>
          <div>
          </div>
          <div className="flex mx-5 px-5">
            <svg class="h-10 w-10 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <div>
              <h1>1 (800) 123-45-67</h1>
              <h3>Mon.-Fri. 7:00 AM to 7:00 PM</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Heading;