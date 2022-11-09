import React, { useState } from "react";
import ReactDOM from "react-dom";
import Item from "./Item";

const CarouselInfo = ({ card }) => {
  return (
    <Item>
      <div className="card">
        <div className="card-body items-center">
          <img width="100" height="100" src={card.img} alt="" />
          <div className="text-white text-center">
            <h2 className="text-center font-bold text-xl uppercase p-3">{card.name}</h2>
            <p className="">{card.description}</p>
          </div>
        </div>
      </div>
    </Item>
  );
};

export default CarouselInfo;