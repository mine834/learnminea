"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, Search } from "lucide-react";
import { useRouter } from "@/i18n/navigation";

export function SearchComposer({ placeholder, action }: { placeholder: string; action: string }) {
  const [query, setQuery] = useState("");
  const router = useRouter();
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    router.push(query.trim() ? `/learn?search=${encodeURIComponent(query.trim())}` : "/learn");
  }
  return (
    <form className="search-composer" onSubmit={submit}>
      <Search aria-hidden="true" />
      <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder={placeholder} aria-label={placeholder} />
      <button type="submit"><span>{action}</span><ArrowRight aria-hidden="true" /></button>
    </form>
  );
}
