<<<<<<< HEAD
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {removeFromCart} from "../../store/reducers/cartReducer";
=======
import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../../store/reducers/cartReducer";
>>>>>>> f317eaad1b4bffc065eedc5d45bb0743da6429ab

const CartItem = ({ element }) => {
  const dispatch = useDispatch()
  let [qty, setQty] = useState(1)
  let totalProductPrice = qty * parseInt(element.price)
  let qtyPrice = `${qty} * ${element.price}`

  const removeItem = (element) => {
    qty > 1
      ? setQty(--qty)
      : dispatch(removeFromCart(element._id))
  }
  const addAnotherOne = () => {
    setQty(++qty);
  }

  return (
    <>
      <div className="element">
        <img src={element.img} alt='pic' />
        <div className="right">
          <h2>
            {element.title}
          </h2>
          <p>
            {element.description}
          </p>
        </div>
        <div className="price">
          <div className="price-btn">
            <button className='btn-sub' onClick={() => removeItem(element)}>-</button>
            <button className='btn-add' onClick={addAnotherOne}>+</button>
          </div>
          <div className='totalPrice'>
            <strong>
              {qtyPrice}
            </strong>
            <span>
              {totalProductPrice}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export { CartItem };