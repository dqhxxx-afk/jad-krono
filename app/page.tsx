import Link from "next/link";
import { ArrowIcon, WhatsAppIcon } from "@/components/Icons";
import { SectionHeader } from "@/components/SectionHeader";
import { ServiceGlyph } from "@/components/ServiceGlyph";
import { WatchCard } from "@/components/WatchCard";
import { watches } from "@/data/watches";

const featuredWatches = watches.filter((watch) => watch.featured).slice(0, 6);

export default function Home() {
  return (
    <>
      <section className="home-hero">
        <div className="home-hero__glow" aria-hidden="true" />
        <div className="container-wide home-hero__inner">
          <div className="home-hero__copy">
            <p className="eyebrow">Singapore private watch dealer</p>
            <h1>Modern and collectible timepieces.</h1>
            <p className="home-hero__body">
              Carefully selected pieces from trusted sources, presented with clear information and fair, market-aware pricing.
            </p>
            <div className="home-hero__actions">
              <Link className="button button--gold" href="/collection">
                View collection <ArrowIcon />
              </Link>
              <a
                className="button button--quiet"
                href="https://wa.me/6586996868?text=Hello%20JAD%20KRONO%2C%20I%20am%20looking%20for%20a%20specific%20watch."
                target="_blank"
                rel="noreferrer"
              >
                <WhatsAppIcon size={18} /> Tell us what you need
              </a>
            </div>
            <div className="home-hero__details">
              <div>
                <span>01</span>
                <p>Private viewings by appointment</p>
              </div>
              <div>
                <span>02</span>
                <p>Singapore based</p>
              </div>
            </div>
          </div>

          <aside className="home-hero__brief" aria-label="JAD KRONO service overview">
            <div className="home-hero__brief-heading">
              <span>JAD KRONO / Private inventory</span>
              <strong>01</strong>
            </div>
            <div className="home-hero__brief-main">
              <p>Current focus</p>
              <h2>Selected with purpose.</h2>
            </div>
            <dl className="home-hero__brief-list">
              <div>
                <dt>Categories</dt>
                <dd>Modern · Collectible · Neo-vintage</dd>
              </div>
              <div>
                <dt>Access</dt>
                <dd>Private viewing by appointment</dd>
              </div>
              <div>
                <dt>Enquiries</dt>
                <dd>+65 8699 6868</dd>
              </div>
            </dl>
          </aside>
        </div>

        <div className="home-hero__brand-bar">
          <div className="container-wide">
            <Link href="/collection" className="is-active">All watches</Link>
            <Link href="/collection">Rolex</Link>
            <Link href="/collection">Patek Philippe</Link>
            <Link href="/collection">Audemars Piguet</Link>
            <Link href="/collection">Tudor</Link>
            <Link href="/collection">Hublot</Link>
          </div>
        </div>
      </section>

      <section className="section section--arrivals">
        <div className="container-wide">
          <SectionHeader
            eyebrow="Latest arrivals"
            title="A considered selection. Nothing added just to fill the page."
            body="Availability changes quickly. Contact us for current condition details, viewing times and pricing."
            linkHref="/collection"
            linkLabel="View all watches"
          />
          <div className="watch-grid watch-grid--featured">
            {featuredWatches.map((watch) => (
              <WatchCard key={watch.slug} watch={watch} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section--approach">
        <div className="container approach-grid">
          <div className="approach-grid__lead">
            <p className="eyebrow">Our approach</p>
            <h2>A clearer way to buy and sell watches.</h2>
            <p>
              A good transaction should feel straightforward. We focus on the watch, its condition, its provenance and the numbers that matter.
            </p>
            <Link href="/about" className="text-link">
              How we work <ArrowIcon />
            </Link>
          </div>

          <div className="approach-list">
            <article>
              <span>01</span>
              <div>
                <h3>Selected, not accumulated</h3>
                <p>We favour pieces with a clear reason to own them, whether that is design, wearability, scarcity or collectability.</p>
              </div>
            </article>
            <article>
              <span>02</span>
              <div>
                <h3>Useful information first</h3>
                <p>Condition, set, reference and material are presented plainly. Questions are answered directly, without theatre.</p>
              </div>
            </article>
            <article>
              <span>03</span>
              <div>
                <h3>Discreet, personal service</h3>
                <p>Viewings and transactions are handled privately in Singapore, at a pace that gives both sides room to decide.</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section section--services-preview">
        <div className="container-wide">
          <SectionHeader
            eyebrow="What we do"
            title="Support beyond the display case."
            body="Whether you are adding one watch, moving a collection or looking for a difficult reference, the process stays personal."
            linkHref="/services"
            linkLabel="Explore services"
          />

          <div className="service-preview-grid">
            <article>
              <ServiceGlyph type="buy" />
              <span>01</span>
              <h3>Buy</h3>
              <p>Selected watches with clear specifications and direct access to current details.</p>
            </article>
            <article>
              <ServiceGlyph type="source" />
              <span>02</span>
              <h3>Source</h3>
              <p>Targeted searches for specific references, years, configurations and condition.</p>
            </article>
            <article>
              <ServiceGlyph type="sell" />
              <span>03</span>
              <h3>Sell or trade</h3>
              <p>Straightforward assessment and a practical route to a private transaction.</p>
            </article>
            <article>
              <ServiceGlyph type="consign" />
              <span>04</span>
              <h3>Consign</h3>
              <p>Presentation, buyer conversations and transaction handling managed carefully.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section section--editorial">
        <div className="container-wide editorial-grid">
          <div className="editorial-note">
            <div className="editorial-note__topline">
              <span>Private viewing</span>
              <span>Singapore</span>
            </div>
            <p className="editorial-note__statement">Quiet selection.<br />Clear information.<br />Personal service.</p>
            <dl>
              <div>
                <dt>01</dt>
                <dd>By appointment</dd>
              </div>
              <div>
                <dt>02</dt>
                <dd>Direct enquiries</dd>
              </div>
              <div>
                <dt>03</dt>
                <dd>Discreet handling</dd>
              </div>
            </dl>
          </div>
          <div className="editorial-copy">
            <p className="eyebrow">JAD KRONO</p>
            <h2>Built for collectors who prefer substance over noise.</h2>
            <p>
              We are interested in watches that hold attention after the first impression. The service follows the same principle: calm, specific and free from unnecessary sales language.
            </p>
            <Link href="/about" className="button button--outline">
              About JAD KRONO <ArrowIcon />
            </Link>
          </div>
        </div>
      </section>

      <section className="home-cta">
        <div className="container home-cta__inner">
          <p className="eyebrow">Private enquiries</p>
          <h2>Have a reference in mind?</h2>
          <p>Send the model, preferred year, condition and budget. We will reply with a practical next step.</p>
          <a
            href="https://wa.me/6586996868?text=Hello%20JAD%20KRONO%2C%20I%20am%20looking%20for%20a%20specific%20watch."
            target="_blank"
            rel="noreferrer"
            className="button button--gold"
          >
            Start an enquiry <ArrowIcon />
          </a>
        </div>
      </section>
    </>
  );
}
