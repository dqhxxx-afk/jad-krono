import { site } from "../data/site";
import { getWatchId, sameWatchText } from "../lib/watchUtils";

export default function WatchCard({ product, enquireText = "Enquire" }) {
  const id = getWatchId(product);
  const message = encodeURIComponent(
    `Hello JAD KRONO, I would like to enquire about ${product.brand} ${product.model}, ref. ${product.reference}.`
  );
  const statusClass = String(product.status || "")
    .toLowerCase()
    .replace(/\s+/g, "-");
  const datedMeta = [product.condition, product.year].filter(Boolean).join(" · ");
  const showReference = product.reference && !sameWatchText(product.model, product.reference);

  return (
    <article className="watch-card">
      <a
        className="watch-image"
        href={`/collection/${id}`}
        aria-label={`View ${product.brand} ${product.model}`}
      >
        {product.image ? (
          <img
            src={product.image}
            alt={`${product.brand} ${product.model}, ref. ${product.reference}`}
            loading="lazy"
          />
        ) : (
          <div className="watch-placeholder">
            <img src="/assets/jad-krono-mark.png" alt="" />
          </div>
        )}
        <span className={`status-badge ${statusClass}`}>{product.status}</span>
      </a>

      <div className="watch-info">
        <p className="watch-brand">{product.brand}</p>
        <h3>{product.model}</h3>
        {showReference ? <strong>Ref. {product.reference}</strong> : null}

        {datedMeta ? (
          <div className="watch-meta">
            <span>{datedMeta}</span>
          </div>
        ) : null}

        <div className="watch-actions">
          <span>{product.price || "Price on request"}</span>
          <div>
            <a href={`/collection/${id}`}>View</a>
            <a
              href={`${site.whatsapp}?text=${message}`}
              target="_blank"
              rel="noreferrer"
            >
              {enquireText}
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
