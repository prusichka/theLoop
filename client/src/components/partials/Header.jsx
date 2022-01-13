import React from 'react'
import logo from '../../images/logo.png'
import cart from '../../images/cart.svg'
import MobileMenu from "./MobileMenu";
import { Link } from 'react-router-dom';

const Header = () => {
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
            <div className="cart">
              <img src={cart} alt="" />
              <strong>5</strong>
            </div>
          </header>
        </div>
      </section>
    </>
  )
}

export { Header }
