import React from 'react';
import PrimaryButton from './PrimaryButton';

const AppordablePrices = () => {
  return (
    <div className="text-center">
      <h1 className="text-5xl font-bold text-center mt-10">AFFORDABLE PRICES</h1>
      <div className="grid my-10 py-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div className="card w-96 rounded-none">
          <figure className="px-10 pt-10">
            <img src="https://placeimg.com/400/225/arch" alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Step-1</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
        <div className="card w-96 rounded-none">
          <figure className="px-10 pt-10">
            <img src="https://placeimg.com/400/225/arch" alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Step-2</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
        <div className="card w-96 rounded-none bg-none">
          <figure className="px-10 pt-10">
            <img src="https://placeimg.com/400/225/arch" alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Step-3</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
      <PrimaryButton>See All Prices here</PrimaryButton>
    </div>
  );
};

export default AppordablePrices;