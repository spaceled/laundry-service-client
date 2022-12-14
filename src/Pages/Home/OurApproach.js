import React from 'react';
import H1 from '../Shared/H1';

const OurApproach = () => {
  return (
    <div className="hero bg-base-200 min-h-screen flex">
      <div className="hero-content flex-col lg:flex-row">
        <div className="flex-1">
          <H1>OUR APPROACH</H1>
          <p className="">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi perferendis, laborum reprehenderit porro corrupti consequatur modi! Labore dolore dignissimos corrupti alias. A enim repellat, sequi est veniam magni, eius voluptatem placeat sint recusandae, possimus necessitatibus natus nulla vero culpa explicabo.</p>
        </div>
        <div className="flex-1 ml-20">
          <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
        </div>
      </div>
    </div>
  );
};

export default OurApproach;