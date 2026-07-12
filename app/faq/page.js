"use client";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

const faqs = [
  [
    "Are viewings by appointment only?",
    "Yes. Viewings are arranged by appointment in Singapore."
  ],
  [
    "Do you buy watches?",
    "Yes. We review watches based on condition, set and current demand."
  ],
  [
    "Do you accept consignments?",
    "Yes. Selected watches may be offered on consignment after an initial review."
  ],
  [
    "Can I trade my watch?",
    "Yes. Trades are considered on a case-by-case basis."
  ],
  [
    "Can you source a specific reference?",
    "Yes. Send us the reference, preferred year, condition and budget."
  ],
  [
    "How are watches assessed?",
    "We review the watch, its condition, set and current market demand. Further details can be provided on request."
  ],
  [
    "Do you ship internationally?",
    "International delivery may be available depending on the destination and insurance options."
  ],
  [
    "How do I enquire?",
    "Contact JAD KRONO through WhatsApp, email, Instagram or Facebook."
  ]
];

export default function FAQPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="page-shell">
        <section className="page-hero">
          <p className="eyebrow">FAQ</p>
          <h1>Frequently asked questions.</h1>
        </section>

        <section className="faq-section">
          {faqs.map(([question, answer]) => (
            <article key={question}>
              <h2>{question}</h2>
              <p>{answer}</p>
            </article>
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
}
