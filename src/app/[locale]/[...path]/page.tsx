import type { Metadata } from "next";
import { ArrowLeft, ArrowRight, BookOpen, Check, Download, GraduationCap, LockKeyhole } from "lucide-react";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { Link } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { getCmsPages, getCmsPosts } from "@/lib/cms";
import { Reveal } from "@/components/motion/Reveal";
import { SimpleForm } from "@/components/SimpleForm";
import { CartPanel } from "@/components/CartPanel";
import { TopikRegistration, type TopikRegistrationLabels } from "@/components/TopikRegistration";
import { TopikResources, type TopikPdf } from "@/components/TopikResources";
import type { Product } from "@/components/HomePage";

const staticPaths = [
  ["learn"], ["learn", "vocabulary"], ["learn", "grammar"], ["learn", "conversation"], ["learn", "kdrama"],
  ["topik"], ["shop"], ["cart"], ["checkout"], ["checkout", "success"], ["login"], ["signup"],
  ["account"], ["library"], ["about"], ["contact"],
] as const;

const productSlugs = ["beginner-1000-words", "topik-tactics", "hanja-master", "kdrama-phrases", "real-conversation-korea"] as const;

type PageContent = { eyebrow: string; title: string; text: string; items: string[] };
type FormLabels = { name: string; email: string; password: string; message: string; submit: string; signIn: string; signUp: string; demo: string };
type LearningBook = { title: string; level: string; text: string; slug?: string };
type LearningBookGroups = { vocabulary: LearningBook[]; grammar: LearningBook[]; conversation: LearningBook[]; kdrama: LearningBook[] };
type CourseCta = { title: string; text: string; button: string; pending: string };

function pageKey(path: string[]) {
  const joined = path.join("/");
  const keys: Record<string, string> = {
    learn: "learn", "learn/vocabulary": "vocabulary", "learn/grammar": "grammar", "learn/conversation": "conversation",
    "learn/kdrama": "kdrama", topik: "topik", shop: "shop", cart: "cart", checkout: "checkout",
    "checkout/success": "success", login: "login", signup: "signup", account: "account", library: "library", about: "about", contact: "contact",
  };
  return keys[joined];
}

export function generateStaticParams() {
  return routing.locales.flatMap((locale) => [
    ...staticPaths.map((path) => ({ locale, path: [...path] })),
    ...productSlugs.map((slug) => ({ locale, path: ["shop", slug] })),
  ]);
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; path: string[] }> }): Promise<Metadata> {
  const { locale, path } = await params;
  const t = await getTranslations({ locale, namespace: "pages" });
  const key = pageKey(path);
  if (key) return { title: t(`${key}.title`), description: t(`${key}.text`) };
  const products = (await getTranslations({ locale, namespace: "home" })).raw("products") as Product[];
  const product = products.find((item) => item.slug === path[1]);
  return product ? { title: product.title, description: product.note } : {};
}

export default async function RoutePage({ params }: { params: Promise<{ locale: string; path: string[] }> }) {
  const { locale, path } = await params;
  setRequestLocale(locale);
  const [pagesT, homeT, commonT, formsT, cmsPages, cmsPosts] = await Promise.all([
    getTranslations("pages"), getTranslations("home"), getTranslations("common"), getTranslations("forms"), getCmsPages(locale), getCmsPosts(locale),
  ]);
  const key = pageKey(path);
  const products = homeT.raw("products") as Product[];
  const labels: FormLabels = {
    name: formsT("name"), email: formsT("email"), password: formsT("password"), message: formsT("message"),
    submit: formsT("submit"), signIn: formsT("signIn"), signUp: formsT("signUp"), demo: formsT("demo"),
  };

  if (path[0] === "shop" && path.length === 2) {
    const localProduct = products.find((item) => item.slug === path[1]);
    const cmsProduct = cmsPosts.find((item) => item.slug === path[1]);
    if (!localProduct && !cmsProduct) notFound();
    const product = { ...localProduct, title: cmsProduct?.title ?? localProduct?.title ?? "", note: cmsProduct?.excerpt ?? localProduct?.note ?? "", price: localProduct?.price ?? "" };
    return <ProductDetail product={product} common={{ back: commonT("back"), buy: commonT("buy"), digital: commonT("digital"), download: commonT("download"), benefits: [commonT("benefitOne"), commonT("benefitTwo"), commonT("benefitThree")] }} />;
  }

  if (!key) notFound();
  const local = pagesT.raw(key) as PageContent;
  const cmsSlug = path.at(-1) ?? key;
  const cmsPage = cmsPages.find((page) => page.slug === cmsSlug);
  const content = { ...local, title: cmsPage?.name ?? local.title, text: cmsPage?.description ?? local.text };
  const learningBooks = pagesT.raw("learningBooks") as LearningBookGroups;

  if (key === "learn") return <LearnPage content={content} course={pagesT.raw("learnCourse") as CourseCta} />;
  if (key === "vocabulary" || key === "grammar" || key === "conversation") return <StandardPage content={content}><LearningBookGrid books={learningBooks[key]} digital={commonT("digital")} /></StandardPage>;
  if (key === "kdrama") return <StandardPage content={content}><div className="content-list">{content.items.map((item, index) => <Reveal key={item} delay={index * 0.08}><div><span>0{index + 1}</span><h2>{item}</h2><ArrowRight /></div></Reveal>)}</div><Reveal><div className="learning-book-section"><h2>{pagesT("kdramaBooksTitle")}</h2><LearningBookGrid books={learningBooks.kdrama} digital={commonT("digital")} /></div></Reveal></StandardPage>;
  if (key === "topik") return <StandardPage content={content}><Reveal><TopikResources items={content.items} pdfs={pagesT.raw("topikPdfs") as TopikPdf[]} digital={commonT("digital")} /></Reveal><Reveal><TopikRegistration labels={pagesT.raw("topikRegistration") as TopikRegistrationLabels} /></Reveal></StandardPage>;
  if (key === "shop") return <ShopPage content={content} products={products} digital={commonT("digital")} />;
  if (key === "cart") return <StandardPage content={content}><CartPanel title={content.items[0] ?? ""} labels={{ continue: commonT("continue"), workbook: commonT("workbook"), decrease: commonT("decrease"), increase: commonT("increase") }} /></StandardPage>;
  if (key === "login" || key === "signup" || key === "contact") return <StandardPage content={content}><SimpleForm kind={key} labels={labels} /></StandardPage>;
  if (key === "checkout") return <StandardPage content={content}><div className="checkout-grid"><SimpleForm kind="checkout" labels={labels} /><aside className="order-summary"><LockKeyhole /><h2>{content.items[2]}</h2><p>{products[0]?.title}</p><strong>{products[0]?.price}</strong><small>{commonT("digital")} · PDF</small></aside></div></StandardPage>;
  if (key === "success") return <StandardPage content={content}><div className="success-card"><Check /><Link href="/library" className="pill-button">{commonT("download")}<Download /></Link></div></StandardPage>;
  if (key === "library") return <StandardPage content={content}><div className="library-grid">{products.slice(0, 2).map((product) => <div className="library-card" key={product.slug}><div className="book-spine">PDF</div><div><h2>{product.title}</h2><p>{product.note}</p><button type="button" className="text-link">{commonT("download")}<Download /></button></div></div>)}</div></StandardPage>;
  return <StandardPage content={content} />;
}

