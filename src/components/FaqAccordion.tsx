"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

export type FaqItem = { question: string; answer: string };

export function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState(0);
  return (
    <div className="faq-list">
      {items.map((item, index) => (
        <div className="faq-item" key={item.question}>
          <button type="button" onClick={() => setOpen(open === index ? -1 : index)} aria-expanded={open === index}>
            <span>{item.question}</span><Plus className={open === index ? "rotated" : ""} aria-hidden="true" />
          </button>
          {open === index && <p>{item.answer}</p>}
        </div>
      ))}
    </div>
  );
}
