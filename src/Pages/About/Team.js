import React from 'react';

const Team = () => {
  return (
    <div>
      <h1 className="text-5xl font-bold text-center my-10">OUR TEAM</h1>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <div className="card w-96">
          <figure className="px-10 pt-10">
            <img src="https://smartdata.tonytemplates.com/laundry-v2/wp-content/uploads/2011/05/personal_img_01.jpg" alt="Shoes" className="rounded-full hover:ring ring-primary ring-offset-base-100 ring-offset-2" />
          </figure>
          <div className="card-body items-center text-center">
            <h3 className="card-title hover:text-green-400">Charles Rock</h3>
            <p>OPERATIONS MANAGER</p>
          </div>
        </div>
        <div className="card w-96">
          <figure className="px-10 pt-10">
            <img src="https://smartdata.tonytemplates.com/laundry-v2/wp-content/uploads/2017/01/personal_img_02.jpg" alt="Shoes" className="rounded-full hover:ring ring-primary ring-offset-base-100 ring-offset-2" />
          </figure>
          <div className="card-body items-center text-center">
            <h3 className="card-title hover:text-green-400">Justin Stein</h3>
            <p>SERVICE MANAGER</p>
          </div>
        </div>
        <div className="card w-96 rounded-none bg-none">
          <figure className="px-10 pt-10">
            <img src="https://smartdata.tonytemplates.com/laundry-v2/wp-content/uploads/2017/01/personal_img_03.jpg" alt="Shoes" className="rounded-full hover:ring ring-primary ring-offset-base-100 ring-offset-2" />
          </figure>
          <div className="card-body items-center text-center">
            <h3 className="card-title hover:text-green-400">Amy Hellickson</h3>
            <p>WASH EXPERT</p>
          </div>
        </div>
        <div className="card w-96 rounded-none bg-none">
          <figure className="px-10 pt-10">
            <img src="https://smartdata.tonytemplates.com/laundry-v2/wp-content/uploads/2017/01/personal_img_04.jpg" alt="Shoes" className="rounded-full hover:ring ring-primary ring-offset-base-100 ring-offset-2" />
          </figure>
          <div className="card-body items-center text-center">
            <h3 className="card-title hover:text-green-400">Alan Gomes</h3>
            <p>DRY CLEANING EXPERT</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;