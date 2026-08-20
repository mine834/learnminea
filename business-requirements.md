# Business Requirements Document - Learnminea

> **Version:** 1.0
> **Date:** 2026-08-18
> **Author:** Business Analyst (AI)
> **Status:** Approved

---

## 1. Executive Summary

Learnminea нь Монгол хэрэглэгчдэд солонгос хэлийг системтэй сурах, хэрэгтэй үнэгүй контентоо олох, цахим ном сонгох, төлбөр төлөх, худалдан авсан материалаа шууд татах боломжийг нэг дор бүрдүүлэх олон хэлт платформ байна.

Платформын үндсэн үнэ цэнэ нь TikTok, Instagram, YouTube, Facebook, Telegram зэрэг сувгуудад тархай байгаа мэдээллийг Монгол хэлээр ойлгомжтой сургалтын бүтэц болгон төвлөрүүлж, үнэгүй хичээлээс холбогдох төлбөртэй бүтээгдэхүүн рүү хэрэглэгчийг зүй ёсоор чиглүүлэхэд оршино. Анхны MVP нь контент, цахим ном, төлбөр, хэрэглэгчийн хувийн номын сан гэсэн дөрвөн цөм боломжид төвлөрнө.

## 2. Business Objectives & Success Metrics

| # | Objective | Success Metric | Initial Target |
| --- | --- | --- | --- |
| 1 | Солонгос хэлний системтэй үнэгүй сургалтын эх үүсвэр бий болгох | Сарын зочин, хичээлийн үзэлт | 3,000+ зочин, 5,000+ үзэлт |
| 2 | Цахим номоор тогтвортой дижитал орлого олох | Сарын захиалга, conversion | 30-100+ захиалга, 2-5% conversion |
| 3 | Худалдан авалт болон хүргэлтийг автоматжуулах | Амжилттай төлбөрөөс таталт хүртэлх completion | Амжилттай төлбөрийн 95%+ автомат хүргэлт |
| 4 | Хувийн боловсролын брэнд хөгжүүлэх | И-мэйл бүртгэл, дахин худалдан авалт | Сард 100+ бүртгэл, 10%+ repeat purchase |
| 5 | Mobile-first туршлага бий болгох | Гар утасны хэрэглээ, mobile completion | Нийт хэрэглэгчийн 70%+ mobile, checkout саадгүй |
| 6 | Бүтээгдэхүүний шийдвэрт ашиглах дата цуглуулах | Funnel болон product analytics coverage | Learn-to-product-to-checkout funnel бүрэн хэмжигдэх |

## 3. Stakeholder Analysis

| Role | Name/Department | Responsibility |
| --- | --- | --- |
| Product owner / content creator | Learnminea | Бизнесийн зорилго, сургалтын контент, номын бүтээгдэхүүн, үнэ |
| Learners | Монгол хэлтэй суралцагчид | Хичээл ашиглах, санал хүсэлт өгөх, бүтээгдэхүүн худалдан авах |
| Content administrator | Learnminea admin | Хичээл, ном, ангилал, үнэ, файл, блог, орчуулга удирдах |
| Payment provider | QPay / card provider | Төлбөр эхлүүлэх, баталгаажуулах, webhook дамжуулах |
| Platform administrator | erxes / site operator | CMS, хэрэглэгч, захиалга, analytics болон ажиллагааг хянах |

## 4. Scope

### 4.1 In-scope

- Mobile-first олон хэлт маркетинг болон сургалтын вебсайт.
- Үгийн сан, дүрэм, харилцан яриа, сонсгол, K-Drama хэллэг, TOPIK хичээлүүд.
- Хичээлийн ангилал, түвшин, хайлт болон холбогдох цахим номын санал.
- Цахим номын каталог, шүүлтүүр, дэлгэрэнгүй, preview, үнэ, үнэлгээ, FAQ.
- Сагс, checkout, QPay/карт өргөтгөх боломжтой payment provider бүтэц.
- Төлбөр баталгаажуулалт, захиалга, татах эрх, success/failure төлөв.
- Бүртгэл, нэвтрэлт, миний бүртгэл, миний номын сан, дахин таталт.
- Private file storage болон богино хугацаатай татах холбоос.
- Блог, и-мэйл бүртгэл, SEO metadata, GA4 болон conversion analytics.
- erxes CMS-ээр хуудас, хичээл, блог, navigation болон локалчилсан контент удирдах.
- Монгол, Англи, Солонгос хэлний локалчилсан хувилбар.

