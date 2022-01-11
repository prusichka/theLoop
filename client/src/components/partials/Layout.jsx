import React from 'react'
import { Outlet } from 'react-router-dom'
import { Footer } from './Footer'
import { Header } from './Header'

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      <div className="copyright">
        <div className="inner">
          <span>Copyright © 2019. Все права защищены</span>
          <span>Политика приватности</span>
        </div>
      </div>
    </>
  )
}

export { Layout }
