import { BrowserRouter, Routes, Route } from "react-router-dom"
import Contato from "./pages/Contato"
import Home from "./pages/Home"
import Produto from "./pages/Produtos"

function App(){
  return(
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/contato" element={<Contato/>}/>
          <Route path="/produto" element={<Produto/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App