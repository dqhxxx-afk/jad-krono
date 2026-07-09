export default function ProductCard({ product, lang, enquireText }) {
  const message = encodeURIComponent(
    `Hello JAD KRONO, I am interested in ${product.brand} ${product.model} ${product.reference}.`
  );

  return (
    <article className="product-card">
      <div className="product-visual">
        {product.image ? <img src={product.image} alt={`${product.brand} ${product.model}`} /> : null}
        <div className="product-badge">{product.status}</div>
      </div>
      <div className="product-meta">
        <span>{product.brand}</span>
        <strong>{product.model} {product.reference}</strong>
        <p>{product.year} • {product.set} • {product.condition}</p>
        <p>{product.description[lang]}</p>
        <div className="spec-grid">
          <small>{product.specs.case}</small>
          <small>{product.specs.movement}</small>
          <small>{product.specs.material}</small>
          <small>{product.specs.bracelet}</small>
        </div>
        <div className="product-footer">
          <em>{product.price}</em>
          <a href={`https://wa.me/6586996868?text=${message}`} target="_blank">{enquireText}</a>
        </div>
      </div>
    </article>
  );
}
