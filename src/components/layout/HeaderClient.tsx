"use client";

import { useState } from "react";
import { Menu, ShoppingBag, UserRound, X } from "lucide-react";
import { useLocale } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";

export type NavigationItem = { label: string; href: string };

export function HeaderClient({
  items,
  utility,
  labels,
}: {
  items: NavigationItem[];
  utility: NavigationItem[];
  labels: { menu: string; close: string; login: string; cart: string };
}) {
  const [open, setOpen] = useState(false);
  const locale = useLocale();
  const pathname = usePathname();

  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Link href="/" className="wordmark" aria-label="LearnMinea home">learnminea<span>.</span></Link>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {items.map((item) => <Link key={item.href} href={item.href} className="nav-link">{item.label}</Link>)}
        </nav>
        <div className="header-tools">
          <div className="language-switcher" aria-label="Language">
            {(["mn", "en", "ko"] as const).map((value) => (
              <Link key={value} href={pathname} locale={value} className={locale === value ? "active" : ""}>
                {value === "mn" ? "MN" : value === "ko" ? "한국" : "EN"}
              </Link>
            ))}
          </div>
          <Link href="/login" className="icon-link" aria-label={labels.login}><UserRound aria-hidden="true" /></Link>
          <Link href="/cart" className="icon-link" aria-label={labels.cart}><ShoppingBag aria-hidden="true" /></Link>
          <button className="mobile-toggle" type="button" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-label={open ? labels.close : labels.menu}>
            {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>
      </div>
      {open && (
        <nav className="mobile-nav" aria-label="Mobile navigation">
          <div className="shell">
            {[...items, ...utility].map((item) => (
              <Link key={`${item.href}-${item.label}`} href={item.href} onClick={() => setOpen(false)}>{item.label}</Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
