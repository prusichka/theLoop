import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

import { Layout } from './components/partials/Layout';
import { Home } from './components/pages/Home';
import { SingleItem } from "./components/pages/SingleItem";
import { Products } from "./components/pages/Products";
import { AuthPage } from './components/pages/AuthPage';
import { Cart } from "./components/сart/Cart";
import { Create } from './components/pages/Create';
import {Payment} from "./components/pages/Payment";

export const useRoutes = isAuthentificated => {
  if (isAuthentificated) {
    return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='products' element={<Products />} />
          <Route path='create' element={<Create />} />
          <Route path='payment' element={<Payment />} />
          <Route path='cart' element={<Cart />} />
          <Route path='category' element={<Products />} >
            <Route path='*' element={<Products />} />
          </Route>
          <Route path='type' element={<Products />} >
            <Route path='*' element={<Products />} />
          </Route>
          <Route path='*' element={<Navigate to="/" />} />
          <Route path='single-item' element={<SingleItem />} >
            <Route path=':id' element={<SingleItem />} />
          </Route>
        </Route>
      </Routes>
    )
  }

  else {
    return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="auth" element={<AuthPage />} />
          <Route path="*" element={<Navigate to="auth" />} />
        </Route>
      </Routes>
    )
  }
}
