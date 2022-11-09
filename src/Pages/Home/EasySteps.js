import React from 'react';
import bucket from '../../assets/images/img_icon_01.png';
import truck from '../../assets/images/img_icon_02.png';
import machine from '../../assets/images/img_icon_03.png';
import shirt from '../../assets/images/img_icon_04.png';

const EasySteps = () => {
  return (
    <div className="bg-slate-100">
      <h1 className="text-3xl text-center p-10">HOW IT WORKS: IN 4 EASY STEPS</h1>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <div className="card w-96 rounded-nonez">
          <figure className="px-10 pt-10">
            <img src={bucket} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h6>Step-1</h6>
            <h3>Bag up all your dirty clothes</h3>
          </div>
        </div>
        <div className="card w-96 rounded-none">
          <figure className="px-10 pt-10">
            <img src={truck} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h6>Step-2</h6>
            <h3>We pick up your clothes</h3>
          </div>
        </div>
        <div className="card w-96 rounded-none bg-none">
          <figure className="px-10 pt-10">
            <img src={machine} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h6>Step-3</h6>
            <h3>We clean your clothes</h3>
          </div>
        </div>
        <div className="card w-96 rounded-none bg-none">
          <figure className="px-10 pt-10">
            <img src={shirt} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h6>Step-4</h6>
            <h3>We deliver clean, folded clothes</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EasySteps;