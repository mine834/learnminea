"use client";

import { useState } from "react";
import { ArrowUpRight, ChevronDown, Globe2, MapPin } from "lucide-react";

export type TopikRegistrationLabels = {
  title: string;
  text: string;
  button: string;
  korea: string;
  koreaNote: string;
  mongolia: string;
  mongoliaNote: string;
};

export function TopikRegistration({ labels }: { labels: TopikRegistrationLabels }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="topik-registration">
      <div className="topik-registration-copy">
        <Globe2 aria-hidden="true" />
        <div><h2>{labels.title}</h2><p>{labels.text}</p></div>
      </div>
      <button className="pill-button" type="button" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-controls="topik-registration-options">
        {labels.button}<ChevronDown className={open ? "rotated" : ""} aria-hidden="true" />
      </button>
      {open && (
        <div id="topik-registration-options" className="topik-registration-options">
          <a href="https://www.topik.go.kr/" target="_blank" rel="noreferrer"><MapPin aria-hidden="true" /><div><strong>{labels.korea}</strong><span>{labels.koreaNote}</span></div><ArrowUpRight aria-hidden="true" /></a>
          <a href="https://topik.mn/" target="_blank" rel="noreferrer"><MapPin aria-hidden="true" /><div><strong>{labels.mongolia}</strong><span>{labels.mongoliaNote}</span></div><ArrowUpRight aria-hidden="true" /></a>
        </div>
      )}
    </div>
  );
}
