import React, { useState } from 'react';
import { useSelector } from "react-redux";
import { CartItem } from "./CartItem";
import { Total } from './Total';


const Cart = () => {
  const cartElements = useSelector(state => state.cart.cartArr)

  return (
    <section className='cart-section'>
      <div className="inner">
        {cartElements.length !== 0
          ? cartElements.map((el, id) => {
            return (
              <CartItem key={id} element={el}/>
              )
          })
          : <h3>Cart is empty </h3>
        }
        <Total />

      </div>
    </section>
  );
};

export { Cart };