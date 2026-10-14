function Carrinho({ carrinho, onAumentar, onDiminuir, onRemover }) {
  const total = carrinho.reduce(
    (soma, produto) => soma + produto.preco * produto.quantidade,
    0
  );

  return (
    <section className="carrinho">
      <h2>Meu Carrinho ({carrinho.length})</h2>

      {carrinho.length === 0 ? (
        <p>Seu carrinho está vazio.</p>
      ) : (
        carrinho.map((produto) => {
          const subtotal = produto.preco * produto.quantidade;

          return (
            <div key={produto.id} className="item-carrinho">
              <span className="produto-emoji" aria-hidden="true">{produto.emoji}</span>
              <div className="item-info">
                <strong>{produto.nome}</strong>
                <p>R$ {produto.preco.toFixed(2)}</p>
                <p>Quantidade: {produto.quantidade}</p>
                <p className="subtotal">Subtotal: R$ {subtotal.toFixed(2)}</p>

                <div className="controle-qtd">
                  <button
                    onClick={() => onDiminuir(produto.id)}
                    disabled={produto.quantidade === 1}
                  >
                    −
                  </button>
                  <span>{produto.quantidade}</span>
                  <button onClick={() => onAumentar(produto.id)}>+</button>
                  <button
                    className="remover"
                    onClick={() => onRemover(produto.id)}
                  >
                    Remover
                  </button>
                </div>
              </div>
            </div>
          );
        })
      )}

      <div className="total-carrinho">
        <strong>Total da compra:</strong>
        <span>R$ {total.toFixed(2)}</span>
      </div>

      <small>Aula 08: subtotal = preço × quantidade; o total é a soma dos subtotais com reduce().</small>
    </section>
  );
}

export default Carrinho;
