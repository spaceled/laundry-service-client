import React from 'react';
import Navbar from '../Shared/Navbar';
import Carousel from './Carousel';
import CommercialService from '../Shared/CommercialService';
import EasySteps from './EasySteps';
import Passionate from './Passionate';
import ServiceCarousel from './ServiceCarousel';

const Home = () => {
  return (
    <div>
      <Carousel></Carousel>
      <ServiceCarousel></ServiceCarousel>
      <Passionate></Passionate>
      <EasySteps></EasySteps>
      <CommercialService></CommercialService>
    </div>
  );
};

export default Home;