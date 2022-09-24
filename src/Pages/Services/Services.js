import React from 'react';
import CommercialService from '../Shared/CommercialService';
import CommercialService2 from '../Shared/CommercialService2';
import Footer from '../Shared/Footer';
import ServiceCarousel from './ServiceCarousel';

const Services = () => {
  return (
    <div>
      <div className="m-10 p-10">
        <h1 className="text-5xl font-bold text-center my-10">OUR SERVICES</h1>
        <p>We strive to ensure quality laundry, on time delivery and reliable service for all linen, uniform and guest laundry needs. A dedicated in-plant quality assurance team is on hand to provide regular visual inspection to maintain quality standard and to seek for continuous improvements. The team would review and offer precise washing formula suitable for each type of linen.</p>
      </div>
      <CommercialService></CommercialService>
      <CommercialService2></CommercialService2>
      <ServiceCarousel></ServiceCarousel>
      <Footer></Footer>
    </div>
  );
};

export default Services;