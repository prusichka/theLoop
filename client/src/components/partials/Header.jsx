import React from 'react'
import logo from '../../images/logo.png'
import cart from '../../images/cart.svg'
import MobileMenu from "./MobileMenu";
import { Link } from 'react-router-dom';
import {useSelector} from "react-redux";

const Header = () => {
  const cartElement = useSelector(state => state.cart.cartArr)
  return (
    <>
      <MobileMenu />
      <section className="head">
        <div className="inner">
          <header>
            <ul>
              <li><a href="#">Для мужчин</a></li>
              <li><a href="#">Для женщин</a></li>
              <li><a href="#">Для детей</a></li>
              <li>
                <Link to='/' className="logo"><img src={logo} alt='logo' /></Link>
              </li>
              <li>
                <Link to='/about'>Оплата</Link>
              </li>
              <li>
                <Link to='/contacts'>Доставка</Link>
              </li>
            </ul>
            <Link to='cart'>
              <div className="cart">
                <img src={cart} alt="" />
                <strong>{cartElement.length}</strong>
            </div>
            </Link>
          </header>
        </div>
      </section>
    </>
  )
}

export { Header }
