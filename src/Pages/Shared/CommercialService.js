import React from 'react';
import H1 from './H1';

const CommercialService = () => {

  return (
    <div>
      <H1>COMMERCIAL LAUNDRY SERVICE</H1>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 m-10 p-10">
        <div className="flex-1">
          <figure><img src="https://smartdata.tonytemplates.com/laundry-v2/wp-content/uploads/2018/02/img-commercial-service-1.jpg" alt="Shoes" /></figure>
        </div>
        <div className="flex-1">
          <p>Large corporations have determined that there is a financial benefit to outsourcing back office work because it saves money. Allowing us to do your laundry is cost effective and will allow you and your employees to focus on your core business. We offer smart solutions to meet your commercial laundry needs. Our pick up and delivery laundry service is fast, convenient, and saves you time and money.

            Laundry isn't your main business, but it is ours and we love it! For more information about our commercial laundry services and pricing and to schedule your first pick up, call us at 1 (800) 123-45-67</p>
        </div>
      </div>
    </div>
  );
};

export default CommercialService;