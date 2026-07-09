import { site } from "../data/site";

export default function WatchCard({ product, lang, enquireText, large = false }) {
  const message = encodeURIComponent(`Hello JAD KRONO, I would like to enquire about ${product.brand} ${product.model} ${product.reference}.`);

  return (
    <article className={large ? "watch-card large" : "watch-card"}>
      <div className="watch-image">
        {product.image ? <img src={product.image} alt={`${product.brand} ${product.model}`} /> : <div className="watch-placeholder" />}
        <span>{product.status}</span>
      </div>
      <div className="watch-info">
        <p>{product.brand}</p>
        <h3>{product.model}</h3>
        <strong>{product.reference}</strong>
        <div className="watch-meta"><em>{product.year}</em><em>{product.condition}</em><em>{product.set}</em></div>
        <p className="watch-copy">{product.description[lang]}</p>
        <div className="watch-specs"><small>{product.specs.case}</small><small>{product.specs.movement}</small><small>{product.specs.material}</small><small>{product.specs.bracelet}</small></div>
        <div className="watch-actions"><span>{product.price}</span><a href={`${site.whatsapp}?text=${message}`} target="_blank">{enquireText}</a></div>
      </div>
    </article>
  );
}
