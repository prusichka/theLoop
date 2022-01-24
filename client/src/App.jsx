import React from 'react'
import { useRoutes } from './routes';
import './style.scss'
import { Provider } from "react-redux";
import { store } from './store/store';
import { useAuth } from './components/hooks/auth.hook';
import { AuthContext } from './context/AuthContext';

function App() {
  const { token, login, logout, userId } = useAuth()
  const isAuthtentificated = !!token
  const routes = useRoutes(isAuthtentificated)
  return (
    <AuthContext.Provider value={{
      token, login, logout, userId, isAuthtentificated
    }}>

      <Provider store={store}>
        {routes}
      </Provider>
    </AuthContext.Provider>
  );
}

export { App };
