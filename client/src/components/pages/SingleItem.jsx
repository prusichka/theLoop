import React from 'react';
import { useParams, useLocation } from "react-router-dom";
import {allProducts} from '../../models';

const SingleItem = () => {
  const params = useParams();
  const location = useLocation();
  const locationSearch = location.search;
  console.log(allProducts)
  const product = allProducts.find(item => item._id === +params.id);
  console.log(product)
  return (
    <>
      <section className="item-product">
        <div className="inner">
          <div className="left">
            <img src={product.img} alt="" />
          </div>
          <div className="right">
            <h2>{product.title}</h2>
            { parseInt(product.sales) > 0 && <h3>Sales: {product.sales}</h3>}
            <p>{product.description}</p>
            <strong>₽ {product.price}</strong>
            <button>Добавить в корзину</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleItem;