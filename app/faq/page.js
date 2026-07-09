"use client";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useLanguage } from "../../components/useLanguage";

const faqs = [
  ["Are viewings by appointment only?", "Yes. Private viewings are arranged by appointment in Singapore."],
  ["Do you buy watches?", "Yes. JAD KRONO purchases selected luxury watches subject to review and market demand."],
  ["Do you accept consignments?", "Yes. We offer confidential consignment for carefully selected timepieces."],
  ["Can I trade my watch?", "Selected trade and upgrade opportunities may be considered."],
  ["Can you source a specific watch?", "Yes. We source exceptional references through our trusted international network."],
  ["Do you ship internationally?", "International delivery may be arranged where appropriate and subject to applicable requirements."],
  ["How do I enquire?", "Contact us directly through WhatsApp, Instagram, Facebook or email."]
];

export default function FAQPage() {
  const { t } = useLanguage();
  return (
    <>
      <Header t={t} />
      <main className="page-shell">
        <section className="page-hero">
          <p className="eyebrow">FAQ</p>
          <h1>Frequently asked questions.</h1>
        </section>
        <section className="faq-section">
          {faqs.map(([question, answer]) => (
            <article key={question}><h3>{question}</h3><p>{answer}</p></article>
          ))}
        </section>
      </main>
      <Footer t={t} />
    </>
  );
}
