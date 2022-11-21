import React, { useState } from "react";
import ReactDOM from "react-dom";
import Item from "./Item";

const CarouselInfo = (props) => {
  const {name, description, img} = props.card;
  return (
    <Item>
      <div className="card">
        <div className="card-body items-center">
          <img width="100" height="100" src={img} alt="" />
          <div className="text-white text-center">
            <h2 className="text-center font-bold text-xl uppercase p-3">{name}</h2>
            <p className="">{description}</p>
          </div>
        </div>
      </div>
    </Item>
  );
};

export default CarouselInfo;