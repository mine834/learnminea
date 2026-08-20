import { getTranslations } from "next-intl/server";
import { Camera, Music2, UsersRound } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { getCmsMenus } from "@/lib/cms";

const socials = [
  { label: "Instagram", href: "https://www.instagram.com/learn_minea/", icon: Camera },
  { label: "Facebook", href: "https://www.facebook.com/share/1Bz79LB74q/?mibextid=wwXIfr", icon: UsersRound },
  { label: "TikTok", href: "https://www.tiktok.com/@learn_minea?_r=1&_t=ZS-992Ys50V14m", icon: Music2 },
];

export async function Footer({ locale }: { locale: string }) {
  const [t, nav, cmsItems] = await Promise.all([getTranslations("footer"), getTranslations("nav"), getCmsMenus(locale, "footer")]);
  const cmsLinks = cmsItems.filter((item) => item.label && item.url?.startsWith("/")).slice(0, 5);

  return (
    <footer className="footer">
      <div className="shell footer-grid">
        <div><Link href="/" className="wordmark footer-mark">learnminea<span>.</span></Link><p>{t("tagline")}</p><div className="social-links">{socials.map(({ label, href, icon: Icon }) => <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label}><Icon aria-hidden="true" /></a>)}</div></div>
        <div><h2>{t("learn")}</h2><Link href="/learn">{nav("learn")}</Link><Link href="/topik">{nav("topik")}</Link><Link href="/shop">{nav("shop")}</Link></div>
        <div><h2>{t("company")}</h2>{cmsLinks.length ? cmsLinks.map((item) => <Link key={item._id} href={item.url === "/faq" ? "/#faq" : item.url ?? "/"}>{item.label}</Link>) : <><Link href="/about">{t("about")}</Link><Link href="/contact">{t("contact")}</Link><Link href="/#faq">{t("faq")}</Link></>}</div>
      </div>
      <div className="shell footer-bottom"><span>© {new Date().getFullYear()} LearnMinea. {t("rights")}</span><span>{t("note")}</span></div>
    </footer>
  );
}
