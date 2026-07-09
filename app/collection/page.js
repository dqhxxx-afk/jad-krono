"use client";

import { useMemo, useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ProductCard from "../../components/ProductCard";
import { useLanguage } from "../../components/useLanguage";
import { products } from "../../data/products";

export default function CollectionPage() {
  const { lang, setLang, t } = useLanguage();
  const [filter, setFilter] = useState("all");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    return products
      .filter((p) => filter === "all" || p.category === filter)
      .filter((p) => `${p.brand} ${p.model} ${p.reference}`.toLowerCase().includes(query.toLowerCase()));
  }, [filter, query]);

  return (
    <>
      <Header lang={lang} setLang={setLang} t={t} />
      <main className="page-shell">
        <section className="page-hero">
          <p className="eyebrow">{t.collection.eyebrow}</p>
          <h1>{t.collection.title}</h1>
          <p>{t.collection.copy}</p>
        </section>
        <section className="section tight">
          <div className="toolbar">
            <div className="filters">
              {["all", "rolex", "patek", "ap", "rm", "tudor", "hublot"].map((item) => (
                <button key={item} className={filter === item ? "filter active" : "filter"} onClick={() => setFilter(item)}>
                  {item === "all" ? t.collection.all : item === "patek" ? "Patek Philippe" : item === "ap" ? "AP" : item === "rm" ? "RM" : item[0].toUpperCase() + item.slice(1)}
                </button>
              ))}
            </div>
            <input className="search-input" value={query} onChange={(e) => setQuery(e.target.value)} placeholder={t.collection.search} />
          </div>
          <div className="watch-grid">
            {filtered.map((product) => <ProductCard key={product.id} product={product} lang={lang} enquireText={t.collection.enquire} />)}
          </div>
          {filtered.length === 0 ? <p className="empty-text">{t.collection.noResults}</p> : null}
        </section>
      </main>
      <Footer t={t} />
    </>
  );
}