function LearnPage({ content, course }: { content: PageContent; course: CourseCta }) {
  const paths = ["/learn/vocabulary", "/learn/grammar", "/learn/conversation", "/learn/kdrama"];
  return <StandardPage content={content}><div className="learn-category-grid">{content.items.map((item, index) => <Reveal key={item} delay={index * 0.08}><Link href={paths[index] ?? "/learn"} className="learn-category-card"><span>0{index + 1}</span><h2>{item}</h2><ArrowRight /></Link></Reveal>)}</div><Reveal><div className="course-cta"><GraduationCap aria-hidden="true" /><div><p className="eyebrow peach">ONLINE COURSE</p><h2>{course.title}</h2><p>{course.text}</p></div><div><button className="pill-button light" type="button" aria-describedby="course-link-status">{course.button}</button><small id="course-link-status">{course.pending}</small></div></div></Reveal></StandardPage>;
}

function LearningBookGrid({ books, digital }: { books: LearningBook[]; digital: string }) {
  return <div className="learning-books">{books.map((book, index) => <Reveal key={`${book.title}-${book.level}`} delay={index * 0.08}><div className={`learning-book cover-${(index % 3) + 1}`}><BookOpen aria-hidden="true" /><span>{book.level}</span><h2>{book.title}</h2><p>{book.text}</p>{book.slug ? <Link href={`/shop/${book.slug}`} className="text-link">{digital}<ArrowRight /></Link> : <small>{digital}</small>}</div></Reveal>)}</div>;
}

function StandardPage({ content, children }: { content: PageContent; children?: React.ReactNode }) {
  return <><section className="page-hero"><div className="shell narrow"><Reveal><p className="eyebrow dark">{content.eyebrow}</p><h1>{content.title}</h1><p>{content.text}</p></Reveal></div></section><section className="section paper-section"><div className="shell narrow">{children ?? <div className="content-list">{content.items.map((item, index) => <Reveal key={item} delay={index * 0.08}><div><span>0{index + 1}</span><h2>{item}</h2><ArrowRight /></div></Reveal>)}</div>}</div></section></>;
}

function ShopPage({ content, products, digital }: { content: PageContent; products: Product[]; digital: string }) {
  return <><section className="page-hero"><div className="shell narrow"><Reveal><p className="eyebrow dark">{content.eyebrow}</p><h1>{content.title}</h1><p>{content.text}</p></Reveal></div></section><section className="section paper-section"><div className="shell product-grid">{products.map((product, index) => <Reveal key={product.slug} delay={index * 0.08}><Link href={`/shop/${product.slug}`} className="product-card"><div className={`book-cover cover-${(index % 3) + 1}`}><span>{product.tag}</span><strong>{product.title}</strong><small>LEARNMINEA</small></div><div className="product-info"><span>{digital} · PDF</span><h2>{product.title}</h2><p>{product.note}</p><strong>{product.price}</strong></div></Link></Reveal>)}</div></section></>;
}

function ProductDetail({ product, common }: { product: Pick<Product, "title" | "note" | "price">; common: { back: string; buy: string; digital: string; download: string; benefits: string[] } }) {
  return <section className="section product-detail"><div className="shell"><Link href="/shop" className="back-link"><ArrowLeft />{common.back}</Link><div className="product-detail-grid"><Reveal><div className="detail-cover"><span>LEARNMINEA</span><strong>{product.title}</strong><small>PDF · DIGITAL EDITION</small></div></Reveal><Reveal delay={0.1} className="detail-copy"><p className="eyebrow dark">{common.digital}</p><h1>{product.title}</h1><p>{product.note}</p><ul>{common.benefits.map((benefit) => <li key={benefit}><Check />{benefit}</li>)}</ul><strong className="detail-price">{product.price}</strong><Link href="/cart" className="pill-button">{common.buy}<ArrowRight /></Link><small><Download />{common.download} · PDF</small></Reveal></div></div></section>;
}
