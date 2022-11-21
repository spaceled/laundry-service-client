import React, { useState } from "react";
import ReactDOM from "react-dom";
import Carousel from "react-elastic-carousel";
import Blog from "../../Blog/Blog";
import CardCarousel from "./CardCarousel";
import Item from "./Item";
import "./styles.css";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 2 },
  { width: 1200, itemsToShow: 3 },
];

const CardCarouselTesting = ({ children }) => {

  return (
    <Carousel breakPoints={breakPoints} className="-mt-10">{children}</Carousel>
  );
};

export default CardCarouselTesting;