import React from 'react';

const EasySteps = () => {
  return (
    <div className="bg-slate-100">
      <h1 className="text-3xl text-center p-10">HOW IT WORKS: IN 4 EASY STEPS</h1>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <div className="card w-96 rounded-nonez">
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
        <div className="card w-96 rounded-none bg-none">
          <figure className="px-10 pt-10">
            <img src="https://placeimg.com/400/225/arch" alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Step-4</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EasySteps;