"use client";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
const faqs=[
["Are viewings by appointment only?","Yes. Private viewings are arranged by appointment in Singapore."],
["Do you buy watches?","Yes. We consider selected watches based on condition, completeness and current demand."],
["Do you accept consignments?","Yes. Consignment is available for selected timepieces after an initial review."],
["Can I trade my watch?","Selected trade opportunities may be considered."],
["Can you source a specific reference?","Yes. Send the reference, preferred year, condition and budget where relevant."],
["How are watches assessed?","Each watch is reviewed before it is listed. An independent inspection can also be arranged where required."],
["Do you ship internationally?","International delivery may be arranged subject to location, insurance and applicable requirements."],
["How do I enquire?","Contact JAD KRONO through WhatsApp, email, Instagram or Facebook."]
];
export default function FAQPage(){return <><Header/><main id="main-content" className="page-shell"><section className="page-hero"><p className="eyebrow">FAQ</p><h1>Frequently asked questions.</h1></section><section className="faq-section">{faqs.map(([q,a])=><article key={q}><h2>{q}</h2><p>{a}</p></article>)}</section></main><Footer/></>}
