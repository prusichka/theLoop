import footerLogo from '../../images/footer-logo.png'
import React from 'react'


const Footer = () => {
  return (
    <>
      <footer>
        <div className="inner">
          <ul>
            <li><img src={footerLogo} alt="" /></li>
            <li><p className="footer-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla faucibus egestas elit, at eleifend elit ornare ut.</p></li>
          </ul>
          <div className="footer-lists">

            <ul>
              <li>Основные ссылки</li>
              <li>О компании</li>
              <li>Каталог</li>
              <li>Доставка</li>
              <li>Оплата</li>
            </ul>
            <ul>
              <li>Категории</li>
              <li>Мужская одежда</li>
              <li>Женская одежда</li>
              <li>Детская одежда</li>
              <li>Для животных</li>
            </ul>
            <ul>
              <li>ПОЛЕЗНЫЕ ССЫЛКИ</li>
              <li>Таблица размеров</li>
              <li>Блог о моде</li>
              <li>Наша миссия</li>
            </ul>
            <ul>
              <li>СОЦ СЕТИ</li>
              <li>VK.com</li>
              <li>Facebook</li>
              <li>Instagram</li>
            </ul>
          </div>
        </div>
      </footer>
      <div className="copyright">
        <div className="inner">
          <span>Copyright © 2019. Все права защищены</span>
          <span>Политика приватности</span>
        </div>
      </div>
    </>

  )
}

export { Footer }
