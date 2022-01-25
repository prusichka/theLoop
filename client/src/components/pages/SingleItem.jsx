import React from 'react';
import { useParams } from "react-router-dom";
import {allProducts} from '../../models';
import {useDispatch, useSelector} from "react-redux";
import {_addToCart} from "../../store/reducers/cartReducer";

const SingleItem = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const cartElement = useSelector(state => state.cart.cartArr)
  const selector = useSelector(state=>state.newProduct.newCartArr)
  const product = selector.find(item => item._id === +params.id);

  function addToCart(product) {
    cartElement.length === 0 || !cartElement.find(el => el._id === product._id)
      ? dispatch(_addToCart(product))
      : alert('Товар уже в корзине !')
  }

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
            <button onClick={() => addToCart(product)}>Добавить в корзину</button>
          </div>
        </div>
      </section>
    </>
  );
};

export {SingleItem};