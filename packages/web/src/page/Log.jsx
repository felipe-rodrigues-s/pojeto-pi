
import "../styles/page/log.css"
import React, { useState } from "react";

//
import api from '../utils/api'

function initialState() {
  return {
    email: '',
    password: '',
  }
}

export function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  async function login() {
    setData(await api.post('/auth/login'))
    console.log(data.data)
  }

  function handleSubmit(event){
    event.preventDefault();

  }

  const  [values, setValue] = useState(initialState);

  function onChange(event){
    const {value, name} = event.target
      setValue({
        ...values,
        [name]:  value,
      })
  };

  return (
    <div className="body_log">
      <header className="header_log">
        <a href="/">
          <i class="fa-solid fa-house"></i>
        </a>
      </header>

      <div className="login">
        <div className="form_log">
          <form onSubmit={handleSubmit}>
            <label>Login</label>

            <label htmlFor="email">email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              value={values.email}
              onChange={onChange}
            />

            <label
              htmlFor="password"
            >Senha
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              value={values.password}
              onChange={onChange}
            />

            <input
              type='submit'
              onClick={login}
            />
          </form>
        </div>

        <div className="form_log">
          <form onSubmit={handleSubmit}>
            <label>Cadastro</label>

            <div className="form_label">
              <label htmlFor="name">Nome</label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Nome"
              />
            </div>

            <div className="form_label">
              <label htmlFor="emailCadastro">Email</label>
              <input type="email"
                name="emailCadastro"
                id="emailCadastro"
                placeholder="Email"
              />
            </div>

            <div className="form_label">
              <label htmlFor="passwordCadastro">Senha</label>
              <input
                type="password"
                name="passwordCadastro"
                id="passwordCadastro"
                placeholder="Password"
              />
            </div>
            <div className="form_label">
              <input type='submit' onClick={login} ></input>
            </div>


          </form>
        </div>
      </div>
    </div>
  )
}
