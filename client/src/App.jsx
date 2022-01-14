import React from 'react'
import { useRoutes } from './routes';
import './style.scss'

function App() {
  const routes = useRoutes(false)
  return (
    <>
      {routes}
    </>
  );
}

export { App };
