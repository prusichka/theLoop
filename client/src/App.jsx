import React from 'react'
import { useRoutes } from './routes';
import './style.scss'
import { Provider } from "react-redux";
import { store } from './store/store';
import { useAuth } from './components/hooks/auth.hook';

function App() {
  const { token, login, logout, userId, ready } = useAuth()
  const routes = useRoutes(true)
  return (
    <Provider store={store}>
      {routes}
    </Provider>
  );
}

export { App };
