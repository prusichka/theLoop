import React from 'react';
import logo from "../../images/logo.png";

const MobileMenu = () => {
  const toggleMenu = (e) => {
    let menu = document.querySelector('.burger-menu');
    e.preventDefault();
    menu.classList.toggle('burger-menu_active')
  }
  return (
    <>
      <div className="burger-menu">
	  		<a className="burger-menu_button" onClick={toggleMenu}>
	    <span className="burger-menu_lines" />
	  </a>
	  		<nav className="burger-menu_nav">
				<ul>
					<li className="burger-menu_link"><a href="#">Для мужчин</a></li>
					<li className="burger-menu_link"><a href="#">Для женщин</a></li>
					<li className="burger-menu_link"><a href="#">Для детей</a></li>
					<li className="logo burger-menu_link">
						<img src={logo} alt="" />
					</li>
					<li className="burger-menu_link"><a href="#">Оплата</a></li>
					<li className="burger-menu_link"><a href="#">Доставка</a></li>
				</ul>
	  		</nav>
	  		<div className="burger-menu_overlay" />
			</div>
    </>
  );
};

export default MobileMenu;