import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { getCmsMenus } from "@/lib/cms";

export async function Footer({ locale }: { locale: string }) {
  const [t, nav, cmsItems] = await Promise.all([getTranslations("footer"), getTranslations("nav"), getCmsMenus(locale, "footer")]);
  const cmsLinks = cmsItems.filter((item) => item.label && item.url?.startsWith("/")).slice(0, 5);

  return (
    <footer className="footer">
      <div className="shell footer-grid">
        <div><Link href="/" className="wordmark footer-mark">learnminea<span>.</span></Link><p>{t("tagline")}</p></div>
        <div><h2>{t("learn")}</h2><Link href="/learn">{nav("learn")}</Link><Link href="/topik">{nav("topik")}</Link><Link href="/shop">{nav("shop")}</Link></div>
        <div><h2>{t("company")}</h2>{cmsLinks.length ? cmsLinks.map((item) => <Link key={item._id} href={item.url ?? "/"}>{item.label}</Link>) : <><Link href="/about">{t("about")}</Link><Link href="/contact">{t("contact")}</Link><Link href="/library">{nav("library")}</Link></>}</div>
      </div>
      <div className="shell footer-bottom"><span>© {new Date().getFullYear()} LearnMinea. {t("rights")}</span><span>{t("note")}</span></div>
    </footer>
  );
}
