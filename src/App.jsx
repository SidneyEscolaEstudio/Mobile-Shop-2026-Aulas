import { useState } from "react";
import Home from "./pages/Home";
import Carrinho from "./components/Carrinho";
import { produtos } from "./data/produtos";

function App() {
  const [carrinho, setCarrinho] = useState([]);

  function adicionarProduto(produto) {
    const produtoExistente = carrinho.find(
      (item) => item.id === produto.id
    );

    if (produtoExistente) {
      setCarrinho(
        carrinho.map((item) =>
          item.id === produto.id
            ? { ...item, quantidade: item.quantidade + 1 }
            : item
        )
      );
    } else {
      setCarrinho([...carrinho, { ...produto, quantidade: 1 }]);
    }
  }

  function aumentarQuantidade(id) {
    setCarrinho(
      carrinho.map((item) =>
        item.id === id
          ? { ...item, quantidade: item.quantidade + 1 }
          : item
      )
    );
  }

  function diminuirQuantidade(id) {
    setCarrinho(
      carrinho.map((item) => {
        if (item.id === id && item.quantidade > 1) {
          return { ...item, quantidade: item.quantidade - 1 };
        }
        return item;
      })
    );
  }

  function removerProduto(id) {
    setCarrinho(carrinho.filter((item) => item.id !== id));
  }

  return (
    <div className="app">
      <header className="topo">
        <div>
          <strong className="logo">MobileTech</strong>
          <span>Mobile Shop</span>
        </div>
        <span className="aula-badge">Aula 07</span>
      </header>

      <div className="conteudo">
        <Home produtos={produtos} onAdicionar={adicionarProduto} />
        <Carrinho
          carrinho={carrinho}
          onAumentar={aumentarQuantidade}
          onDiminuir={diminuirQuantidade}
          onRemover={removerProduto}
        />
      </div>
    </div>
  );
}

export default App;