### 4.2 Out-of-scope

- Native iOS эсвэл Android апп.
- Видео сургалтын LMS, live class, membership болон subscription billing.
- AI солонгос хэлний багш.
- PDF-г хуулбарлахаас 100% хамгаалах DRM.
- Эхний MVP-д олон арван ном болон бүх боломжит payment provider.
- Enterprise түвшний олон байгууллага, олон салбарын tenant бүтэц.

## 5. Target Audience & User Personas

### Primary Persona - Ану

- **Demographics:** 18 настай, Монгол, солонгос хэлний анхан шатны суралцагч.
- **Goals:** Хангыл, суурь үг, дүрмийг Монгол тайлбартайгаар ойлгох.
- **Pain Points:** Мэдээлэл олон сувагт тархай, тайлбар урт эсвэл системгүй.
- **Product Interest:** Анхан шатны үгийн сан болон дүрмийн PDF.
- **Tech Proficiency:** Гар утсаар сошиал болон төлбөр ашиглах чадвартай.

### Secondary Persona - Тэмүүлэн

- **Demographics:** Солонгост сурахаар бэлдэж буй оюутан.
- **Goals:** TOPIK 3-4 түвшний оноогоо нэмэгдүүлэх.
- **Pain Points:** Түвшинтэй, зорилтот дасгал болон үгийн сан нэг дор байдаггүй.
- **Product Interest:** TOPIK үгийн сан, workbook, шалгалтын тактик.
- **Tech Proficiency:** Desktop болон mobile аль алиныг ашигладаг.

### Secondary Persona - Сара

- **Demographics:** Солонгост ажиллах бэлтгэл хийж буй 25 настай хэрэглэгч.
- **Goals:** Өдөр тутмын, ажлын болон ярилцлагын солонгос хэл сурах.
- **Pain Points:** Бодит амьдралд хэрэглэгдэх хэллэг, нөхцөлт ярианы материал хомс.
- **Product Interest:** Ярианы цахим ном, ажлын хэллэгийн багц.
- **Tech Proficiency:** Mobile-first, хурдан бөгөөд ойлгомжтой урсгал шаардана.

## 6. Site Information Architecture & Sitemap

### 6.1 Page Hierarchy

```text
Нүүр /
├── Солонгос хэл сурах /learn
│   ├── Үгийн сан /learn/vocabulary
│   ├── Дүрэм /learn/grammar
│   ├── Харилцан яриа /learn/conversation
│   ├── Сонсгол /learn/listening
│   └── K-Drama хэллэг /learn/kdrama
├── TOPIK /topik
├── Цахим ном /shop
│   └── Номын дэлгэрэнгүй /shop/[slug]
├── Сагс /cart
├── Төлбөр /checkout
│   └── Төлбөр амжилттай /checkout/success
├── Нэвтрэх /login
├── Бүртгүүлэх /signup
├── Миний бүртгэл /account
├── Миний номын сан /library
├── Блог /blog
├── Бидний тухай /about
└── Холбоо барих /contact
```

### 6.2 Navigation Structure

- **Header:** Logo, Солонгос хэл сурах, TOPIK, K-Drama, Цахим ном, Блог, хайлт, хэрэглэгч, сагс.
- **Learn dropdown:** Үгийн сан, Дүрэм, Харилцан яриа, Сонсгол, K-Drama хэллэг.
- **Mobile:** Hamburger menu, үндсэн сурах холбоосууд, тусгаарласан Цахим ном, Миний номын сан, Сагс.
- **Footer:** About, Contact, Blog, legal links, social links, newsletter, language selector.

## 7. Functional Requirements

### 7.1 Section-specific Requirements

#### Нүүр хуудас

- **Purpose:** Хэрэглэгчийг үнэгүй сурахаас цахим номын худалдан авалт руу чиглүүлэх.
- **Content:** Hero, түгээмэл хичээл, сургалтын төрлүүд, онцлох ном, TOPIK/K-Drama контент, social proof, newsletter.
- **CTA:** `Үнэгүй сурах`, `Цахим номууд үзэх`.
- **Interactions:** Responsive cards, ангиллын холбоос, localized navigation.

#### Сургалтын контент

- **Purpose:** SEO болон social traffic-ийг үнэ цэнтэй үнэгүй хичээлээр татах.
- **Content:** Солонгос бичвэр, romanization, Монгол тайлбар, жишээ өгүүлбэр, дасгал, түвшин, ангилал.
- **CTA:** Хичээлтэй холбоотой цахим ном үзэх.
- **Interactions:** Хайлт, шүүлтүүр, дуртайд хадгалах, related lessons/products.

