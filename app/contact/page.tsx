import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { PageHero } from "@/components/PageHero";
import { WhatsAppIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact JAD KRONO in Singapore about buying, sourcing, selling, trading or consigning a modern or collectible watch.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Start with the watch, the reference or the outcome you need."
        body="Send the useful details first. We will reply with availability, next steps or the questions needed to make the brief workable."
        index="05"
      />
      <section className="section contact-section">
        <div className="container contact-layout">
          <aside className="contact-details">
            <div>
              <p className="eyebrow">Direct contact</p>
              <a
                href="https://wa.me/6586996868?text=Hello%20JAD%20KRONO%2C%20I%20would%20like%20to%20enquire%20about%20a%20watch."
                target="_blank"
                rel="noreferrer"
                className="contact-details__primary"
              >
                <WhatsAppIcon size={24} />
                <span>
                  <small>WhatsApp</small>
                  +65 8699 6868
                </span>
              </a>
            </div>

            <dl>
              <div>
                <dt>Location</dt>
                <dd>Singapore</dd>
              </div>
              <div>
                <dt>Viewings</dt>
                <dd>By appointment</dd>
              </div>
              <div>
                <dt>Response</dt>
                <dd>Directly via WhatsApp</dd>
              </div>
            </dl>

            <p className="contact-details__note">
              Please do not send serial numbers or identity documents in the first message. Those can be handled securely when relevant.
            </p>
          </aside>

          <div className="contact-form-wrap">
            <div className="contact-form-wrap__heading">
              <p className="eyebrow">Enquiry form</p>
              <h2>Prepare the details.</h2>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
