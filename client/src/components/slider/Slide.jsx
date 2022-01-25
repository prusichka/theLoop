import React from 'react';
import {Link} from "react-router-dom";

const Slide = ({ slideDescription }) => {
  return (
    <div className="slide">
      <div className="left">
        <h2>{slideDescription.title}</h2>
        <strong>{slideDescription.sales}</strong>
        <Link to='products'>{slideDescription.linkTitle}</Link>
      </div>
      <div className="right">
        <img src={slideDescription.img} alt="" />
        <h3>{slideDescription.defSale}</h3>
        <h4>{slideDescription.sale} </h4>
      </div>
    </div>
  );
};

export default Slide;