import type { Metadata } from "next";
import Link from "next/link";
import { FAQAccordion, type FAQItem } from "@/components/FAQAccordion";
import { ArrowIcon } from "@/components/Icons";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Answers about authenticity, private viewings, sourcing, consignment, payments and watch transactions with JAD KRONO.",
};

const faqItems: FAQItem[] = [
  {
    question: "How do you assess authenticity?",
    answer:
      "Every watch is reviewed through the information and physical details available to us, including reference-specific construction, movement and accompanying documents where applicable. For material transactions, independent verification can also be arranged and agreed before completion.",
  },
  {
    question: "Are all watches listed immediately available?",
    answer:
      "Availability can change quickly. A listing marked Available should still be confirmed before making plans. Watches marked Sourcing represent references we can actively look for, while Reserved pieces are currently held for another client.",
  },
  {
    question: "Can you find a watch that is not in the collection?",
    answer:
      "Yes. Send the brand, reference, preferred year, condition, set and budget. The more specific the brief, the easier it is to separate useful options from expensive distractions.",
  },
  {
    question: "How do private viewings work?",
    answer:
      "Viewings are arranged by appointment in Singapore. We confirm the watch and meeting details in advance. Identification or a refundable deposit may be requested for certain high-value pieces or special arrangements.",
  },
  {
    question: "Can I sell or trade my watch to JAD KRONO?",
    answer:
      "Yes. Begin with clear photographs of the watch, reference, year, condition and included accessories. Any initial indication is subject to physical inspection and verification before final terms are agreed.",
  },
  {
    question: "What does consignment include?",
    answer:
      "Consignment can include valuation guidance, presentation, buyer enquiries, viewings and transaction handling. Commercial terms, custody and the approval process are agreed in writing before the watch is offered.",
  },
  {
    question: "Which payment methods are accepted?",
    answer:
      "Accepted payment methods depend on the transaction and are confirmed before completion. Cleared funds are required before a watch is released. Cash handling, bank transfer and any cross-border payment requirements are considered case by case.",
  },
  {
    question: "Do you ship internationally?",
    answer:
      "International delivery may be possible for selected transactions, subject to payment, insurance, destination restrictions, taxes and import rules. These details are confirmed before the sale, because customs paperwork has never improved through optimism.",
  },
];

export default function FAQPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="The questions worth answering before money moves."
        body="A clear transaction starts before the viewing. These answers cover the usual process; specific watches and situations are confirmed directly."
        index="04"
      />
      <section className="section faq-section">
        <div className="container faq-layout">
          <aside>
            <p className="eyebrow">Need more detail?</p>
            <h2>Ask about the actual watch.</h2>
            <p>General answers are useful. A reference number, condition report and set of photographs are better.</p>
            <Link href="/contact" className="text-link">
              Contact JAD KRONO <ArrowIcon />
            </Link>
          </aside>
          <FAQAccordion items={faqItems} />
        </div>
      </section>
    </>
  );
}