#### Цахим номын дэлгүүр

- **Purpose:** Дижитал бүтээгдэхүүнийг худалдааны бүтээгдэхүүн гэдэг нь тодорхой байдлаар танилцуулах.
- **Content:** Cover, нэр, үнэ, хуучин үнэ, түвшин, ангилал, үнэлгээ, товч тайлбар.
- **CTA:** `Дэлгэрэнгүй`, `Одоо худалдаж авах`.
- **Interactions:** Бүгд, Анхан, Дунд, TOPIK, Яриа, Үгийн сан, Дүрэм шүүлтүүр.

#### Номын дэлгэрэнгүй

- **Purpose:** Эргэлзээг бууруулж, худалдан авалтыг дуусгах.
- **Content:** Cover, үнэ, түвшин, хуудас, файл, сурах үр дүн, агуулга, preview, sample pages, review, FAQ, digital delivery notice.
- **CTA:** `Одоо худалдаж авах`.
- **Interactions:** Preview gallery, FAQ accordion, cart/buy-now action.

#### Миний номын сан

- **Purpose:** Худалдан авсан номд байнгын эрхтэйгээр эргэн хандах.
- **Content:** Ном, худалдан авсан огноо, order reference, access state.
- **CTA:** `Нээх`, `Татаж авах`.
- **Interactions:** Эрхийн шалгалт, signed download link үүсгэх.

### 7.2 E-commerce Requirements

- Эхний бүтээгдэхүүнүүд: `Солонгос хэлний анхан шатны 500 үг`, `Анхан шатны 50 дүрэм`, `K-Drama дээр байнга сонсогддог 100 хэллэг`.
- Cart нь бүтээгдэхүүн нэмэх, хасах, тооцоолох, coupon ашиглахад бэлэн байна.
- Checkout нь хэрэглэгч, захиалга, төлбөрийн арга, дүн, нөхцөлийн зөвшөөрлийг багтаана.
- Payment provider abstraction нь QPay, карт болон ирээдүйн provider нэмэх боломжтой байна.
- Webhook болон server-side verification амжилттай болсны дараа л захиалга `paid` төлөвт орно.
- Амжилттай төлбөрийн дараа entitlement үүсэж, success page болон library-д татах эрх гарна.
- Давхар webhook, refresh, retry үед duplicate order/access үүсэхээс хамгаална.
- Үнэ Монгол төгрөгөөр зөв format-тай харагдана.

### 7.3 Content Management Requirements

- Admin нь хичээл, цахим ном, үнэ, cover, PDF, preview, category, level, blog, FAQ удирдана.
- Publish/draft төлөв, slug, SEO metadata, хэл тус бүрийн орчуулга дэмжинэ.
- Захиалга, хэрэглэгч, coupon, review болон analytics харах боломжтой байна.
- Контент шинэчлэхэд хөгжүүлэгч шаардахгүй.

### 7.4 Multi-language Requirements

- Үндсэн хэл Монгол (`mn`), нэмэлт хэл Англи (`en`) болон Солонгос (`ko`).
- Navigation, page content, lesson, product, CTA, metadata бүрэн орчуулагдана.
- Нэг контентын slug бүх хэлэнд ижил байна.
- Солонгос жишээ өгүүлбэрийн эх бичвэрийг орчуулгын UI text-ээс тусад нь хадгална.
- Орчуулга байхгүй үед үндсэн хэл рүү хяналттай fallback хийнэ.

### 7.5 User Account & Authentication

- Email-based signup, login, logout, password recovery.
- User profile, order history, library entitlement.
- Protected account болон library routes.
- Guest checkout нь MVP шийдвэрээр тусад нь баталгаажих шаардлагатай; account үүсгэвэл худалдан авалтыг тухайн хэрэглэгчтэй холбоно.

### 7.6 Search & Filtering

- Хичээл, блог, цахим номыг нэр, тайлбар, keyword-оор хайна.
- Content type, level, topic, product category шүүлтүүртэй байна.
- Mobile дээр хялбар нээж хаах search/filter UI ашиглана.

### 7.7 Analytics & Lead Capture

- GA4 page view, lesson view, product view, add-to-cart, begin-checkout, payment-success, download events.
- `Үнэгүй хичээл -> Ном -> Checkout -> Payment` funnel хэмжинэ.
- Newsletter email consent болон source tracking хадгална.

## 8. Non-functional Requirements

