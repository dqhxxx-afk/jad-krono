"use client";

import { useParams } from "next/navigation";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import WatchCard from "../../../components/WatchCard";
import { useLanguage } from "../../../components/useLanguage";
import { useWatches } from "../../../components/useWatches";
import { site } from "../../../data/site";
import { getWatchId } from "../../../lib/watchUtils";

export default function WatchDetailPage() {
  const params = useParams();
  const routeId = Array.isArray(params?.id) ? params.id[0] : params?.id;
  const { t } = useLanguage();
  const { watches, loading } = useWatches();
  const product = watches.find((item) => getWatchId(item) === routeId);

  if (loading) {
    return (
      <>
        <Header t={t} />
        <main className="page-shell"><section className="page-hero"><p className="eyebrow">Collection</p><h1>Loading watch.</h1></section></main>
        <Footer t={t} />
      </>
    );
  }

  if (!product) {
    return (
      <>
        <Header t={t} />
        <main className="page-shell">
          <section className="page-hero">
            <p className="eyebrow">Collection</p>
            <h1>This reference is unavailable.</h1>
            <p>Private sourcing enquiries are welcome.</p>
            <a className="btn gold" href={`${site.whatsapp}?text=Hello%20JAD%20KRONO%2C%20I%20would%20like%20to%20request%20private%20sourcing.`} target="_blank" rel="noreferrer">Request Sourcing</a>
          </section>
        </main>
        <Footer t={t} />
      </>
    );
  }

  const gallery = product.gallery?.length ? product.gallery : product.image ? [product.image] : [];
  const related = watches.filter((item) => getWatchId(item) !== getWatchId(product)).slice(0, 3);
  const message = encodeURIComponent(`Hello JAD KRONO, I would like to enquire about ${product.brand} ${product.model} ${product.reference}.`);

  return (
    <>
      <Header t={t} />
      <main className="product-shell">
        <section className="product-hero">
          <div className="product-gallery">
            <div className="main-watch-frame">
              {gallery[0] ? <img src={gallery[0]} alt={`${product.brand} ${product.model}`} /> : <div className="large-watch-placeholder" />}
            </div>
            <div className="thumb-grid">
              {[0, 1, 2].map((index) => (
                <div className="thumb" key={index}>{gallery[index + 1] ? <img src={gallery[index + 1]} alt={`${product.brand} detail ${index + 1}`} /> : <div />}</div>
              ))}
            </div>
          </div>

          <div className="product-info">
            <p className="eyebrow">{product.brand}</p>
            <h1>{product.model}</h1>
            <h2>{product.reference}</h2>
            <p>{product.description}</p>

            <div className="product-status"><span>{product.status}</span><strong>{product.price}</strong></div>

            <div className="detail-list">
              <div><span>Reference</span><strong>{product.reference}</strong></div>
              <div><span>Year</span><strong>{product.year}</strong></div>
              <div><span>Overall Condition</span><strong>{product.condition}</strong></div>
              <div><span>Box & Papers</span><strong>{product.set}</strong></div>
              <div><span>Case</span><strong>{product.specs?.case}</strong></div>
              <div><span>Movement</span><strong>{product.specs?.movement}</strong></div>
              <div><span>Material</span><strong>{product.specs?.material}</strong></div>
              <div><span>Location</span><strong>Singapore</strong></div>
            </div>

            <div className="product-actions"><a className="btn gold" href={`${site.whatsapp}?text=${message}`} target="_blank" rel="noreferrer">Enquire via WhatsApp</a><a className="btn ghost" href="/collection">Back to Collection</a></div>
          </div>
        </section>

        {related.length ? <section className="related-section"><div className="section-heading"><p className="eyebrow">Related</p><h2>Other references.</h2></div><div className="watch-grid">{related.map((item) => <WatchCard key={getWatchId(item)} product={item} enquireText="Enquire" />)}</div></section> : null}
      </main>
      <Footer t={t} />
    </>
  );
}
