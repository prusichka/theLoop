import React from 'react';
import { useSelector } from "react-redux";
import {Link} from 'react-router-dom'

const Total = () => {
  const cartElements = useSelector(state => state.cart.cartArr)

  const totalPrice = cartElements.reduce((acc, card) => acc + card.price * card.qty, 0)
  return (totalPrice > 0 ? <div className='total-price'> <Link to='/payment'><button>Оформить заказ</button></Link> <span>{totalPrice} ₽</span></div> : '');
};

export { Total };
