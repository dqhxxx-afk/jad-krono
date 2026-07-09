"use client";

import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import WatchCard from "../../../components/WatchCard";
import { useLanguage } from "../../../components/useLanguage";
import { products, site } from "../../../data/site";

export default function WatchDetailPage({ params }) {
  const { lang, t } = useLanguage();
  const product = products.find((item) => item.id === params.id);

  if (!product) {
    return (
      <>
        <Header t={t} />
        <main className="page-shell">
          <section className="page-hero">
            <p className="eyebrow">JAD KRONO</p>
            <h1>Watch not found.</h1>
            <p>This reference may no longer be available.</p>
            <a className="btn gold" href="/collection">Back to Collection</a>
          </section>
        </main>
        <Footer t={t} />
      </>
    );
  }

  const related = products
    .filter((item) => item.id !== product.id)
    .filter((item) => item.category === product.category || item.featured)
    .slice(0, 3);

  const message = encodeURIComponent(
    `Hello JAD KRONO, I would like to enquire about ${product.brand} ${product.model} ${product.reference}.`
  );

  const gallery = product.gallery && product.gallery.length > 0
    ? product.gallery
    : product.image
      ? [product.image]
      : [];

  return (
    <>
      <Header t={t} />

      <main className="product-detail-shell">
        <section className="product-detail-hero">
          <div className="detail-gallery">
            <div className="main-watch-frame">
              {gallery.length > 0 ? (
                <img src={gallery[0]} alt={`${product.brand} ${product.model}`} />
              ) : (
                <div className="large-watch-placeholder" />
              )}
            </div>

            <div className="thumb-grid">
              {(gallery.length > 1 ? gallery.slice(1, 5) : [null, null, null]).map((image, index) => (
                <div className="thumb" key={index}>
                  {image ? <img src={image} alt={`${product.brand} ${product.model} ${index + 2}`} /> : <div />}
                </div>
              ))}
            </div>
          </div>

          <div className="detail-info">
            <p className="eyebrow">{product.brand}</p>
            <h1>{product.model}</h1>
            <h2>{product.reference}</h2>
            <p className="detail-copy">{product.description[lang]}</p>

            <div className="detail-status-row">
              <span>{product.status}</span>
              <strong>{product.price}</strong>
            </div>

            <div className="detail-spec-list">
              <div><span>Year</span><strong>{product.year}</strong></div>
              <div><span>Condition</span><strong>{product.condition}</strong></div>
              <div><span>Set</span><strong>{product.set}</strong></div>
              <div><span>Case</span><strong>{product.specs.case}</strong></div>
              <div><span>Movement</span><strong>{product.specs.movement}</strong></div>
              <div><span>Material</span><strong>{product.specs.material}</strong></div>
              <div><span>Bracelet</span><strong>{product.specs.bracelet}</strong></div>
            </div>

            <div className="detail-actions">
              <a className="btn gold" href={`${site.whatsapp}?text=${message}`} target="_blank">
                Enquire on WhatsApp
              </a>
              <a className="btn ghost" href="/collection">
                Back to Collection
              </a>
            </div>

            <div className="detail-note">
              <strong>Private appointment</strong>
              <p>Availability, condition and pricing may change with market movement. Please enquire for the latest details.</p>
            </div>
          </div>
        </section>

        <section className="detail-editorial">
          <div>
            <p className="eyebrow">Collector Context</p>
            <h2>Why this reference matters.</h2>
          </div>
          <p>
            {lang === "en"
              ? "JAD KRONO reviews each reference through condition, set completeness, market liquidity and collector demand before presentation."
              : "JAD KRONO xem xét mỗi reference qua tình trạng, độ đầy đủ của set, thanh khoản thị trường và nhu cầu sưu tầm trước khi giới thiệu."}
          </p>
        </section>

        {related.length > 0 ? (
          <section className="related-section">
            <div className="section-heading">
              <p className="eyebrow">Related Watches</p>
              <h2>Other references to consider.</h2>
            </div>
            <div className="watch-grid">
              {related.map((item) => (
                <WatchCard key={item.id} product={item} lang={lang} enquireText={t.collection.enquire} />
              ))}
            </div>
          </section>
        ) : null}
      </main>

      <Footer t={t} />
    </>
  );
}
