"use client";

import { useState } from "react";
import { ArrowRight, ChevronDown, FileText } from "lucide-react";

export type TopikPdf = { title: string; level: string };

export function TopikResources({ items, pdfs, digital }: { items: string[]; pdfs: TopikPdf[]; digital: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="content-list topik-resource-list">
      <div className="topik-resource-row"><span>01</span><h2>{items[0]}</h2><ArrowRight aria-hidden="true" /></div>
      <button className="topik-resource-row" type="button" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-controls="topik-pdf-list">
        <span>02</span><h2>{items[1]}</h2><ChevronDown className={open ? "rotated" : ""} aria-hidden="true" />
      </button>
      {open && <div id="topik-pdf-list" className="topik-pdf-grid">{pdfs.map((pdf) => <div className="topik-pdf-card" key={pdf.level}><FileText aria-hidden="true" /><span>{pdf.level}</span><h3>{pdf.title}</h3><small>{digital} · PDF</small></div>)}</div>}
    </div>
  );
}