### 8.1 Performance

- Page load time: 3 секундээс бага.
- TTFB: 200ms-ээс бага байх зорилт.
- FCP: 1.8 секундээс бага.
- LCP: 2.5 секундээс бага.
- CLS: 0.1-ээс бага.
- Responsive images, font optimization, server rendering, caching ашиглана.

### 8.2 SEO

- Locale-aware metadata, canonical болон hreflang.
- Sitemap.xml, robots.txt, clean semantic URLs.
- Lesson, Article, Product, FAQ structured data тохирох хуудсанд ашиглана.
- Social preview image болон share metadata.
- Монгол хэрэглэгчийн хайлтын хэллэгт тулгуурласан title, heading, internal linking.

### 8.3 Accessibility

- WCAG 2.1 AA түвшинг зорилго болгоно.
- Keyboard navigation, visible focus, semantic heading, form label, alt text.
- Color contrast болон 44px-аас багагүй mobile touch target.
- Motion нь reduced-motion preference-ийг хүндэтгэнэ.

### 8.4 Security

- PDF файлыг public URL-д хадгалахгүй.
- Нэвтэрсэн хэрэглэгчийн paid entitlement-ийг server-side шалгана.
- Богино хугацаатай signed URL ашиглана.
- Payment status-ийг client redirect-д итгэхгүй, provider API/webhook-оор баталгаажуулна.
- Secrets нь server environment-д хадгалагдана; browser bundle-д орохгүй.
- Rate limiting, input validation, CSRF хамгаалалт, secure cookies болон audit logging ашиглана.
- Ирээдүйд худалдан авагчийн email/order ID watermark нэмэх боломжтой байна.

### 8.5 Browser & Device Support

- Mobile-first layout, 320px-аас эхэлсэн responsive support.
- Сүүлийн хоёр хувилбарын Chrome, Safari, Firefox, Edge.
- iOS Safari болон Android Chrome дээр payment, auth, download урсгалыг шалгана.

## 9. Design Direction

### 9.1 Visual Style

- Энгийн, найрсаг, орчин үеийн, Солонгос мэдрэмжтэй, mobile-first.
- Зөөлөн pastel өнгө, цэвэр whitespace, rounded UI, том typography, энгийн icon, өөрийн illustration.
- Хуучны сургалтын төв эсвэл энгийн блог шиг харагдахгүй.
- Өгсөн Tilda screenshot-уудын контентын бүтэц, том зураг, цэвэр layout-ийг судалгааны эх сурвалж болгох боловч шинэ дизайныг from-scratch үүсгэнэ.

### 9.2 Color Palette

- **Primary:** Screenshot судалгааны дараа dominant өнгөөс тодорхойлно.
- **Category accents:** Үгийн сан - ягаан, Дүрэм - шар, Яриа - ногоон, Сонсгол - цэнхэр, K-Drama - pink, TOPIK - улаан.
- **Neutral:** Өндөр contrast бүхий цайвар суурь болон уншихад эвтэйхэн бараан text.

### 9.3 Typography

- Монгол кирилл, Англи, Солонгос үсгийг бүрэн дэмжсэн web font.
- Том, итгэлтэй heading; урт хичээлд уншихад эвтэйхэн body line-height.
- Номын card болон price hierarchy нь бүтээгдэхүүний шинжийг тодорхой харуулна.

### 9.4 Imagery & Photography

- Солонгосын өдөр тутмын амьдрал, суралцах мөч, бодит хэрэглээтэй зураг.
- Нэг төрлийн art direction бүхий book covers болон category illustrations.
- Decorative зураг нь хичээлийн мэдээлэл, CTA-г дарахгүй.

## 10. CTA Strategy & Conversion Goals

| Location | CTA Text | Destination / Action | Goal |
| --- | --- | --- | --- |
| Hero | Үнэгүй сурах | `/learn` | Learning journey эхлүүлэх |
| Hero | Цахим номууд үзэх | `/shop` | Product discovery |
| Lesson footer | Цахим ном үзэх | Холбогдох `/shop/[slug]` | Free-to-paid conversion |
| Product card | Дэлгэрэнгүй | `/shop/[slug]` | Product consideration |
| Product detail | Одоо худалдаж авах | Cart эсвэл checkout | Purchase intent |
| Checkout | Төлбөр төлөх | Payment provider | Order completion |
| Success | Татаж авах | Signed download | Immediate delivery |
| Account | Миний номын сан | `/library` | Retention and repeat access |
| Content/footer | И-мэйлээр авах | Newsletter signup | Lead capture |

