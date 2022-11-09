import React, { useState } from "react";
import ReactDOM from "react-dom";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import "./styles.css";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 2 },
  { width: 1200, itemsToShow: 3 },
];

const CardCarouselTesting = ({ card }) => {
  return (
    <div className="-mt-10">
      <Item >
        <div className="card ">
          <div className="card-body items-center">
            <img width="100" height="100" src={card.img} alt="" />
            <div className="text-white text-center">
              <h2 className="text-center font-bold text-xl uppercase p-3">{card.name}</h2>
              <p className="">{card.description}</p>
            </div>
          </div>
        </div>
      </Item>
    </div>
  );
};

export default CardCarouselTesting;