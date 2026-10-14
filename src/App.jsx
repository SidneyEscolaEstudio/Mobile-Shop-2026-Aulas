import { useState } from "react";
import Home from "./pages/Home";
import Carrinho from "./components/Carrinho";
import { produtos } from "./data/produtos";

function App() {
  const [carrinho, setCarrinho] = useState([]);

  function adicionarProduto(produto) {
    setCarrinho([...carrinho, produto]);
  }

  return (
    <div className="app">
      <header className="topo">
        <div>
          <strong className="logo">MobileTech</strong>
          <span>Mobile Shop</span>
        </div>
        <span className="aula-badge">Aula 06</span>
      </header>

      <div className="conteudo">
        <Home produtos={produtos} onAdicionar={adicionarProduto} />
        <Carrinho carrinho={carrinho} />
      </div>
    </div>
  );
}

export default App;