## 11. Success Metrics & Acceptance Criteria

### 11.1 Quantitative Metrics

- Сарын зочин: 3,000+.
- Үнэгүй хичээлийн сарын үзэлт: 5,000+.
- Номын хуудасны сарын үзэлт: 1,000+.
- Purchase conversion: 2-5%.
- Сарын номын захиалга: 30-100+.
- Шинэ email subscriber: сард 100+.
- Repeat purchase: 10%+.
- Mobile хэрэглэгч: 70%+.

### 11.2 Qualitative Criteria

- Хэрэглэгч mobile төхөөрөмжөөс хичээлээс холбогдох ном руу ойлгомжтой шилжинэ.
- Амжилттай төлбөрийн дараа гар ажиллагаагүйгээр номын эрх үүснэ.
- Худалдан авсан ном library-д үлдэж, дахин татах боломжтой байна.
- Admin хөгжүүлэгчгүйгээр хичээл, ном, үнэ, файл, орчуулга шинэчилнэ.
- Монгол, Англи, Солонгос navigation болон үндсэн контент зөв locale-оор харагдана.
- Private PDF-г зөвшөөрөлгүй хэрэглэгч татаж чадахгүй.

## 12. Assumptions & Constraints

### Assumptions

- Learnminea нь эхний чанартай сургалтын контент, номын cover, PDF, preview файлыг нийлүүлнэ.
- QPay эсвэл сонгосон payment provider API болон webhook access олдоно.
- Эхний MVP гурван цахим номоор эхэлнэ.
- Одоогийн `business` template сонголтын хүрээнд digital commerce боломжийг custom module байдлаар хэрэгжүүлнэ.
- erxes CMS нь маркетинг, сургалтын болон localization контентын үндсэн source of truth байна.

### Constraints

- MVP хугацааны зорилт 6-8 долоо хоног.
- PDF-г 100% хуулбарлахаас хамгаалах боломжгүй.
- Payment болон private download урсгал production credential, provider sandbox/production access-аас хамаарна.
- Screenshot нь visual reference боловч эх дизайн шууд хуулбар биш.
- Guest checkout, coupon, review moderation-ийн нарийвчилсан business rule дараагийн шатанд баталгаажна.

## 13. References & Appendices

### 13.1 Reference Documents

- User-provided sitemap and product requirements, 2026-08-18.
- User-provided screenshots from the current Tilda prototype.
- Current prototype: https://iluvmny8.tilda.ws/
- erxes tenant: configured privately in the project environment.

### 13.2 Competitor Analysis

Одоогоор шууд өрсөлдөгчийн URL өгөөгүй. UX research шатанд Монгол хэрэглэгчдэд чиглэсэн солонгос хэлний сургалт, TOPIK бэлтгэл, digital workbook худалдааны бүтээгдэхүүнүүдийг benchmark хийнэ.

| Competitor Type | Strengths | Opportunities for Learnminea |
| --- | --- | --- |
| Social content creators | Reach, short-form engagement | Системтэй curriculum болон ownership бий болгох |
| Language learning apps | Habit loop, polished UX | Монгол тайлбар, local payment, cultural relevance |
| PDF sellers | Шууд бүтээгдэхүүн | Free content funnel, library, trusted delivery |
| Training centers | Teacher trust, structured programs | Self-paced, mobile-first, lower-friction access |

### 13.3 Glossary

| Term | Definition |
| --- | --- |
| TOPIK | Солонгос хэлний түвшин тогтоох шалгалт |
| Entitlement | Тухайн хэрэглэгч бүтээгдэхүүн ашиглах, татах эрхтэйг нотлох бүртгэл |
| Signed URL | Хязгаарлагдмал хугацаанд хүчинтэй private file татах холбоос |
| Conversion funnel | Хичээлээс бүтээгдэхүүн, checkout, төлбөр хүртэлх хэрэглэгчийн шатлал |
| MVP | Зах зээлийн үндсэн хэрэгцээг шалгах хамгийн бага бүрэн бүтээгдэхүүн |

### 13.4 Proposed Technical Architecture

