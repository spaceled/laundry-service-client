import React from 'react';

const ServiceCarousel = () => {
  return (
    <div className="carousel carousel-center grid -mt-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <div className="carousel-item">
        <div className="card w-96 shadow-xl rounded-none mx-6 bg-info">
          <div className="card-body">
            <h2 className="card-title">Card title!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
      <div className="carousel-item">
        <div className="card w-96 shadow-xl rounded-none mx-6 bg-lime-300">
          <div className="card-body">
            <h2 className="card-title">Card title!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
      <div className="carousel-item">
        <div className="card w-96 shadow-xl rounded-none mx-6 bg-info">
          <div className="card-body">
            <h2 className="card-title">Card title!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCarousel;