import React from 'react'
import logo from '../../images/logo.png'
import cart from '../../images/cart.svg'
import MobileMenu from "./MobileMenu";
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

const Header = () => {
  const cartElement = useSelector(state => state.cart.cartArr)
  const auth = useContext(AuthContext)
  const history = useNavigate()

  const logoutHandler = event => {
    event.preventDefault()
    auth.logout()
    history('/auth')
  }

  return (
    <>
      <MobileMenu />
      <section className="head">
        <div className="inner">
          <header>
            <ul>
              <li><Link to="/products">Для мужчин</Link></li>
              <li><Link to="/products">Для женщин</Link></li>
              <li><Link to="/products">Для детей</Link></li>
              <li><Link to='/' className="logo"><img src={logo} alt='logo' /></Link></li>
              <li><Link to='/about'>Оплата</Link></li>
              <li><Link to='/contacts'>Доставка</Link></li>
              <li><Link to='/create'>Создать</Link></li>
              <li><Link to='/auth' onClick={logoutHandler}>Выйти</Link></li>
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
