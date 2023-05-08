import Menu from "./Menu";
import "./Home.css";

function Home() {
  return (
    <div>
      <div className="titulo">
        <h1>Pagina Principal</h1>
      </div>

      <div className="menu">
        <Menu />
      </div>
      <img src="https://cdn.discordapp.com/attachments/1105109890516647936/1105114011764260948/logo-removebg.png" alt="" />
    </div>
  );
}

export default Home;
