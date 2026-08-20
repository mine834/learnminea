import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";

const routes = ["", "/learn", "/learn/vocabulary", "/learn/grammar", "/learn/conversation", "/learn/kdrama", "/topik", "/shop", "/cart", "/checkout", "/login", "/signup", "/account", "/library", "/about", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? "https://learnminea.com";
  return routing.locales.flatMap((locale) => routes.map((route) => ({ url: `${base}/${locale}${route}`, changeFrequency: route.includes("learn") ? "weekly" as const : "monthly" as const, priority: route === "" ? 1 : 0.7 })));
}
