import "../styles/page/log.css"
import { useState } from "react";

//
import api from '../utils/api'

export function Login() {
  const [data,setData]= useState('')
  async function login (){
    setData(await api.post('/auth/login'))
    console.log(data.data)
  }



  return (
    <div className="body_log">
      <header className="header_log">
        <a href="/">
          <i class="fa-solid fa-house"></i>
        </a>
      </header>

      <div className="login">
        <div className="form_log">
              {data}
            <label>Login</label>
            <label>email</label>
            <input type="email" name="email" />
            <label>Senha</label>
            <input type="password" name="pass" id="pass" />
            <input type='submit' onClick={login} ></input>

        </div>

        <div className="form_log">
          <form method="post">
          <label>Cadastro</label>
            <div className="form_label">
            <label>Nome</label>
            <input type="text" />
            </div>

            <div className="form_label">
            <label>Email</label>
            <input type="email" name="email" />
            </div>

            <div className="form_label">
            <label>Senha</label>
            <input type="password" name="pass" id="pass" />
            </div>


          </form>
        </div>
      </div>
    </div>
  )
}
