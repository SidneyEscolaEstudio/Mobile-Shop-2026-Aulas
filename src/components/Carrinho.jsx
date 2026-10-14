function Carrinho({ carrinho, onAumentar, onDiminuir, onRemover }) {
  return (
    <section className="carrinho">
      <h2>Meu Carrinho ({carrinho.length})</h2>

      {carrinho.length === 0 ? (
        <p>Seu carrinho está vazio.</p>
      ) : (
        carrinho.map((produto) => (
          <div key={produto.id} className="item-carrinho">
            <span className="produto-emoji" aria-hidden="true">{produto.emoji}</span>
            <div className="item-info">
              <strong>{produto.nome}</strong>
              <p>R$ {produto.preco.toFixed(2)}</p>
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
        ))
      )}

      <small>Aula 07: produtos repetidos aumentam a quantidade; o botão − para em 1 e a remoção é feita separadamente.</small>
    </section>
  );
}

export default Carrinho;
