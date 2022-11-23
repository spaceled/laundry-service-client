import React, { useState } from "react";
import ReactDOM from "react-dom";
import Carousel from "react-elastic-carousel";
import "./styles.css";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 2 },
  { width: 1200, itemsToShow: 3 },
];

const SliderParent = ({ children }) => {

  return (
    <div >
      <Carousel breakPoints={breakPoints}>{children}</Carousel>
    </div>
  );
};

export default SliderParent;