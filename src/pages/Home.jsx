import ProductCard from "../components/ProductCard";

function Home({ produtos, onAdicionar }) {
  return (
    <main>
      <section className="hero">
        <p className="eyebrow">MobileTech • Mobile Shop 2026</p>
        <h1>Produtos em destaque</h1>
        <p>Escolha um produto e clique em Comprar.</p>
      </section>

      <section className="grade-produtos">
        {produtos.map((produto) => (
          <ProductCard
            key={produto.id}
            produto={produto}
            onAdicionar={onAdicionar}
          />
        ))}
      </section>
    </main>
  );
}

export default Home;
