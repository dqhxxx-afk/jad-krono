import type { Metadata } from "next";
import Link from "next/link";
import { CollectionFilter } from "@/components/CollectionFilter";
import { ArrowIcon } from "@/components/Icons";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Watch Collection",
  description:
    "Explore modern and collectible watches available through JAD KRONO in Singapore, including Rolex, Patek Philippe, Audemars Piguet, Tudor and Hublot.",
};

export default function CollectionPage() {
  return (
    <>
      <PageHero
        eyebrow="Collection"
        title="Current watches and references we can source."
        body="The collection changes with availability. For the most recent condition report, price and viewing schedule, contact us directly."
        index="01"
      />
      <section className="section collection-section" id="collection-grid">
        <div className="container-wide">
          <CollectionFilter />
        </div>
      </section>
      <section className="collection-source-cta">
        <div className="container collection-source-cta__inner">
          <div>
            <p className="eyebrow">Not listed?</p>
            <h2>We can search for a specific reference.</h2>
          </div>
          <div>
            <p>Share the exact model, production year, condition and set you prefer. A realistic brief produces a better search.</p>
            <Link href="/contact" className="button button--gold">
              Submit a sourcing brief <ArrowIcon />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
