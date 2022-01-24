<<<<<<< HEAD
import React from 'react';
import {useSelector} from "react-redux";
import {CartItem} from "./CartItem";

const Cart = () => {
  const cartElements = useSelector(state => state.cart.cartArr)
=======
import React, { useState } from 'react';
import { useSelector } from "react-redux";
import { CartItem } from "./CartItem";
import { Total } from './Total';

const Cart = () => {
  const cartElements = useSelector(state => state.cart.cartArr)

>>>>>>> f317eaad1b4bffc065eedc5d45bb0743da6429ab
  return (
    <section className='cart-section'>
      <div className="inner">
        {cartElements.length !== 0
          ? cartElements.map((el, id) => {
            return (
<<<<<<< HEAD
              <CartItem key={id} element={el}/>
=======
              <CartItem key={id} element={el} />
>>>>>>> f317eaad1b4bffc065eedc5d45bb0743da6429ab
            )
          })
          : <h3>Cart is empty </h3>
        }
<<<<<<< HEAD
        <strong>
        </strong>
=======
        <Total />
>>>>>>> f317eaad1b4bffc065eedc5d45bb0743da6429ab
      </div>
    </section>
  );
};

export { Cart };