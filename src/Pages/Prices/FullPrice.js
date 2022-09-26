import React from 'react';
import washingMachine from '../../assets/icons/washingMachine.png';
import iron from '../../assets/icons/iron.png';
import dryWash from '../../assets/icons/dryWash.png';
import table from '../../assets/icons/table.png';

const FullPrice = () => {
  return (
    <div>
      <h1 className="text-5xl font-bold text-center mt-10">FULL PRICE LIST</h1>
      <div className="flex mt-10 p-10 justify-center">
        <img className="img-responsive mx-2" src={washingMachine} alt="" />
        <img className="img-responsive mx-2" src={iron} alt="" />
        <img className="img-responsive mx-2" src={dryWash} alt="" />
        <img className="img-responsive mx-2" src={table} alt="" />
      </div>
      <div className="m-10 p-10">
        <div className="collapse bordered collapse-plus text-left uppercase mb-1">
          <input type="checkbox" className="peer" />
          <div className="collapse-title bg-slate-200 text-gray-800 peer-checked:bg-secondary peer-checked:text-secondary-content">
            Click me to show/hide content
          </div>
          <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
            <p>hello</p>
          </div>
        </div>
        <div className="collapse bordered collapse-plus text-left uppercase mb-1">
          <input type="checkbox" className="peer" />
          <div className="collapse-title bg-slate-200 text-gray-800 peer-checked:bg-secondary peer-checked:text-secondary-content">
            Click me to show/hide content
          </div>
          <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
            <p>hello</p>
          </div>
        </div>
        <div className="collapse bordered collapse-plus text-left uppercase mb-1">
          <input type="checkbox" className="peer" />
          <div className="collapse-title bg-slate-200 text-gray-800 peer-checked:bg-secondary peer-checked:text-secondary-content">
            Click me to show/hide content
          </div>
          <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
            <p>hello</p>
          </div>
        </div>
        <div className="collapse bordered collapse-plus text-left uppercase mb-1">
          <input type="checkbox" className="peer" />
          <div className="collapse-title bg-slate-200 text-gray-800 peer-checked:bg-secondary peer-checked:text-secondary-content">
            Click me to show/hide content
          </div>
          <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
            <p>hello</p>
          </div>
        </div>
        <div className="collapse bordered collapse-plus text-left uppercase mb-1">
          <input type="checkbox" className="peer" />
          <div className="collapse-title bg-slate-200 text-gray-800 peer-checked:bg-secondary peer-checked:text-secondary-content">
            Click me to show/hide content
          </div>
          <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
            <p>hello</p>
          </div>
        </div>
        <div className="collapse bordered collapse-plus text-left uppercase mb-1">
          <input type="checkbox" className="peer" />
          <div className="collapse-title bg-slate-200 text-gray-800 peer-checked:bg-secondary peer-checked:text-secondary-content">
            Click me to show/hide content
          </div>
          <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
            <p>hello</p>
          </div>
        </div>
        <div className="collapse bordered collapse-plus text-left uppercase mb-1">
          <input type="checkbox" className="peer" />
          <div className="collapse-title bg-slate-200 text-gray-800 peer-checked:bg-secondary peer-checked:text-secondary-content">
            Click me to show/hide content
          </div>
          <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
            <p>hello</p>
          </div>
        </div>
        <div className="collapse bordered collapse-plus text-left uppercase mb-1">
          <input type="checkbox" className="peer" />
          <div className="collapse-title bg-slate-200 text-gray-800 peer-checked:bg-secondary peer-checked:text-secondary-content">
            Click me to show/hide content
          </div>
          <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
            <p>hello</p>
          </div>
        </div>
        <div className="collapse bordered collapse-plus text-left uppercase mb-1">
          <input type="checkbox" className="peer" />
          <div className="collapse-title bg-slate-200 text-gray-800 peer-checked:bg-secondary peer-checked:text-secondary-content">
            Click me to show/hide content
          </div>
          <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
            <p>hello</p>
          </div>
        </div>
        <div className="collapse bordered collapse-plus text-left uppercase mb-2 ">
          <input type="checkbox" className="peer" />
          <div className="collapse-title bg-slate-200 text-gray-800 peer-checked:bg-secondary peer-checked:text-secondary-content">
            Click me to show/hide content
          </div>
          <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
            <p>hello</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullPrice;