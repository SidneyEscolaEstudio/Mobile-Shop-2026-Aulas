function Carrinho({ carrinho }) {
  return (
    <section className="carrinho">
      <h2>Meu Carrinho ({carrinho.length})</h2>

      {carrinho.length === 0 ? (
        <p>Seu carrinho está vazio.</p>
      ) : (
        carrinho.map((produto) => (
          <div key={produto.id} className="item-carrinho">
            <span className="produto-emoji" aria-hidden="true">{produto.emoji}</span>
            <div>
              <strong>{produto.nome}</strong>
              <p>R$ {produto.preco.toFixed(2)}</p>
            </div>
          </div>
        ))
      )}

      <small>Aula 06: o Carrinho recebe o estado e lista todos os produtos adicionados.</small>
    </section>
  );
}

export default Carrinho;
