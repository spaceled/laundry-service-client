import React from 'react';
import Carousel from './Carousel';
import CommercialService from '../Shared/CommercialService';
import EasySteps from './EasySteps';
import Passionate from './Passionate';
import ServiceCarousel from './ServiceCarousel';
import OurApproach from './OurApproach';
import AppordablePrices from '../Shared/AppordablePrices';
import ServiceQuality from './ServiceQuality';
import Footer from '../Shared/Footer';

const Home = () => {
  return (
    <div>
      <Carousel></Carousel>
      <ServiceCarousel></ServiceCarousel>
      <Passionate></Passionate>
      <EasySteps></EasySteps>
      <CommercialService></CommercialService>
      <OurApproach></OurApproach>
      <AppordablePrices></AppordablePrices>
      <ServiceQuality></ServiceQuality>
      <Footer></Footer>
    </div>
  );
};

export default Home;