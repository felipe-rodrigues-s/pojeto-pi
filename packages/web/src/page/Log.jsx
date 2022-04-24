import "../styles/page/log.css"
export function Login() {
  return (
    <div className="body_log">
      <header className="header_log">
        <a href="/">
          <i class="fa-solid fa-house"></i>
        </a>
      </header>

      <div className="login">
        <div className="form_log">
          <form action="/" method="post">
            <label>Login</label>
            <label>email</label>
            <input type="email" name="email" />
            <label>Senha</label>
            <input type="password" name="pass" id="pass" />
          </form>
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
