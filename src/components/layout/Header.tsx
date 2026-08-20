import { getTranslations } from "next-intl/server";
import { getCmsMenus } from "@/lib/cms";
import { HeaderClient, type NavigationItem } from "./HeaderClient";

function internalUrl(url?: string) {
  if (!url?.startsWith("/")) return null;
  return url.replace(/^\/(mn|en|ko)(?=\/|$)/, "") || "/";
}

export async function Header({ locale }: { locale: string }) {
  const [t, cmsItems] = await Promise.all([getTranslations("nav"), getCmsMenus(locale, "header")]);
  const fallback: NavigationItem[] = [
    { label: t("learn"), href: "/learn" },
    { label: t("topik"), href: "/topik" },
    { label: t("kdrama"), href: "/learn/kdrama" },
    { label: t("shop"), href: "/shop" },
  ];
  const fromCms = cmsItems
    .map((item) => ({ label: item.label ?? "", href: internalUrl(item.url) ?? "" }))
    .filter((item) => item.label && item.href);
  const items = fromCms.length >= 2 ? fromCms.slice(0, 5) : fallback;

  return <HeaderClient items={items} utility={[{ label: t("library"), href: "/library" }, { label: t("cart"), href: "/cart" }]} labels={{ menu: t("menu"), close: t("close"), login: t("login"), cart: t("cart") }} />;
}
