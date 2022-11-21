import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import PrimaryButton from '../Shared/PrimaryButton';

const OrderOnline = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      firstName: '',
      select: {}
    }
  });
  const onSubmit = data => console.log(data);
  return (
    <div>
      <input type="checkbox" id="order-modal" className="modal-toggle" />
      <div className="modal zoom-anim-dialog white-popup">
        <div className="modal-box w-11/12 max-w-5xl">
          <label htmlFor="order-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
          <div className="antialiased text-gray-900 px-6">
            <div className="max-w-xl mx-auto py-12 md:max-w-4xl">
              <h2 className="text-3xl font-bold uppercase text-center">order form</h2>
              <form action="">
                <div className="mt-8 grid grid-cols-1 md:grid-cols-1   sm:grid-cols-2 items-start">
                  <label className="flex label">
                    <span className="text-gray-700 w-2/12">Name <span className="text-red-600">*</span></span>
                    <input type="text" className="mr-2 block w-5/12 rounded-md border-gray-300 shadow-sm focus:border-indigo-300  focus:ring focus:ring-indigo-200 focus:ring-opacity-50 form-input" placeholder="First Name"
                    />
                    <input type="text" className="block w-5/12 rounded-md border-gray-300 shadow-sm focus:border-indigo-300  focus:ring focus:ring-indigo-200 focus:ring-opacity-50 form-input" placeholder="Last Name"
                    />
                  </label>
                  <label className="flex label">
                    <span className="text-gray-700 w-2/12">Address <span className="text-red-600">*</span></span>
                    <input type="text" className="mr-2 block w-5/12 rounded-md border-gray-300 shadow-sm focus:border-indigo-300  focus:ring focus:ring-indigo-200 focus:ring-opacity-50 form-input" placeholder="Street Address"
                    />
                    <input type="text" className="block w-5/12 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 form-input" placeholder="Street Address Line 2"
                    />
                  </label>
                  <label className="flex mt-2">
                    <span className="text-gray-700 w-2/12"></span>
                    <input type="text" className="block w-5/12 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 form-input" placeholder="ZIP / Postal Code"
                    />
                  </label>
                  <label className="flex mt-2">
                    <span className="text-gray-700 w-2/12">Phone <span className="text-red-600">*</span></span>
                    <input type="text" className="mr-2 block w-5/12 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 form-input" placeholder="Phone No."
                    />
                  </label>
                  <label className="flex mt-2">
                    <span className="text-gray-700 w-2/12">Email <span className="text-red-600">*</span></span>
                    <input type="email" className="block  w-5/12 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 form-input" placeholder="Email Address"
                    />
                  </label>
                  <label className="flex mt-2">
                    <span className="text-gray-700 w-2/12"></span>
                    <select className="block mt-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 w-5/12">
                      <option >The Laundry will be with doorman</option>
                      <option>The Laundry will not be with doorman</option>
                    </select>
                  </label>
                  <label className="flex mt-3">
                    <span className="text-gray-700 w-2/12">Pick-up Date</span>
                    <input type="date" className="mr-2 block w-5/12 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 form-input" />
                    <span className="text-gray-700 w-2/12">Pick-up Time</span>
                    <input type="time" className="block w-2/12 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 form-input" />
                  </label>
                  <label className="flex mt-3">
                    <span className="text-gray-700 w-2/12">Delivery Date</span>
                    <input type="date" className="mr-2 block w-5/12 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 form-input" />
                    <span className="text-gray-700 w-2/12">Delivery Time</span>
                    <input type="time" className="block w-2/12 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 form-input" />
                  </label>
                  <fieldset className="block flex mt-6">
                    <span className="text-gray-700 w-4/12">Preferred Laundry Detergent</span>
                    <div className="mt-2 flex">
                      <div className="mr-4">
                        <label className="inline-flex items-center">
                          <input className="form-radio" type="radio" name="radio-direct" value="1" />
                          <span className="ml-2">Tide</span>
                        </label>
                      </div>
                      <div className="mr-4">
                        <label className="inline-flex items-center">
                          <input className="form-radio" type="radio" name="radio-direct" value="2" />
                          <span className="ml-2">Gain</span>
                        </label>
                      </div>
                      <div className="mr-4">
                        <label className="inline-flex items-center">
                          <input className="form-radio" type="radio" name="radio-direct" value="3" />
                          <span className="ml-2">All Free & Clear</span>
                        </label>
                      </div>
                      <div className="mr-4">
                        <label className="inline-flex items-center">
                          <input className="form-radio" type="radio" name="radio-direct" value="3" />
                          <span className="ml-2">I Will Provide</span>
                        </label>
                      </div>
                    </div>
                  </fieldset>
                  <fieldset className="block flex mt-6">
                    <span className="text-gray-700 w-4/12">Bleach Whites</span>
                    <div className="mt-2 flex">
                      <div className="mr-4">
                        <label className="inline-flex items-center">
                          <input className="form-radio" type="radio" name="radio-direct" value="1" />
                          <span className="ml-2">Yes</span>
                        </label>
                      </div>
                      <div className="mr-4">
                        <label className="inline-flex items-center">
                          <input className="form-radio" type="radio" name="radio-direct" value="2" />
                          <span className="ml-2">No</span>
                        </label>
                      </div>
                    </div>
                  </fieldset>
                  <fieldset className="block flex mt-6">
                    <span className="text-gray-700 w-4/12">Laundry Bag Needed?</span>
                    <div className="mt-2 flex">
                      <div className="mr-4">
                        <label className="inline-flex items-center">
                          <input className="form-radio" type="radio" name="radio-direct" value="1" />
                          <span className="ml-2">Yes</span>
                        </label>
                      </div>
                      <div className="mr-4">
                        <label className="inline-flex items-center">
                          <input className="form-radio" type="radio" name="radio-direct" value="2" />
                          <span className="ml-2">No</span>
                        </label>
                      </div>
                    </div>
                  </fieldset>
                  <div className="block">
                    <div className="mt-7 text-center">
                      <div>
                        <label className="inline-flex items-center">
                          <input type="checkbox" className=" rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-offset-0 focus:ring-indigo-200 focus:ring-opacity-50 " />
                          <span className="ml-4">Email me news and special offers</span>
                        </label>
                      </div>
                    </div>
                    <label className="flex mt-10">
                      <span className="text-gray-700 w-3/12">Special Instructions <span className="text-red-600">*</span></span>
                      <input type="text" className="block  w-9/12 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 form-input" placeholder="Example: Wash whites with hot water"
                      />
                    </label>
                  </div>
                </div>
                <div className="text-center mt-7">
                <PrimaryButton>Submit Order</PrimaryButton>
                </div>
              </form>
            </div>
          </div>
          {/* <div className="modal-action">
            <label htmlFor="order-modal" className="btn">Close</label>
          </div> */}
        </div>
      </div>
    </div >
  );
};

export default OrderOnline;