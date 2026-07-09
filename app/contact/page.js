"use client";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import SocialContactPanel from "../../components/SocialContactPanel";
import { useLanguage } from "../../components/useLanguage";

export default function ContactPage() {
  const { t } = useLanguage();

  return (
    <>
      <Header t={t} />
      <main className="page-shell">
        <section className="page-hero">
          <p className="eyebrow">{t.contact.eyebrow}</p>
          <h1>{t.contact.title}</h1>
          <p>{t.contact.copy}</p>
        </section>

        <section className="contact-section compact single">
          <SocialContactPanel t={t} />
        </section>
      </main>
      <Footer t={t} />
    </>
  );
}
