"use client";

import { useState } from "react";
import { ArrowRight, BookOpen } from "lucide-react";
import { Link } from "@/i18n/navigation";

type KDramaTeaser = { example: string; text: string; cta: string };
type LearningBook = { title: string; level: string; text: string; slug?: string };

export function KDramaBooksReveal({ teaser, books, booksTitle, digital }: { teaser: KDramaTeaser; books: LearningBook[]; booksTitle: string; digital: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="kdrama-teaser">
        <strong>{teaser.example}</strong>
        <p>{teaser.text}</p>
        <button type="button" className="text-link" onClick={() => setIsOpen(true)}>{teaser.cta}<ArrowRight /></button>
      </div>
      {isOpen ? <div id="kdrama-books" className="learning-book-section"><h2>{booksTitle}</h2><div className="learning-books">{books.map((book, index) => <div key={`${book.title}-${book.level}`} className={`learning-book cover-${(index % 3) + 1}`}><BookOpen aria-hidden="true" /><span>{book.level}</span><h2>{book.title}</h2><p>{book.text}</p>{book.slug ? <Link href={`/shop/${book.slug}`} className="text-link">{digital}<ArrowRight /></Link> : <small>{digital}</small>}</div>)}</div></div> : null}
    </>
  );
}
