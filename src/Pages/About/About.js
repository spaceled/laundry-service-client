import React from 'react';
import Footer from '../Shared/Footer';
import ServiceQuality from '../Shared/ServiceQuality';
import History from './History';
import Team from './Team';

const About = () => {
  return (
    <div className="my-10 py-10">
      <h1 className="text-5xl font-bold text-center">A FEW WORDS ABOUT US</h1>
      <p className="m-10 p-10">We are professionals in the laundry and dry cleaning business, which means we always stay up to date on the latest technologies, cleaning methods, and solutions for dealing with stains or delicate fabrics. Plus, we maintain the highest standards of business integrity by following local and national regulations and environmental safety rules!</p>
      <ServiceQuality></ServiceQuality>
      <History></History>
      <Team></Team>
      <Footer></Footer>
    </div>
  );
};

export default About;