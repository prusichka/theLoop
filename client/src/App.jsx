import React from 'react'
import { useRoutes } from './routes';
import './style.scss'

function App() {
  const routes = useRoutes(true)
  return (
    <>
      {routes}
    </>
  );
}

export { App };
