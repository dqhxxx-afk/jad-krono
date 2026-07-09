"use client";
import { useMemo, useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import WatchCard from "../../components/WatchCard";
import { useLanguage } from "../../components/useLanguage";
import { products } from "../../data/site";

export default function CollectionPage() {
  const { lang, setLang, t } = useLanguage();
  const [filter, setFilter] = useState("all");
  const [query, setQuery] = useState("");
  const shownProducts = useMemo(() => products.filter((p) => filter === "all" || p.category === filter).filter((p) => `${p.brand} ${p.model} ${p.reference}`.toLowerCase().includes(query.toLowerCase())), [filter, query]);

  return (
    <>
      <Header lang={lang} setLang={setLang} t={t} />
      <main className="page-shell">
        <section className="page-hero"><p className="eyebrow">{t.collection.eyebrow}</p><h1>{t.collection.title}</h1><p>{t.collection.copy}</p></section>
        <section className="collection-section compact">
          <div className="collection-toolbar">
            <div className="filters">{["all","rolex","patek","ap","rm","tudor","hublot"].map((item) => <button key={item} onClick={() => setFilter(item)} className={filter === item ? "active" : ""}>{item === "all" ? t.collection.all : item === "patek" ? "Patek Philippe" : item === "ap" ? "AP" : item === "rm" ? "RM" : item.toUpperCase()}</button>)}</div>
            <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder={t.collection.search} />
          </div>
          <div className="watch-grid">{shownProducts.map((product) => <WatchCard key={product.id} product={product} lang={lang} enquireText={t.collection.enquire} />)}</div>
        </section>
      </main>
      <Footer t={t} />
    </>
  );
}
