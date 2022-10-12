import React from 'react';
import Footer from '../Shared/Footer';

const Contacts = () => {
  return (
    <>

      <h1 className="text-5xl font-bold text-center my-10 uppercase">Contact us</h1>
      <Footer></Footer>
      <form action="">
        <label className="flex label">
          <span className="text-gray-700 w-5/12">Address <span className="text-red-600">*</span></span>
          <input type="text" className="mr-5 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300  focus:ring focus:ring-indigo-200 focus:ring-opacity-50 form-input" placeholder="Street Address"
          />
          <input type="text" className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 form-input" placeholder="Street Address Line 2"
          />
        </label>
        <label className="flex label">
          <span className="text-gray-700 w-1/6"></span>
          <input type="text" className="block w-5/6 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 form-input" placeholder="Street Address Line 2"
          />
        </label>
        <label className="flex mt-3">
          <span className="text-gray-700 w-2/12">Phone <span className="text-red-600">*</span></span>
          <input type="text" className="block rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 form-input" placeholder="Phone No."
          />
        </label>
      </form>
    </>
  );
};

export default Contacts;