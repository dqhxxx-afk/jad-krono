"use client";

import { useState } from "react";
import { PlusIcon } from "@/components/Icons";

export type FAQItem = {
  question: string;
  answer: string;
};

type FAQAccordionProps = {
  items: FAQItem[];
};

export function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="faq-list">
      {items.map((item, index) => {
        const open = openIndex === index;
        const answerId = `faq-answer-${index}`;
        return (
          <article className={`faq-item${open ? " is-open" : ""}`} key={item.question}>
            <h2>
              <button
                type="button"
                aria-expanded={open}
                aria-controls={answerId}
                onClick={() => setOpenIndex(open ? null : index)}
              >
                <span className="faq-item__number">{String(index + 1).padStart(2, "0")}</span>
                <span>{item.question}</span>
                <PlusIcon className="faq-item__icon" />
              </button>
            </h2>
            <div className="faq-item__answer" id={answerId} hidden={!open}>
              <p>{item.answer}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
}
