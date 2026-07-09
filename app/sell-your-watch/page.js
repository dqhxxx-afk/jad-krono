"use client";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useLanguage } from "../../components/useLanguage";

export default function SellPage() {
  const { lang, setLang, t } = useLanguage();

  return (
    <>
      <Header lang={lang} setLang={setLang} t={t} />
      <main className="page-shell">
        <section className="page-hero">
          <p className="eyebrow">{t.sell.eyebrow}</p>
          <h1>{t.sell.title}</h1>
          <p>{t.sell.copy}</p>
        </section>
        <section className="section tight dark-panel">
          <form className="valuation-form" action="https://wa.me/6586996868" target="_blank">
            <div className="form-row">
              <input type="text" placeholder="Name / Tên" />
              <input type="text" placeholder="WhatsApp / Phone" />
            </div>
            <div className="form-row">
              <input type="text" placeholder="Brand, e.g. Rolex" />
              <input type="text" placeholder="Model / Reference" />
            </div>
            <div className="form-row">
              <input type="text" placeholder="Year / Box & Papers" />
              <input type="text" placeholder="Expected Price" />
            </div>
            <textarea placeholder="Condition, service history, accessories, and any notes" />
            <button className="btn primary" type="submit">{t.sell.button}</button>
          </form>
        </section>
      </main>
      <Footer t={t} />
    </>
  );
}
