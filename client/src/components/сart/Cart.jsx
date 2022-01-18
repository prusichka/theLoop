import React, {useState} from 'react';
import {useSelector} from "react-redux";
import {CartItem} from "./CartItem";

const Cart = () => {
  const cartElements = useSelector(state => state.cart.cartArr)
  const [cartItems, setCartItems] = useState(cartElements)


  return (
    <section className='cart-section'>
      <div className="inner">
        {cartElements.length !== 0
          ? cartElements.map((el,id) => {
            return (
              <CartItem key={id} element={el} cartItems={cartItems} setCartItems={setCartItems}/>
            )
          })
          : <h3>
            Cart is empty
          </h3>
        }
        <strong>

        </strong>
      </div>
    </section>
  );
};

export {Cart};