import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, addItemCount, removeItemCount } from '../../store/reducers/cartReducer';

const CartItem = ({ element }) => {
  const dispatch = useDispatch()
  const cartElements = useSelector(state => state.cart.cartArr)
  console.log(cartElements);
  let [qty, setQty] = useState(1)
  // let totalProductPrice = qty * parseInt(element.price)
  // let qtyPrice = `${qty} * ${element.price}`

  const removeItem = (element) => {
    qty > 0
      ? dispatch(removeItemCount(element._id))
      : dispatch(removeFromCart(element._id))
  }
  const addAnotherOne = () => {
    dispatch(addItemCount(element._id))
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
              {/* {qtyPrice} */}
            </strong>
            <span>
              {/* {totalProductPrice} */}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export { CartItem };