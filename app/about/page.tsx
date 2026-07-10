import type { Metadata } from "next";
import Link from "next/link";
import { ArrowIcon } from "@/components/Icons";
import { PageHero } from "@/components/PageHero";
import { WatchArtwork } from "@/components/WatchArtwork";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn how JAD KRONO approaches modern and collectible watches, sourcing and private transactions in Singapore.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="A private watch business built around careful selection."
        body="JAD KRONO works with collectors and buyers who value direct information, sensible decisions and discreet service."
        index="02"
      />

      <section className="section about-story">
        <div className="container about-story__grid">
          <div className="about-story__visual">
            <span className="about-story__stamp">Singapore · 2026</span>
            <WatchArtwork id="about-watch" tone="champagne" label="Champagne dial watch illustration" />
          </div>
          <div className="about-story__copy">
            <p className="eyebrow">Why JAD KRONO</p>
            <h2>Because buying a watch should not require decoding a sales performance.</h2>
            <p>
              The market can be noisy. Listings are often vague, language is inflated and important details arrive late. We prefer a simpler standard: understand the piece, describe it accurately and keep the transaction clear.
            </p>
            <p>
              Our focus is on modern and collectible watches with strong design, proven demand and genuine long-term appeal. Some are immediately available. Others are found through our sourcing network based on a specific brief.
            </p>
            <p>
              Every conversation starts with what you are actually looking for, not what happens to be easiest to sell.
            </p>
          </div>
        </div>
      </section>

      <section className="section about-principles">
        <div className="container-wide">
          <div className="about-principles__heading">
            <p className="eyebrow">Three principles</p>
            <h2>The standard is deliberately uncomplicated.</h2>
          </div>
          <div className="about-principles__grid">
            <article>
              <span>01</span>
              <h3>Be specific</h3>
              <p>References, condition, accessories and transaction terms should be understood before decisions are made.</p>
            </article>
            <article>
              <span>02</span>
              <h3>Be realistic</h3>
              <p>Prices and sourcing expectations are grounded in the current market, not wishful thinking dressed as confidence.</p>
            </article>
            <article>
              <span>03</span>
              <h3>Be discreet</h3>
              <p>Private collections and personal transactions deserve privacy, thoughtful communication and clean handling.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section about-location">
        <div className="container about-location__grid">
          <div>
            <p className="eyebrow">Singapore based</p>
            <h2>Private viewings, arranged properly.</h2>
          </div>
          <div>
            <p>
              Viewings are available by appointment in Singapore. We confirm the watch, timing and meeting details before the appointment so the conversation stays focused.
            </p>
            <Link href="/contact" className="text-link">
              Arrange a viewing <ArrowIcon />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
