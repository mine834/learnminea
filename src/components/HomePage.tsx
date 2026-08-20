import { ArrowRight, Check, Download, Headphones, MessageCircle, Play, Sparkles } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { getCmsPages, getCmsPosts } from "@/lib/cms";
import { Reveal } from "@/components/motion/Reveal";
import { FaqAccordion, type FaqItem } from "@/components/FaqAccordion";
import { SearchComposer } from "@/components/SearchComposer";

type Category = { title: string; text: string; href: string; mark: string };
export type Product = { slug: string; title: string; tag: string; price: string; note: string };
type WhyItem = { number: string; title: string; text: string };

export async function HomePage({ locale }: { locale: string }) {
  const [t, common, pages, posts] = await Promise.all([
    getTranslations("home"), getTranslations("common"), getCmsPages(locale), getCmsPosts(locale),
  ]);
  const categories = t.raw("categories") as Category[];
  const localProducts = t.raw("products") as Product[];
  const products = localProducts.map((product) => {
    const cmsProduct = posts.find((post) => post.slug === product.slug);
    return { ...product, title: cmsProduct?.title ?? product.title, note: cmsProduct?.excerpt ?? product.note };
  });
  const whyItems = t.raw("whyItems") as WhyItem[];
  const faqs = t.raw("faqs") as FaqItem[];
  const cmsHome = pages.find((page) => page.slug === "home");

  return (
    <>
      <section className="hero">
        <div className="hero-cloud cloud-one" /><div className="hero-cloud cloud-two" />
        <div className="shell hero-inner">
          <div className="hero-copy">
            <p className="eyebrow">{t("eyebrow")}</p>
            <h1>{t("heroTitle")}</h1>
            <p className="hero-summary">{cmsHome?.description ?? t("heroText")}</p>
            <SearchComposer placeholder={t("searchPlaceholder")} action={t("searchAction")} />
          </div>
          <div className="artifact-stage" aria-hidden="true">
            {(t.raw("artifacts") as string[]).map((artifact, index) => <div key={artifact} className={`artifact artifact-${index + 1}`}>{index === 2 && <Headphones />}{artifact}</div>)}
            <div className="hero-orbit"><Sparkles /></div>
          </div>
        </div>
      </section>

      <section className="section paper-section">
        <div className="shell">
          <Reveal><div className="section-heading"><p className="eyebrow dark">{t("exploreEyebrow")}</p><h2>{t("exploreTitle")}</h2><p>{t("exploreText")}</p></div></Reveal>
          <div className="category-grid">
            {categories.map((category, index) => <Reveal key={category.href} delay={index * 0.08}><Link href={category.href} className="category-card"><span className="category-mark">{category.mark}</span><div><h3>{category.title}</h3><p>{category.text}</p></div><ArrowRight /></Link></Reveal>)}
          </div>
        </div>
      </section>

      <section className="section fog-section">
        <div className="shell split-feature">
          <Reveal direction="left" className="dialogue-board">
            <div className="dialogue-top"><span>{t("dialogueLabel")}</span><button type="button" aria-label="Play"><Play /></button></div>
            <p className="hangul">{t("dialogueKo")}</p><p className="meaning">{t("dialogueMeaning")}</p><div className="lesson-note"><MessageCircle /><p>{t("dialogueNote")}</p></div>
          </Reveal>
          <Reveal direction="right" className="feature-copy"><p className="eyebrow dark">{t("practicalEyebrow")}</p><h2>{t("practicalTitle")}</h2><p>{t("practicalText")}</p><Link href="/learn/conversation" className="text-link">{common("explore")}<ArrowRight /></Link></Reveal>
        </div>
      </section>

      <section className="section paper-section">
        <div className="shell">
          <Reveal><div className="section-heading wide"><div><p className="eyebrow dark">{t("libraryEyebrow")}</p><h2>{t("libraryTitle")}</h2></div><p>{t("libraryText")}</p></div></Reveal>
          <div className="product-grid">
            {products.map((product, index) => <Reveal key={product.slug} delay={index * 0.08}><Link href={`/shop/${product.slug}`} className="product-card"><div className={`book-cover cover-${(index % 3) + 1}`}><span>{product.tag}</span><strong>{product.title}</strong><small>LEARNMINEA</small></div><div className="product-info"><span>{common("digital")} · PDF</span><h3>{product.title}</h3><p>{product.note}</p><strong>{product.price}</strong></div></Link></Reveal>)}
          </div>
        </div>
      </section>

      <section className="section assessment-section">
        <div className="shell assessment-grid">
          <Reveal direction="left"><p className="eyebrow peach">{t("assessmentEyebrow")}</p><h2>{t("assessmentTitle")}</h2><p>{t("assessmentText")}</p><Link href="/learn" className="pill-button light">{t("assessmentCta")}<ArrowRight /></Link></Reveal>
          <Reveal direction="right" className="assessment-card"><div className="assessment-time"><span>15-20</span><small>{common("minutes")}</small></div>{(t.raw("assessmentPoints") as string[]).map((point) => <p key={point}><Check />{point}</p>)}</Reveal>
        </div>
      </section>

      <section className="section paper-section">
        <div className="shell why-grid">
          <Reveal className="why-intro"><p className="eyebrow dark">{t("whyEyebrow")}</p><h2>{t("whyTitle")}</h2></Reveal>
          <div className="why-list">{whyItems.map((item, index) => <Reveal key={item.number} delay={index * 0.08} className="why-item"><span>{item.number}</span><div><h3>{item.title}</h3><p>{item.text}</p></div></Reveal>)}</div>
        </div>
      </section>

      <section className="section real-life-section">
        <div className="shell real-life-grid">
          <Reveal direction="left" className="real-visual"><div className="window-card"><div className="window-sky" /><div className="window-table"><span>안녕하세요</span></div></div></Reveal>
          <Reveal direction="right" className="feature-copy"><p className="eyebrow dark">{t("realEyebrow")}</p><h2>{t("realTitle")}</h2><p>{t("realText")}</p><div className="place-list">{(t.raw("realPlaces") as string[]).map((place) => <span key={place}>{place}</span>)}</div></Reveal>
        </div>
      </section>

      <section className="section paper-section"><div className="shell faq-grid"><Reveal><h2>{t("faqTitle")}</h2></Reveal><Reveal><FaqAccordion items={faqs} /></Reveal></div></section>

      <section className="final-cta"><div className="shell"><Reveal><div className="final-card"><div><p className="eyebrow peach">LEARNMINEA</p><h2>{t("finalTitle")}</h2><p>{t("finalText")}</p></div><Link href="/learn" className="pill-button light">{t("finalCta")}<ArrowRight /></Link><Download className="final-icon" aria-hidden="true" /></div></Reveal></div></section>
    </>
  );
}