| Layer | Proposed Approach |
| --- | --- |
| Frontend | Next.js, TypeScript, Server Components |
| UI | Tailwind CSS, project-compatible component library or custom components |
| CMS | erxes CMS for pages, lessons, blog, navigation, localization, and product content |
| Application backend | Next.js server-side APIs or Server Actions for protected workflows |
| Authentication | A production-ready auth provider integrated with account and library access |
| Transactional data | PostgreSQL-compatible storage for users, orders, payments, and entitlements when not supplied by an integrated erxes module |
| File storage | Private object storage with short-lived signed URLs |
| Payment | Provider adapter supporting QPay first and card/other providers later |
| Analytics | Google Analytics 4 with ecommerce and learning funnel events |
| SEO | Next.js Metadata API, structured data, sitemap, localized metadata |
| Hosting | Vercel with server-side secrets and webhook endpoints |

```text
Хэрэглэгч
    |
    v
Next.js application
    |
    +-- erxes CMS and content
    +-- Authentication and account
    +-- Payment provider adapter
    +-- Order and entitlement data
    +-- Private object storage
            |
            v
    Authorized ebook download
```

Технологийн эцсийн сонголт нь starter project, erxes-ийн боломж, payment provider-ийн API болон production credential-ийг шалгасны дараа баталгаажна. Нэг provider-тэй хэт нягт холбогдохгүй interface ашиглах нь заавал биелүүлэх архитектурын шаардлага байна.

### 13.5 Canonical Lesson Example

K-Drama богино хичээлийн canonical бүтэц дараах байдалтай байна:

```text
Гарчиг: K-Drama дээр хамгийн их сонсогддог 20 хэллэг
Дугаар: 01
Солонгос хэллэг: 괜찮아
Romanization: gwaen-chan-a
Монгол утга: Зүгээр ээ / Зүгээр үү?

Жишээ:
A: 진짜 괜찮아? - Үнэхээр зүгээр үү?
B: 응, 괜찮아. - Тийм ээ, зүгээр.

Холбогдох бүтээгдэхүүн:
K-Drama Korean 100
100 өдөр тутмын хэллэг + жишээ өгүүлбэр + дасгал
CTA: Цахим ном үзэх
```

Энэ загвар нь бүх lesson type-д title, source text, pronunciation/romanization, Монгол тайлбар, жишээ, level/category, related product гэсэн дахин ашиглагдах content model-ийн суурь болно.

### 13.6 Delivery Roadmap

| Phase | Estimated Duration | Deliverables |
| --- | --- | --- |
| 1. MVP foundation | 1-2 долоо хоног | Brand direction, design system, Next.js base, data foundation, login, navigation, homepage, learn landing, mobile UI |
| 2. Learning content | 1-2 долоо хоног | Vocabulary, grammar, conversation, K-Drama, TOPIK, search, CMS/admin workflows |
| 3. Ebook store | 1-2 долоо хоног | Product listing, product detail, cart, checkout, orders, coupon-ready structure |
| 4. Payment | Ойролцоогоор 1 долоо хоног | Payment API, verification, webhook, order status, success/failure flow |
| 5. Digital delivery | Ойролцоогоор 1 долоо хоног | Library, private PDF, entitlement check, receipt, signed download link |
| 6. Launch | Ойролцоогоор 1 долоо хоног | SEO, analytics, performance, mobile/payment/security testing, backup, production launch |

Нийт MVP хугацааны зорилт 6-8 долоо хоног боловч provider access, контентын бэлэн байдал, review turnaround болон integration complexity-оос хамаарч дахин тооцоолно.

### 13.7 MVP Priority and Growth Path

MVP-ийн зайлшгүй дөрвөн capability нь `Контент + Цахим ном + Төлбөр + Миний номын сан` байна. Эхний release дараах гурван бүтээгдэхүүнээр бодит сонирхол болон conversion-ийг шалгана:

- Солонгос хэлний анхан шатны 500 үг.
- Солонгос хэлний анхан шатны 50 дүрэм.
- K-Drama дээр байнга сонсогддог 100 хэллэг.

```text
Instagram / TikTok / Google
            |
            v
       Үнэгүй контент
            |
            v
       Солонгос хичээл
            |
            v
       Холбогдох ном
            |
            v
Дэлгүүр -> Номын дэлгэрэнгүй -> Төлбөр
            |
            v
     Захиалга ба эрх
        /         \
       v           v
  Шууд татах   Миний номын сан
        \         /
         v       v
      Дараагийн худалдан авалт
```

Батлагдсан өсөлтийн дараалал нь `PDF -> Bundle -> Видео хичээл -> Membership -> Онлайн курс -> AI солонгос хэлний багш` байна. Дараагийн шат бүрийг MVP analytics, хэрэглэгчийн хэрэгцээ, төлбөрийн бодит дата дээр үндэслэн тусад нь scope хийнэ.
