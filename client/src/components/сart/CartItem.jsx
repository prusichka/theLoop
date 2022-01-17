import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {removeFromCart} from "../../store/reducers/cartReducer";

const CartItem = ({element, cartItems}) => {
  const dispatch = useDispatch()
  const cartElement = useSelector(state => state.cart.cartArr)
  let [qty, setQty] = useState(1)

  const removeItem = (element) => {
    qty > 1
      ? setQty(--qty)
      : dispatch(removeFromCart(element._id))
  }
  const addAnotherOne = () => {
    setQty(++qty)
  }
  return (
    <>
      <div className="element">
        <img src={element.img} alt='image'/>
        <div className="right">
          <h2>
            {element.title}
          </h2>
          <p>
            {element.description}
          </p>
        </div>
        <button className='btn-sub' onClick={() => removeItem(element)}>-</button>
        <strong>{qty}</strong>
        <button className='btn-add' onClick={() => addAnotherOne()}>+</button>
      </div>
    </>
  );
};

export {CartItem};