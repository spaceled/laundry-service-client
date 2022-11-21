import React from 'react';
import shirt from '../../../src/assets/icons/shirt.png';
import shoppingBag from '../../../src/assets/icons/shoppingBag.png';
import hanger from '../../../src/assets/icons/hanger.png';
import FullPrice from './FullPrice';
import Footer from '../Shared/Footer';
import H1 from '../Shared/H1';

// https://www.youtube.com/watch?v=Ib-80HIjuZ4

const Prices = () => {
  return (
    <div className="text-center">
      <div className="mx-10 px-10">
        <H1>OUR PRICES</H1>
        <p className="my-10">We make doing your laundry simple. We can save your time, so you can enjoy doing the things you love. We can save you money on soap, water, heating and electricity. So you can enjoy even more of the things you love. Our prices are simple and affordable.</p>
      </div>
      <div className="mt-10 pt-10">
        <h1 className="text-5xl font-bold text-center mt-10">AFFORDABLE PRICES</h1>
        <div className="grid my-10 py-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <div className="card w-96 rounded-none">
            <figure className="px-10 pt-10">
              <img src={shirt} alt="Shoes" className="rounded-xl" />
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
              <img src={shoppingBag} alt="Shoes" className="rounded-xl" />
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
              <img src={hanger} alt="Shoes" className="rounded-xl" />
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
      </div>
      <FullPrice></FullPrice>
      <Footer></Footer>
    </div>
  );
};

export default Prices;