import React from 'react';
import washingMachine from '../../assets/icons/washingMachine.png';
import iron from '../../assets/icons/iron.png';
import dryWash from '../../assets/icons/dryWash.png';
import table from '../../assets/icons/table.png';
import H1 from '../Shared/H1';

const FullPrice = () => {
  return (
    <div>
      <H1>FULL PRICE LIST</H1>
      <div className="flex mt-10 p-10 justify-center sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <img className="img-responsive mx-2" src={washingMachine} alt="" />
        <img className="img-responsive mx-2" src={iron} alt="" />
        <img className="img-responsive mx-2" src={dryWash} alt="" />
        <img className="img-responsive mx-2" src={table} alt="" />
      </div>
      <div className="m-10 p-10">
        <div className="collapse bg-slate-200 hover:bg-slate-500 bordered collapse-plus text-left uppercase mb-1">
          <input type="checkbox" className="peer" />
          <div className="collapse-title text-gray-800 peer-checked:bg-slate-500 peer-checked:text-secondary-content">
            Accessories
          </div>
          <div className="collapse-content bg-slate-200 text-black-content peer-checked:bg-slate-100 peer-checked:text-black-content">
            <div className="overflow-x-auto">
              <table className="table w-full">
                <tbody>
                  <tr>
                    <td>Hung T Shirt</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td><span>$</span> 59.00</td>
                  </tr>
                  <tr>
                    <td>10 Shirts @ 1.90</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td><span>$</span> 19.00</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="collapse bg-slate-200 hover:bg-slate-500 bordered collapse-plus text-left uppercase mb-1">
          <input type="checkbox" className="peer" />
          <div className="collapse-title text-gray-800 peer-checked:bg-slate-500 peer-checked:text-secondary-content">
            Alterations
          </div>
          <div className="collapse-content bg-slate-200 text-black-content peer-checked:bg-slate-100 peer-checked:text-black-content">
          <div className="overflow-x-auto">
              <table className="table w-full">
                <tbody>
                  <tr>
                    <td>Hung T Shirt</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td><span>$</span> 59.00</td>
                  </tr>
                  <tr>
                    <td>10 Shirts @ 1.90</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td><span>$</span> 19.00</td>
                  </tr>
                  <tr>
                    <td>5 Shirts On Hanger</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td><span>$</span> 19.00</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="collapse bg-slate-200 hover:bg-slate-500 bordered collapse-plus text-left uppercase mb-1">
          <input type="checkbox" className="peer" />
          <div className="collapse-title text-gray-800 peer-checked:bg-slate-500 peer-checked:text-secondary-content">
            Bedding
          </div>
          <div className="collapse-content bg-slate-200 text-black-content peer-checked:bg-slate-100 peer-checked:text-black-content">
          <div className="overflow-x-auto">
              <table className="table w-full">
                <tbody>
                  <tr>
                    <td>Hung T Shirt</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td><span>$</span> 59.00</td>
                  </tr>
                  <tr>
                    <td>10 Shirts @ 1.90</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td><span>$</span> 19.00</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="collapse bg-slate-200 hover:bg-slate-500 bordered collapse-plus text-left uppercase mb-1">
          <input type="checkbox" className="peer" />
          <div className="collapse-title text-gray-800 peer-checked:bg-slate-500 peer-checked:text-secondary-content">
            dress/skirt
          </div>
          <div className="collapse-content bg-slate-200 text-black-content peer-checked:bg-slate-100 peer-checked:text-black-content">
          <div className="overflow-x-auto">
              <table className="table w-full">
                <tbody>
                  <tr>
                    <td>Hung T Shirt</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td><span>$</span> 59.00</td>
                  </tr>
                  <tr>
                    <td>10 Shirts @ 1.90</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td><span>$</span> 19.00</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="collapse bg-slate-200 hover:bg-slate-500 bordered collapse-plus text-left uppercase mb-1">
          <input type="checkbox" className="peer" />
          <div className="collapse-title text-gray-800 peer-checked:bg-slate-500 peer-checked:text-secondary-content">
            laundry
          </div>
          <div className="collapse-content bg-slate-200 text-black-content peer-checked:bg-slate-100 peer-checked:text-black-content">
          <div className="overflow-x-auto">
              <table className="table w-full">
                <tbody>
                  <tr>
                    <td>Hung T Shirt</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td><span>$</span> 59.00</td>
                  </tr>
                  <tr>
                    <td>10 Shirts @ 1.90</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td><span>$</span> 19.00</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="collapse bg-slate-200 hover:bg-slate-500 bordered collapse-plus text-left uppercase mb-1">
          <input type="checkbox" className="peer" />
          <div className="collapse-title text-gray-800 peer-checked:bg-slate-500 peer-checked:text-secondary-content">
            outdoor
          </div>
          <div className="collapse-content bg-slate-200 text-black-content peer-checked:bg-slate-100 peer-checked:text-black-content">
          <div className="overflow-x-auto">
              <table className="table w-full">
                <tbody>
                  <tr>
                    <td>Hung T Shirt</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td><span>$</span> 59.00</td>
                  </tr>
                  <tr>
                    <td>10 Shirts @ 1.90</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td><span>$</span> 19.00</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="collapse bg-slate-200 hover:bg-slate-500 bordered collapse-plus text-left uppercase mb-1">
          <input type="checkbox" className="peer" />
          <div className="collapse-title text-gray-800 peer-checked:bg-slate-500 peer-checked:text-secondary-content">
            shirts/tops
          </div>
          <div className="collapse-content bg-slate-200 text-black-content peer-checked:bg-slate-100 peer-checked:text-black-content">
          <div className="overflow-x-auto">
              <table className="table w-full">
                <tbody>
                  <tr>
                    <td>Hung T Shirt</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td><span>$</span> 59.00</td>
                  </tr>
                  <tr>
                    <td>10 Shirts @ 1.90</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td><span>$</span> 19.00</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="collapse bg-slate-200 hover:bg-slate-500 bordered collapse-plus text-left uppercase mb-1">
          <input type="checkbox" className="peer" />
          <div className="collapse-title text-gray-800 peer-checked:bg-slate-500 peer-checked:text-secondary-content">
            suits
          </div>
          <div className="collapse-content bg-slate-200 text-black-content peer-checked:bg-slate-100 peer-checked:text-black-content">
          <div className="overflow-x-auto">
              <table className="table w-full">
                <tbody>
                  <tr>
                    <td>Hung T Shirt</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td><span>$</span> 59.00</td>
                  </tr>
                  <tr>
                    <td>10 Shirts @ 1.90</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td><span>$</span> 19.00</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="collapse bg-slate-200 hover:bg-slate-500 bordered collapse-plus text-left uppercase mb-1">
          <input type="checkbox" className="peer" />
          <div className="collapse-title text-gray-800 peer-checked:bg-slate-500 peer-checked:text-secondary-content">
            toweling
          </div>
          <div className="collapse-content bg-slate-200 text-black-content peer-checked:bg-slate-100 peer-checked:text-black-content">
          <div className="overflow-x-auto">
              <table className="table w-full">
                <tbody>
                  <tr>
                    <td>Hung T Shirt</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td><span>$</span> 59.00</td>
                  </tr>
                  <tr>
                    <td>10 Shirts @ 1.90</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td><span>$</span> 19.00</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="collapse bg-slate-200 hover:bg-slate-500 bordered collapse-plus text-left uppercase mb-2 ">
          <input type="checkbox" className="peer" />
          <div className="collapse-title text-gray-800 peer-checked:bg-slate-500 peer-checked:text-secondary-content">
            trousers
          </div>
          <div className="collapse-content bg-slate-200 text-black-content peer-checked:bg-slate-100 peer-checked:text-black-content">
          <div className="overflow-x-auto">
              <table className="table w-full">
                <tbody>
                  <tr>
                    <td>Hung T Shirt</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td><span>$</span> 59.00</td>
                  </tr>
                  <tr>
                    <td>10 Shirts @ 1.90</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td><span>$</span> 19.00</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullPrice;