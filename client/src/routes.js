import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

import { Layout } from './components/partials/Layout';
import { About } from './components/pages/About';
import { Contacts } from './components/pages/Contacts';
import { Home } from './components/pages/Home';
import { NotFound } from './components/pages/NotFound';
import SingleItem from "./components/pages/SingleItem";
import { Products } from "./components/pages/Products";
import AuthPage from './components/pages/AuthPage';

export const useRoutes = isAuthentificated => {
  if (isAuthentificated) {
    return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='contacts' element={<Contacts />} />
          <Route path='products' element={<Products />} />
          <Route path='category' element={<Products />} >
            <Route path='*' element={<Products />} />
          </Route>
          <Route path='type' element={<Products />} >
            <Route path='*' element={<Products />} />
          </Route>
          <Route path='*' element={<NotFound />} />
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
          <Route path="*"
            element={<Navigate to="auth" />}
          />
        </Route>
      </Routes>
    )
  }
}
