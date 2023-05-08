import "./Login.css";

function Contato() {
  return (
    <div>
      <div className="container">
        <header className="header">
          <h1>Faça o Login</h1>
        </header>

        <form>
          <div className="inputContainer">
            <label>Usuario</label>
            <input
              type="text"
              name="email"
              id="email"
              placeholder="exemplo@email.com"
            ></input>
          </div>

          <div className="inputContainer">
            <label>Senha</label>
            <input
              type="password"
              name="password"
              id="password  "
              placeholder="***********"
            ></input>
          </div>

          <button className="button">Login</button>

          <div className="footer">
            <p>Não tenho conta?</p>
            <a href="/contato">Crie um conta!</a>
          </div>
        </form>
        <div className="menu">
            <a href="/"> ← Voltar para tela principal</a>&nbsp;&nbsp;&nbsp;
            <a href="/produto">Ir para tela de produtos →</a>&nbsp;&nbsp;&nbsp;
        </div>
      </div>
    </div>
  );
}

export default Contato;
