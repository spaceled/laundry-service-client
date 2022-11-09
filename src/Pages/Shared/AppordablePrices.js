import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import PrimaryButton from './PrimaryButton';
import { faShirt, faBagShopping } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import H1 from './H1';


const AppordablePrices = () => {
  
  return (
    <div className="text-center">
      {/* <h1 className="text-5xl font-bold text-center mt-10">AFFORDABLE PRICES</h1> */}
      <H1>affordable prices</H1>
      <div className="grid my-10 py-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div className="card w-96 rounded-none">
          <figure className="px-10 pt-10">
            <svg className="h-48 w-48 text-base hover:text-green-500 ease-in-out duration-300" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <path d="M15 4l6 2v5h-3v8a1 1 0 0 1 -1 1h-10a1 1 0 0 1 -1 -1v-8h-3v-5l6 -2a3 3 0 0 0 6 0" /></svg>
          </figure>
          <h2 className="text-2xl">From <span className="text-green-500">$2</span> per shirt</h2>
          <p>Shirt service</p>
        </div>
        <div className="card w-96 rounded-none">
          <figure className="px-10 pt-10">
            <svg className="h-48 w-48 text-base hover:text-green-500 ease-in-out duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
          </figure>
          <h2 className="text-2xl"><span className="text-green-500">$2.50</span> per KG</h2>
          <p>Laundry Service</p>
        </div>
        <div className="card w-96 rounded-none bg-none">
          <figure className="px-10 pt-10">
            <svg className="h-48 w-48 text-base hover:text-green-500 ease-in-out duration-300" width="24" height="24" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <circle cx="12" cy="12" r="3" />  <line x1="12" y1="5" x2="12" y2="3" />  <line x1="17" y1="7" x2="18.4" y2="5.6" />  <line x1="19" y1="12" x2="21" y2="12" />  <line x1="17" y1="17" x2="18.4" y2="18.4" />  <line x1="12" y1="19" x2="12" y2="21" />  <line x1="7" y1="17" x2="5.6" y2="18.4" />  <line x1="6" y1="12" x2="4" y2="12" />  <line x1="7" y1="7" x2="5.6" y2="5.6" /></svg>
          </figure>
          <h2 className="text-2xl">From <span className="text-green-500">$2</span> per item</h2>
          <p>Dry Cleaning</p>
        </div>
      </div>
      <PrimaryButton>
        <Link to="/prices">See All Prices here</Link>
      </PrimaryButton>
    </div>
  );
};

export default AppordablePrices;