
import React from 'react';
import { useDispatch } from 'react-redux';
import { removeFromCart, addItemCount, removeItemCount } from '../../store/reducers/cartReducer';

const CartItem = ({ element }) => {
  const dispatch = useDispatch()

  const removeItem = (element) => {
    element.qty > 1
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
              {element.qty} x {element.price}
            </strong>
            <span>
              {element.qty * element.price}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export { CartItem };