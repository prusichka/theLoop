import React from 'react';
import { useSelector } from "react-redux";

const Total = () => {
  const cartElements = useSelector(state => state.cart.cartArr)

  const totalPrice = cartElements.reduce((acc, card) => acc + card.price * card.qty, 0)
  return (totalPrice > 0 ? <div className='total-price'> <button>Оформить заказ</button> <span>{totalPrice} ₽</span></div> : '');
};

export { Total };
