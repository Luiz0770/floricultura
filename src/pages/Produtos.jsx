import Menu from "./Menu";
import "./Produtos.css";

function Produto() {
  return (
    <div>
      <div className="titulo">
        <h1>Pagina de Produtos</h1>
      </div>

      <div className="menu">
        <Menu />
      </div>

      <div>
        <div className="card">
          <img
            src={"https://media.discordapp.net/attachments/960884773725831228/1104900365566083102/27121gg.webp"} alt="Workflow" />
          <h4>
            <b>ROSA ENCANTADA AZUL</b>
          </h4>
          <p>R$60,00</p>
        </div>
      </div>

      <div>
        <div className="card">
          <img
            src={"https://stack.flowermarket.com.br/webflowers/images/produto/400_10681.jpg"} alt="Workflow" />
          <h4>
            <b>BUQUE DE FLORES BRANCAS</b>
          </h4>
          <p>R$120,00</p>
        </div>
      </div>

      <div>
        <div className="card">
          <img
            src={"https://stack.flowermarket.com.br/webflowers/images/produto/400_3502.jpg"} alt="Workflow" />
          <h4>
            <b>BUQUE DE 3 ROSAS COLOMBIANAS</b>
          </h4>
          <p>R$150,00</p>
        </div>
      </div>
    </div>
  );
}

export default Produto;
