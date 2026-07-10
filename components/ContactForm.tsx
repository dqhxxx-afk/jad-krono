"use client";

import { FormEvent, useState } from "react";
import { ArrowIcon } from "@/components/Icons";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "").trim();
    const phone = String(form.get("phone") ?? "").trim();
    const interest = String(form.get("interest") ?? "").trim();
    const message = String(form.get("message") ?? "").trim();

    const text = [
      "Hello JAD KRONO,",
      "",
      `Name: ${name}`,
      `Contact: ${phone}`,
      `Enquiry: ${interest}`,
      message ? `Details: ${message}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    const url = `https://wa.me/6586996868?text=${encodeURIComponent(text)}`;
    const popup = window.open(url, "_blank", "noopener,noreferrer");
    if (!popup) window.location.href = url;
    setSubmitted(true);
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="contact-form__grid">
        <label>
          <span>Name</span>
          <input type="text" name="name" autoComplete="name" required placeholder="Your name" />
        </label>
        <label>
          <span>Phone or WhatsApp</span>
          <input type="tel" name="phone" autoComplete="tel" required placeholder="+65" />
        </label>
      </div>

      <label>
        <span>What can we help with?</span>
        <select name="interest" defaultValue="Buying a watch" required>
          <option>Buying a watch</option>
          <option>Sourcing a specific reference</option>
          <option>Selling or trading a watch</option>
          <option>Consignment</option>
          <option>Private viewing</option>
          <option>General enquiry</option>
        </select>
      </label>

      <label>
        <span>Reference, condition, year and budget</span>
        <textarea
          name="message"
          rows={6}
          placeholder="Share as much detail as you have. A model name or reference number is a useful start."
        />
      </label>

      <button type="submit" className="button button--gold contact-form__submit">
        Continue on WhatsApp <ArrowIcon />
      </button>
      <p className="contact-form__note" aria-live="polite">
        {submitted
          ? "Your enquiry has been prepared in WhatsApp. Review it there before sending."
          : "Submitting prepares a WhatsApp message. Nothing is sent without your review."}
      </p>
    </form>
  );
}
