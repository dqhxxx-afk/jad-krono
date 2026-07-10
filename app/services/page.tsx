import type { Metadata } from "next";
import Link from "next/link";
import { ArrowIcon } from "@/components/Icons";
import { PageHero } from "@/components/PageHero";
import { ServiceGlyph } from "@/components/ServiceGlyph";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Buy, source, sell, trade or consign modern and collectible watches with JAD KRONO in Singapore.",
};

const services = [
  {
    number: "01",
    title: "Buy a watch",
    type: "buy" as const,
    text: "Review current pieces with direct access to condition, set, reference and viewing details. We keep the conversation focused on whether the watch is right for you.",
  },
  {
    number: "02",
    title: "Source a reference",
    type: "source" as const,
    text: "Give us a clear brief covering model, year, configuration, condition and budget. We search through trusted market contacts and return with realistic options.",
  },
  {
    number: "03",
    title: "Sell or trade",
    type: "sell" as const,
    text: "Share photographs and details for an initial review. After inspection, we discuss a practical sale or trade route based on condition and current demand.",
  },
  {
    number: "04",
    title: "Consignment",
    type: "consign" as const,
    text: "We handle presentation, enquiries, buyer conversations and the transaction. Terms are agreed before the watch is listed or introduced privately.",
  },
  {
    number: "05",
    title: "Private viewing",
    type: "view" as const,
    text: "Inspect selected watches by appointment in Singapore. The watch and relevant details are prepared in advance so the meeting is useful, not ceremonial.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Practical help at every point in the transaction."
        body="Buying, selling and sourcing each need a different process. The common part is clear communication and careful handling."
        index="03"
      />

      <section className="section services-list-section">
        <div className="container services-list">
          {services.map((service) => (
            <article key={service.title} className="services-list__item">
              <div className="services-list__number">{service.number}</div>
              <div className="services-list__glyph"><ServiceGlyph type={service.type} /></div>
              <h2>{service.title}</h2>
              <p>{service.text}</p>
              <Link href="/contact" className="text-link">
                Start an enquiry <ArrowIcon />
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="section service-process">
        <div className="container service-process__grid">
          <div className="service-process__heading">
            <p className="eyebrow">The process</p>
            <h2>Enough structure to be reliable. Not enough to become bureaucracy.</h2>
          </div>
          <div className="service-process__steps">
            <article>
              <span>01</span>
              <div>
                <h3>Share the brief</h3>
                <p>Tell us the watch, condition and outcome you have in mind.</p>
              </div>
            </article>
            <article>
              <span>02</span>
              <div>
                <h3>Review the details</h3>
                <p>We clarify availability, condition, expectations and likely timing.</p>
              </div>
            </article>
            <article>
              <span>03</span>
              <div>
                <h3>Inspect and decide</h3>
                <p>View the watch or review the offer, then proceed only when the terms make sense.</p>
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
