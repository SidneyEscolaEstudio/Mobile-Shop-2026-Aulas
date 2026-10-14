function Carrinho({ carrinho }) {
  const ultimoProduto = carrinho.at(-1);

  return (
    <section className="carrinho">
      <h2>Carrinho</h2>

      {!ultimoProduto ? (
        <p>Seu carrinho está vazio.</p>
      ) : (
        <div className="item-carrinho">
          <span className="produto-emoji" aria-hidden="true">{ultimoProduto.emoji}</span>
          <div>
            <strong>{ultimoProduto.nome}</strong>
            <p>R$ {ultimoProduto.preco.toFixed(2)}</p>
          </div>
        </div>
      )}

      <small>Aula 05: confirme se o produto clicado chega ao Carrinho.</small>
    </section>
  );
}

export default Carrinho;
