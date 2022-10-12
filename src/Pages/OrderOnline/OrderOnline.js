import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

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
      <div className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <label htmlFor="order-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
          <div className="antialiased text-gray-900 px-6">
            <div className="max-w-xl mx-auto py-12 md:max-w-4xl">
              <h2 className="text-3xl font-bold uppercase text-center">order form</h2>
              <form action="">
                <div className="mt-8 grid grid-cols-1 md:grid-cols-1 sm:grid-cols-2 items-start">
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
                    <select className="select select-bordered w-5/12">
                      <option >The Laundry will be with doorman</option>
                      <option>The Laundry will not be with doorman</option>
                    </select>
                  </label>
                  <label className="flex mt-3">
                    <span className="text-gray-700 w-2/12">Pick-up Date</span>
                    <input type="date" className="mr-2 block w-5/12 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 form-input" />
                    <span className="text-gray-700 w-2/12">Pick-up Time</span>
                    <input  type="time" className="block w-2/12 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 form-input" />
                  </label>
                  <label className="flex mt-3">
                    <span className="text-gray-700 w-2/12">Delivery Date</span>
                    <input type="date" className="mr-2 block w-5/12 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 form-input" />
                    <span className="text-gray-700 w-2/12">Delivery Time</span>
                    <input  type="time" className="block w-2/12 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 form-input" />
                  </label>
                  <fieldset className="block flex mt-6">
                  <span className="text-gray-700 w-4/12">Preferred Laundry Detergent</span>
                    <div className="mt-2 flex">
                      <div className="mr-4">
                        <label className="inline-flex items-center">
                          <input className="form-radio" type="radio" checked name="radio-direct" value="1" />
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
                      <div>
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
                      <div>
                        <label className="inline-flex items-center">
                          <input className="form-radio" type="radio" checked name="radio-direct" value="1" />
                          <span className="ml-2">Yes</span>
                        </label>
                      </div>
                      <div>
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
                      <div>
                        <label className="inline-flex items-center">
                          <input className="form-radio" type="radio" checked name="radio-direct" value="1" />
                          <span className="ml-2">Yes</span>
                        </label>
                      </div>
                      <div>
                        <label className="inline-flex items-center">
                          <input className="form-radio" type="radio" name="radio-direct" value="2" />
                          <span className="ml-2">No</span>
                        </label>
                      </div>
                    </div>
                  </fieldset>
                  <label className="block">
                    <span className="text-gray-700">Input (datetime-local)</span>
                    <input type="datetime-local" className="form-input mt-1 block w-full" />
                  </label>
                  <label className="block">
                    <span className="text-gray-700">Input (month)</span>
                    <input type="month" className="form-input mt-1 block w-full" />
                  </label>
                  <label className="block">
                    <span className="text-gray-700">Input (number)</span>
                    <input type="number" className="form-input mt-1 block w-full" />
                  </label>
                  <label className="block">
                    <span className="text-gray-700">Input (search)</span>
                    <input type="search" className="form-input mt-1 block w-full" />
                  </label>
                  <label className="block">
                    <span className="text-gray-700">Input (time)</span>
                    <input type="time" className="form-input mt-1 block w-full" />
                  </label>
                  <label className="block">
                    <span className="text-gray-700">Input (week)</span>
                    <input type="week" className="form-input mt-1 block w-full" />
                  </label>
                  
                </div>
              </form>
              {/* <div className="grid grid-cols-3 gap-6">
                  <label className="block">
                    <span className="text-gray-700">Input (tel)</span>
                    <input
                      type="tel"
                      multiple
                      className="form-input mt-1 block w-full"
                      placeholder="john@example.com"
                    />
                  </label>
                  <label className="block">
                    <span className="text-gray-700">Input (url)</span>
                    <input
                      type="url"
                      multiple
                      className="form-input mt-1 block w-full"
                      placeholder="john@example.com"
                    />
                  </label>
                  <label className="block">
                    <span className="text-gray-700">Select</span>
                    <select className="form-select block w-full mt-1">
                      <option>Option 1</option>
                      <option>Option 2</option>
                    </select>
                  </label>
                  <label className="block">
                    <span className="text-gray-700">Select (multiple)</span>
                    <select className="form-multiselect block w-full mt-1" multiple>
                      <option>Option 1</option>
                      <option>Option 2</option>
                      <option>Option 3</option>
                      <option>Option 4</option>
                      <option>Option 5</option>
                    </select>
                  </label>
                  <label className="block">
                    <span className="text-gray-700">Textarea</span>
                    <textarea
                      className="form-textarea mt-1 block w-full h-24"
                      rows="3"
                      placeholder="Enter some long form content."
                    ></textarea>
                  </label>
                  <fieldset className="block">
                    <legend className="text-gray-700">Checkboxes</legend>
                    <div className="mt-2">
                      <div>
                        <label className="inline-flex items-center">
                          <input className="form-checkbox" type="checkbox" checked />
                          <span className="ml-2">Option 1</span>
                        </label>
                      </div>
                      <div>
                        <label className="inline-flex items-center">
                          <input className="form-checkbox" type="checkbox" />
                          <span className="ml-2">Option 2</span>
                        </label>
                      </div>
                      <div>
                        <label className="inline-flex items-center">
                          <input className="form-checkbox" type="checkbox" />
                          <span className="ml-2">Option 3</span>
                        </label>
                      </div>
                    </div>
                  </fieldset>
                  <fieldset className="block">
                    <legend className="text-gray-700">Radio Buttons</legend>
                    <div className="mt-2">
                      <div>
                        <label className="inline-flex items-center">
                          <input className="form-radio" type="radio" checked name="radio-direct" value="1" />
                          <span className="ml-2">Option 1</span>
                        </label>
                      </div>
                      <div>
                        <label className="inline-flex items-center">
                          <input className="form-radio" type="radio" name="radio-direct" value="2" />
                          <span className="ml-2">Option 2</span>
                        </label>
                      </div>
                      <div>
                        <label className="inline-flex items-center">
                          <input className="form-radio" type="radio" name="radio-direct" value="3" />
                          <span className="ml-2">Option 3</span>
                        </label>
                      </div>
                    </div>
                  </fieldset>
                </div>  */}
            </div>
            <div className="max-w-4xl mx-auto py-12">
              <h2 className="text-2xl font-bold">Untouched</h2>
              <p className="mt-2 text-lg text-gray-500">
                These are form elements we don't handle (yet?), but we use this to make sure we haven't
                accidentally styled them by mistake.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-6 items-start">
                <div className="grid grid-cols-1 gap-6">
                  <label className="block">
                    <span className="text-gray-700">Input (range)</span>
                    <input type="range" className="mt-1 block w-full" />
                  </label>
                  <label className="block">
                    <span className="text-gray-700">Input (color)</span>
                    <input type="color" className="mt-1 block w-full" />
                  </label>
                  <label className="block">
                    <span className="text-gray-700">Input (file)</span>
                    <input type="file" className="mt-1 block w-full" />
                  </label>
                  <label className="block">
                    <span className="text-gray-700">Input (file, multiple)</span>
                    <input type="file" multiple className="mt-1 block w-full" />
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="modal-action">
            <label htmlFor="order-modal" className="btn">Close</label>
          </div>
        </div>
      </div>
    </div >
  );
};

export default OrderOnline;