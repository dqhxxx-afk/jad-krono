import { site } from "../data/site";

export default function WatchCard({ product, enquireText = "Enquire", large = false }) {
  const message = encodeURIComponent(
    `Hello JAD KRONO, I would like to enquire about ${product.brand} ${product.model} ${product.reference}.`
  );

  return (
    <article className={large ? "watch-card large" : "watch-card"}>
      <a className="watch-image" href={`/collection/${product.id}`}>
        {product.image ? (
          <img src={product.image} alt={`${product.brand} ${product.model}`} />
        ) : (
          <div className="watch-placeholder" />
        )}
        <span className={`status-badge ${String(product.status).toLowerCase().replace(/\s+/g, "-")}`}>{product.status}</span>
      </a>

      <div className="watch-info">
        <p>{product.brand}</p>
        <h3>{product.model}</h3>
        <strong>{product.reference}</strong>

        <div className="watch-meta">
          <em>{product.year}</em>
          <em>{product.condition}</em>
          <em>{product.set}</em>
        </div>

        <div className="watch-actions">
          <span>{product.price}</span>
          <a href={`/collection/${product.id}`}>View</a>
          <a href={`${site.whatsapp}?text=${message}`} target="_blank">{enquireText}</a>
        </div>
      </div>
    </article>
  );
}
