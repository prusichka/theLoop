import React from 'react'
import { useRoutes } from './routes';
import './style.scss'
import {Provider} from "react-redux";
import {store} from './store/store';

function App() {
  const routes = useRoutes(true)
  return (
    <Provider store={store}>
      {routes}
    </Provider>
  );
}

export { App };
