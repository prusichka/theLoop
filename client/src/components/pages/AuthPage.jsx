import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../context/AuthContext'
import { useHttp } from '../hooks/http.hook'
import { useMessage } from '../hooks/message.hook'

const AuthPage = () => {
  const auth = useContext(AuthContext)
  const { loading, request, error, clearError } = useHttp()
  const message = useMessage()
  const [form, setForm] = useState({
    email: '', password: ''
  })

  useEffect(() => {
    message(error)
    clearError()
  }, [error, message, clearError])

  const changeHandler = event => {
    setForm({ ...form, [event.target.name]: event.target.value })
  }

  const registerHandler = async () => {
    try {
      const data = await request('/auth/register', 'POST', { ...form })
    } catch (e) { }
  }

  const loginHandler = async () => {
    try {
      const data = await request('/auth/login', 'POST', { ...form })
      console.log(data);
      auth.login(data.token, data.userId)
    } catch (e) { }
  }

  return (
    <div className="section-auth">
      <div className="inner">
        <div className="form-wrap">
          <div className="inputs">
            <span className="title">Авторизация</span>
            <div>

              <div className="field">
                <input
                  placeholder="Введите email"
                  id="email"
                  type="text"
                  name="email"
                  className=""
                  value={form.email}
                  onChange={changeHandler}
                />
                <label htmlFor="email">Email</label>
              </div>

              <div className="field">
                <input
                  placeholder="Введите пароль"
                  id="password"
                  type="password"
                  name="password"
                  className=""
                  value={form.password}
                  onChange={changeHandler}
                />
                <label htmlFor="email">Пароль</label>
              </div>

            </div>
          </div>
          <div className="buttons">
            <button
              className=""
              disabled={loading}
              onClick={loginHandler}
            >
              Войти
            </button>
            <button
              className=""
              onClick={registerHandler}
              disabled={loading}
            >
              Регистрация
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export { AuthPage }
