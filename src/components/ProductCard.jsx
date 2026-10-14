function ProductCard({ produto, onAdicionar }) {
  return (
    <article className="produto-card">
      <div className="produto-emoji" aria-hidden="true">{produto.emoji}</div>
      <h3>{produto.nome}</h3>
      <p>R$ {produto.preco.toFixed(2)}</p>
      <button onClick={() => onAdicionar(produto)}>Comprar</button>
    </article>
  );
}

export default ProductCard;
