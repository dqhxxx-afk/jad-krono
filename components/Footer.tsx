import Link from "next/link";
import { BrandMark } from "@/components/BrandMark";
import { ArrowIcon } from "@/components/Icons";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container-wide site-footer__top">
        <div className="site-footer__intro">
          <BrandMark />
          <p>Modern and collectible timepieces, sourced and presented with care in Singapore.</p>
        </div>

        <div className="site-footer__nav">
          <div>
            <p className="site-footer__label">Explore</p>
            <Link href="/collection">Collection</Link>
            <Link href="/about">About</Link>
            <Link href="/services">Services</Link>
          </div>
          <div>
            <p className="site-footer__label">Support</p>
            <Link href="/faq">FAQ</Link>
            <Link href="/contact">Contact</Link>
            <a href="tel:+6586996868">+65 8699 6868</a>
          </div>
        </div>

        <div className="site-footer__cta">
          <p className="site-footer__label">Private enquiries</p>
          <h2>Looking for a particular reference?</h2>
          <a
            href="https://wa.me/6586996868?text=Hello%20JAD%20KRONO%2C%20I%20am%20looking%20for%20a%20specific%20watch."
            target="_blank"
            rel="noreferrer"
            className="text-link"
          >
            Tell us what you need <ArrowIcon />
          </a>
        </div>
      </div>

      <div className="container-wide site-footer__bottom">
        <p>© 2026 JAD KRONO. All rights reserved.</p>
        <p>
          All trademarks belong to their respective owners. JAD KRONO is not an authorised dealer unless expressly stated.
        </p>
      </div>
    </footer>
  );
}
