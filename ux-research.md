# UX Research Document - Learnminea

> **Version:** 1.0
> **Date:** 2026-08-18
> **Author:** UX Researcher (AI)
> **Based on:** business-requirements.md v1.0 (Approved)
> **Status:** Approved

---

## 1. Research Overview

### 1.1 Objectives

- Монгол хэрэглэгч үнэгүй солонгос хэлний хичээлийг хурдан олох туршлагыг тодорхойлох.
- Үнэгүй хичээлээс холбогдох цахим ном руу шахалтгүй боловч ойлгомжтой шилжүүлэх.
- Mobile төхөөрөмж дээр худалдан авалт, төлбөр, таталтыг хамгийн бага friction-тэй болгох.
- Худалдан авсан номд дахин хандах найдвартай library туршлага бий болгох.
- Монгол, Англи, Солонгос хэлний контентыг нэг бүтэц дотор ойлгомжтой хүргэх.

### 1.2 Methodology

- Батлагдсан BRD, sitemap, хэрэглэгчийн урсгал, KPI болон MVP scope-ийн document analysis.
- Ану, Тэмүүлэн, Сара persona-д суурилсан task analysis.
- Одоогийн Tilda prototype screenshot-уудын heuristic review.
- Social discovery, learning platform, digital product store pattern benchmark.
- Accessibility, mobile ergonomics, ecommerce conversion best-practice review.

### 1.3 Scope

Research нь Нүүр, Сурах, Үгийн сан, Дүрэм, Яриа, K-Drama, Цахим ном, Номын дэлгэрэнгүй, Checkout, Бүртгэл, Миний номын сан, Бидний тухай гэсэн MVP experience-ийг хамарна.

### 1.4 Key Findings Summary

1. **Mobile нь үндсэн context:** UI нь нэг гараар ашиглах, хурдан scan хийх, 44px-аас багагүй touch target шаардана.
2. **Content-to-product bridge нь гол conversion point:** Хичээл бүрийн төгсгөлд тухайн сэдэвтэй яг холбоотой нэг үндсэн ном санал болгоно.
3. **Trust нь төлбөрийн өмнөх гол саад:** Үнэ, файл, preview, шууд таталт, төлбөрийн аюулгүй байдал, дахин татах эрхийг CTA-ийн ойролцоо харуулна.
4. **Learning болон shop хоёр тусдаа ертөнц байж болохгүй:** Нэг taxonomy, search, related-content систем ашиглана.
5. **Navigation-ийг MVP-д хялбар байлгана:** Дээд түвшинд сурах, ном, TOPIK/K-Drama, account/cart гэсэн цөөн сонголт байна.
6. **Солонгос бичвэрийн уншигдах байдал онцгой шаардлагатай:** Hangul, romanization, Монгол тайлбарыг тогтвортой hierarchy-тай харуулна.

## 2. User Personas

### Persona 1: Ану - Анхан шатны суралцагч

#### Demographics & Context

- **Age Range:** 16-22.
- **Location:** Монгол.
- **Occupation:** Сурагч эсвэл оюутан.
- **Tech Proficiency:** Social болон mobile payment-д дассан.
- **Primary Device:** Smartphone.

#### Behavioral Patterns

- **Usage Frequency:** Өдөрт 5-15 минутын богино session.
- **Task Priorities:** Үг сурах, дүрэм ойлгох, жишээ харах.
- **Decision Factors:** Монгол тайлбар, ойлгомжтой preview, боломжийн үнэ.
- **Pain Points:** Тархай контент, урт тайлбар, сурах дараалал тодорхойгүй.
- **Motivations:** Солонгос контентыг ойлгох, хурдан ахиц мэдрэх.

#### Goals & Needs

- **Primary Goals:** Суурь үг, дүрэм, яриаг системтэй эхлэх.
- **Secondary Goals:** Өөрийн хурдаар PDF workbook ашиглах.
- **Success Criteria:** Хэрэгтэй хичээлээ 2-3 tap дотор олж, дараагийн алхмаа ойлгох.

#### Context of Use

- **Environment:** Автобус, сургууль, гэр.
- **Time Constraints:** Богино завсарлага.
- **Distractions:** Notification, жижиг дэлгэц, тогтворгүй сүлжээ.

#### Quote

> "Юунаас эхлэхээ шууд мэдээд, Монгол тайлбартай богино хичээл үзмээр байна."

### Persona 2: Тэмүүлэн - TOPIK зорилготой суралцагч

#### Demographics & Context

- **Age Range:** 18-28.
- **Location:** Монгол эсвэл Солонгост сурахаар бэлдэж буй.
- **Occupation:** Оюутан.
- **Tech Proficiency:** Mobile болон laptop тогтмол ашигладаг.
- **Primary Device:** Smartphone, дараа нь laptop.

#### Behavioral Patterns

- **Usage Frequency:** Долоо хоногт олон удаа, 20-45 минут.
- **Task Priorities:** Түвшнээр шүүх, дасгал хийх, шалгалтын материал авах.
- **Decision Factors:** Агуулгын бүтэц, бодит preview, level fit, review.
- **Pain Points:** Түвшин буруу материал, ахицын зам тодорхойгүй.
- **Motivations:** TOPIK 3-4 оноо, сургуульд орох боломж.

#### Goals & Needs

- **Primary Goals:** Оноогоо нэмэхэд чиглэсэн материал олох.
- **Secondary Goals:** Худалдан авсан workbook-оо олон төхөөрөмжөөс ашиглах.
- **Success Criteria:** Түвшинд тохирсон номоо харьцуулж, итгэлтэй худалдан авах.

#### Context of Use

- **Environment:** Гэр, номын сан.
- **Time Constraints:** Шалгалтын хугацаатай.
- **Distractions:** Олон эх сурвалж, material overload.

#### Quote

> "Миний түвшинд яг тохирох материал, юу сурахыг нь урьдчилж хармаар байна."

### Persona 3: Сара - Ажиллах зорилготой хэрэглэгч

#### Demographics & Context

- **Age Range:** 22-35.
- **Location:** Монгол.
- **Occupation:** Ажилтан эсвэл ажил хайгч.
- **Tech Proficiency:** Дунд.
- **Primary Device:** Smartphone.

#### Behavioral Patterns

- **Usage Frequency:** Орой эсвэл амралтын өдөр.
- **Task Priorities:** Өдөр тутмын яриа, ажил, ярилцлагын хэллэг.
- **Decision Factors:** Шууд хэрэглэж болох агуулга, цаг хэмнэлт, таталт.
- **Pain Points:** Хэт академик контент, payment/delivery-д итгэлгүй байх.
- **Motivations:** Солонгост бие даан харилцах, ажилд орох.

#### Goals & Needs

- **Primary Goals:** Бодит нөхцөлд хэрэглэгдэх яриа сурах.
- **Secondary Goals:** Худалдан авсан материалаа буцаад амархан олох.
- **Success Criteria:** Төлбөрөөс хойш шууд авч, offline сурах.

#### Context of Use

- **Environment:** Ажлын дараа, mobile data ашиглан.
- **Time Constraints:** Хязгаарлагдмал чөлөөт цаг.
- **Distractions:** Ядаргаа, жижиг дэлгэц, тасалдах session.

#### Quote

> "Төлбөр төлөөд материалаа шууд аваад, дараа нь буцаад амархан татдаг баймаар байна."

## 3. Customer Journey Mapping

### Journey Overview

**Stages:** Discovery -> Consideration -> Conversion -> Retention

### Stage 1: Discovery

- **Touchpoints:** TikTok, Instagram, YouTube, Google, shared lesson link.
- **User Actions:** Богино контент үзэх, асуултаар хайх, lesson landing нээх.
- **Emotions:** Сонирхол, найдвар, бага зэрэг эргэлзээ.
- **Pain Points:** Social контент үргэлжлэлгүй, эх сурвалж тодорхойгүй.
- **Opportunities:** Search intent-тэй title, social deep link, шууд lesson value.

### Stage 2: Consideration

- **Touchpoints:** Lesson, category, related ebook, product detail, preview.
- **User Actions:** Тайлбар унших, түвшин/үнэ харах, sample шалгах.
- **Emotions:** Сонирхол нэмэгдэх боловч чанар, үнэ, хүргэлтэд эргэлзэнэ.
- **Pain Points:** Product fit тодорхойгүй, PDF юу агуулдгийг мэдэхгүй.
- **Opportunities:** Learning outcomes, table of contents, sample pages, review, instant-delivery notice.

### Stage 3: Conversion

- **Touchpoints:** Buy now, cart, checkout, QPay/card, success page.
- **User Actions:** Account/login, мэдээлэл оруулах, төлбөр баталгаажуулах.
- **Emotions:** Анхааралтай, аюулгүй байдалд мэдрэмтгий, амжилтын дараа тайвшрах.
- **Pain Points:** Урт form, account албадалт, payment redirect эргэлзээ, success state тодорхойгүй.
- **Opportunities:** Progress-free short checkout, clear total, payment state feedback, retry-safe flow.

### Stage 4: Retention

- **Touchpoints:** Success page, library, email receipt, related lesson/book.
- **User Actions:** Ном татах, дахин нээх, дараагийн контент үзэх.
- **Emotions:** Сэтгэл ханамж, итгэл, ахиц хүсэх.
- **Pain Points:** Татсан файл алдагдах, ном хаана байгааг мартах.
- **Opportunities:** Persistent library, recent purchases, related learning path, next-product recommendation.

## 4. Information Architecture & Sitemap

### 4.1 Content Hierarchy

```text
НҮҮР /
├── СУРАХ /learn
│   ├── Үгийн сан /learn/vocabulary
│   ├── Дүрэм /learn/grammar
│   ├── Яриа /learn/conversation
│   └── K-Drama /learn/kdrama
├── ЦАХИМ НОМ /shop
│   ├── Номууд /shop
│   └── Номын дэлгэрэнгүй /shop/[slug]
├── ТӨЛБӨР
│   └── Checkout /checkout
├── БҮРТГЭЛ
│   ├── Нэвтрэх /login
│   ├── Бүртгүүлэх /signup
│   └── Миний номын сан /library
└── БИДНИЙ ТУХАЙ /about
```

TOPIK нь MVP navigation-д онцгой landing эсвэл Сурах доторх filter байдлаар харагдаж болно. Contact, Blog, FAQ зэрэг дараагийн page-үүд нь core navigation-ийг хүндрүүлэхгүйгээр footer эсвэл дараагийн release-д нэмэгдэнэ.

### 4.2 Navigation Design

- **Primary Navigation:** Logo, Сурах, TOPIK, K-Drama, Цахим ном.
- **Utility Navigation:** Search, language, account, cart.
- **Secondary Navigation:** Сурах dropdown дотор Үгийн сан, Дүрэм, Яриа, Сонсгол, K-Drama.
- **Footer Navigation:** Бидний тухай, Холбоо, Блог, FAQ, privacy, terms, social.
- **Mobile Navigation:** Hamburger дотор сурах холбоосууд; Цахим ном, Миний номын сан, Сагс тусдаа high-priority block.

### 4.3 Content Organization Principles

- User intent first: `Сурах` болон `Ном авах` хоёр үндсэн зам.
- Ангилал болон түвшинг бүх контентод нэг нэршлээр ашиглах.
- Хичээл бүр нэг primary related product-тэй байх.
- Page бүр нэг primary CTA, шаардлагатай үед нэг secondary CTA-тай байх.
- Breadcrumb-ийг lesson болон product detail дээр ашиглах.

### 4.4 Search & Filter Strategy

- **Search Scope:** Хичээл, цахим ном, блог.
- **Filter Categories:** Content type, level, topic, TOPIK, product category.
- **Search Results Display:** Type badge, title, summary, level, related action бүхий mixed result list.
- Mobile filter нь bottom sheet эсвэл compact drawer байна.

## 5. Wireframe Guidance

### 5.1 Global Layout Structure

- **Header:** Mobile compact, desktop centered content; utility actions үргэлж танигдахуйц.
- **Footer:** Newsletter, sitemap, trust/payment note, language/social links.
- **Content Width:** Reading content ойролцоогоор 680-760px; marketing/product grid 1120-1280px.
- **Grid System:** Mobile 4-column, tablet 8-column, desktop 12-column conceptual grid.

### 5.2 Section Layouts

#### Homepage

- **Layout Type:** Conversion-led landing page.
- **Content Priority:** Value proposition, dual CTA, lesson categories, popular lessons, featured ebooks, trust, newsletter.
- **Component Types:** Hero, category tiles, lesson cards, product cards, testimonials/trust strip.
- **White Space:** Амьсгалах зайтай боловч mobile дээр хэт урт scroll үүсгэхгүй.
- **Responsive Behavior:** Grid нь desktop 4/3 column-оос mobile single/2-column compact tiles руу шилжинэ.

#### Lesson Page

- **Layout Type:** Focused reading column.
- **Content Priority:** Title/level, Hangul, romanization, Монгол утга, examples, related ebook.
- **Component Types:** Language block, audio-ready control, example dialogue, related product callout.
- **White Space:** Солонгос болон Монгол text block-ийг ялгах тогтвортой spacing.
- **Responsive Behavior:** Sticky sidebar байхгүй; CTA content-ийн дараа бүтэн өргөнөөр харагдана.

#### Shop

- **Layout Type:** Filterable product grid.
- **Content Priority:** Cover, title, level/category, rating, price, detail action.
- **Component Types:** Filter chips, search, product cards, empty state.
- **White Space:** Product card нь блог card-аас илүү structured, худалдааны шинжтэй.
- **Responsive Behavior:** Mobile нэг эсвэл compact хоёр багана; filter horizontal scroll эсвэл drawer.

#### Product Detail

- **Layout Type:** Desktop split cover/info, mobile stacked.
- **Content Priority:** Name, outcome, price, buy CTA, instant delivery, preview, contents, FAQ/reviews.
- **Component Types:** Cover gallery, trust note, specification list, preview, accordion.
- **White Space:** CTA болон digital-delivery notice-ийг нэг decision block болгоно.
- **Responsive Behavior:** Mobile bottom sticky buy bar ашиглаж болох боловч content-ийг хаахгүй.

#### Checkout

- **Layout Type:** Single-purpose short form.
- **Content Priority:** Product/order summary, total, payment option, consent, payment action.
- **Component Types:** Form fields, payment cards, status feedback, retry state.
- **White Space:** Навигацийн distraction-ийг багасгана.
- **Responsive Behavior:** Mobile дээр order summary эвхэгддэг боловч total үргэлж харагдана.

#### Library

- **Layout Type:** Purchased-product list/grid.
- **Content Priority:** Cover, title, purchase date, open/download.
- **Component Types:** Library card, entitlement state, empty state, support link.
- **White Space:** Action hierarchy тодорхой, download status feedback-тэй.
- **Responsive Behavior:** Mobile vertical cards, desktop 2-3 columns.

### 5.3 Content Priority

1. **Homepage:** Value -> Start learning -> Lesson choices -> Related paid products -> Trust -> Retention.
2. **Lesson:** Answer user question -> Demonstrate usage -> Offer next structured step.
3. **Product:** Fit -> Evidence -> Price/delivery -> Purchase.
4. **Checkout:** Order clarity -> Payment -> Status.
5. **Library:** Access -> Download -> Continue learning.

### 5.4 Component Patterns

- **Cards:** Бүхэлдээ clickable биш үед title/action link-ийг тодорхой болгоно; focus state заавал байна.
- **Lists:** Lesson list нь level/type metadata-тай, хурдан scan хийх боломжтой.
- **Forms:** Persistent label, inline validation, зөв keyboard type, error summary.
- **Media:** Next/Image optimization, fixed aspect ratio, descriptive alt text.
- **Status:** Loading skeleton, payment processing, success, failed, expired download state.

## 6. Accessibility Requirements

### 6.1 WCAG 2.1 Level AA Compliance

| Requirement | Implementation | Priority |
| --- | --- | --- |
| Keyboard Navigation | Бүх action, menu, dialog, filter keyboard-аар ажиллана | High |
| Screen Reader Support | Semantic landmarks, labels, status live regions | High |
| Color Contrast | Body 4.5:1, large text/UI 3:1-аас багагүй | High |
| Focus Indicators | Тод, тогтвортой focus ring | High |
| Alt Text | Informative image бүр descriptive alt-тай | High |
| Form Labels | Placeholder-ийг label орлуулахгүй | High |
| Payment Status | Color-оос гадна text/icon-оор төлөв илэрхийлнэ | High |
| Text Resizing | 200% zoom-д content/action алдагдахгүй | Medium |
| Motion Sensitivity | `prefers-reduced-motion` дэмжинэ | Medium |

### 6.2 Multi-language Accessibility

- `lang` attribute-ийг locale болон солонгос phrase block-д зөв ашиглана.
- Монгол, Англи, Солонгос glyph дэмждэг font сонгоно.
- English/Korean text expansion болон line break-ийг component-д тэсвэртэй болгоно.
- RTL шаардлагагүй боловч locale switch keyboard болон screen reader-д ойлгомжтой байна.

### 6.3 Mobile Accessibility

- Touch target хамгийн багадаа 44x44px.
- Pinch zoom-г хориглохгүй.
- Swipe-only interaction ашиглахгүй.
- Sticky CTA нь content болон browser control-ийг хаахгүй.

## 7. Responsive Design Strategy

### 7.1 Breakpoints

| Breakpoint | Width | Target Devices | Layout Changes |
| --- | --- | --- | --- |
| Small mobile | 320-374px | Compact smartphones | Single column, reduced gutters |
| Mobile | 375px+ | Smartphones | Single column, compact category grid |
| Tablet | 768px+ | Tablets | Two-column content/cards |
| Desktop | 1024px+ | Laptop | Full navigation, multi-column grid |
| Wide | 1280px+ | Desktop | Max-width content, larger whitespace |

### 7.2 Mobile-first Approach

- Primary CTA эхний viewport-д харагдана.
- Navigation, search, cart, account нэг гараар хүрэх боломжтой байна.
- Lesson content нь horizontal scroll үүсгэхгүй.
- Checkout form field болон payment action mobile keyboard-д тохирно.

### 7.3 Content Adaptation

- Decorative image crop нь message-г алдагдуулахгүй.
- Product specification mobile дээр stacked list болно.
- Long table нь cards эсвэл labelled rows болж хувирна.
- Secondary text-ийг нуухын оронд progressive disclosure ашиглана.

### 7.4 Performance Budget

- Mobile initial transfer: 1MB-аас бага зорилт.
- Desktop initial transfer: 2MB-аас бага зорилт.
- Mobile load: 3 секундээс бага; LCP 2.5 секундээс бага.
- Hero болон product cover-д responsive image, lazy loading, explicit dimensions ашиглана.

## 8. Interaction & Motion Design

### 8.1 Animation Principles

- Motion нь feedback, hierarchy, state change тайлбарлахад л ашиглагдана.
- Casual tone-д тохирсон зөөлөн, хурдан interaction байна.
- Checkout/payment flow-д cinematic motion ашиглахгүй.
- Motion level-ийг Pencil design эхлэхийн өмнө 0-5 хооронд user-ээр батлуулна.

### 8.2 Micro-interactions

| Element | Trigger | Animation | Duration |
| --- | --- | --- | --- |
| Button | Hover/press | Color, subtle translate/scale | 120-180ms |
| Lesson/Product card | Hover/focus | Border/shadow emphasis | 180-220ms |
| Filter | Select | Background/check state | 150ms |
| Form input | Focus/error | Border and message reveal | 150-200ms |
| Cart | Add | Count update and confirmation | 200ms |
| Payment | Processing | Accessible spinner/status | Continuous |
| Download | Ready | State change and confirmation | 180ms |

### 8.3 Page Transitions

- Fast crossfade эсвэл no-transition; navigation response-г удаашруулахгүй.
- Payment redirect/return дээр explicit loading and verification state ашиглана.

### 8.4 Scroll Behaviors

- Native scroll үндсэн байна.
- Anchor link ашиглавал fixed header offset зөв байна.
- Auto-scroll нь validation error рүү focus-той хамт зөвхөн хэрэгцээтэй үед хийнэ.

## 9. Content Strategy & UX Writing

### 9.1 Tone of Voice

- Найрсаг, шууд, урам өгсөн, хэт албан бус биш.
- Анхан шатны хэрэглэгчийг буруутгасан эсвэл айлгасан хэллэгээс зайлсхийх.
- Богино өгүүлбэр, хэрэглэгчийн хийх дараагийн action тодорхой.

### 9.2 Terminology

| Term | Usage | Avoid |
| --- | --- | --- |
| Цахим ном | Digital PDF бүтээгдэхүүний үндсэн нэр | Файл, материал гэж тодорхойгүй нэрлэх |
| Миний номын сан | Худалдан авсан номын байнгын хэсэг | Downloads гэх дан техникийн нэр |
| Одоо худалдаж авах | Product primary CTA | Submit, Continue гэх ерөнхий CTA |
| Татаж авах | Эрх бэлэн болсон action | Link авах гэх тодорхойгүй хэллэг |
| Төлбөр шалгаж байна | Verification state | Loading гэж дангаар нь бичих |

### 9.3 CTA Copy Guidelines

- Verb-first, outcome-specific copy ашиглана.
- Hero дээр `Үнэгүй сурах`, `Цахим номууд үзэх` гэсэн хоёр замыг ялгана.
- Lesson дээр `Энэ сэдвийн цахим номыг үзэх` гэх context-specific copy ашиглаж болно.
- Payment action дээр final total болон юу болохыг ойр харуулна.

### 9.4 Multi-language UX Writing

- Шууд үгчилсэн орчуулгаас илүү тухайн хэлний natural phrasing ашиглана.
- Солонгос сургалтын source text-ийг interface translation-аас ялгана.
- Locale switch бүх page дээр одоогийн equivalent route руу шилжинэ.
- Орчуулга дутуу үед хэрэглэгчид хэл холилдсон critical flow үзүүлэхгүй.

### 9.5 Error Messages

- Юу болсон, хэрэглэгч юу хийх, өгөгдөл/төлбөр аюулгүй эсэхийг тайлбарлана.
- Жишээ: `Төлбөр одоогоор баталгаажаагүй байна. Дахин шалгах товчийг дарна уу. Таны данснаас давхар төлбөр авахгүй.`
- Form error нь field-ийн дэргэд, submit үед summary хэлбэрээр мөн харагдана.

## 10. Usability Testing Plan

### 10.1 Test Scenarios

- Social link-ээс орж K-Drama lesson уншаад холбогдох ном олох.
- Анхан шатны дүрмийн номыг filter ашиглан олох, preview шалгах.
- Mobile дээр product-оос checkout хүртэл очиж QPay сонгох.
- Payment return дараа номоо шууд татах.
- Дараа өдөр login хийгээд library-с өмнөх номоо дахин татах.
- Монгол хэлээс Англи эсвэл Солонгос руу equivalent page дээр шилжих.

### 10.2 Testing Methods

- 5-7 target хэрэглэгчтэй moderated mobile usability test.
- Prototype дээр first-click болон task completion observation.
- Checkout copy болон product trust block-ийн preference test.
- Launch дараа funnel analytics, search query, support issue review.

### 10.3 Success Metrics

- Learning category first-click success: 85%+.
- Related product discovery: 80%+.
- Product-to-checkout task completion: 80%+ prototype test.
- Payment-to-download success: 95%+ production.
- Critical task дахь severe usability issue: 0.
- System Usability Scale зорилт: 80+.

## 11. Competitive UX Analysis

| Competitor Type | Strengths | Weaknesses | Opportunities |
| --- | --- | --- | --- |
| Social creators | Reach, engaging short content | Structure, search, continuity сул | Social hook-ийг structured lesson path-тай холбох |
| Global language apps | Habit loop, polished mobile UX | Монгол тайлбар, local context/payment дутна | Монгол-first explanation, QPay, TOPIK relevance |
| PDF sellers | Simple purchase offer | Trust, library, related free content сул | Preview, entitlement, repeat access, learning funnel |
| Training centers | Teacher trust, curriculum | Time/location friction | Self-paced mobile access, affordable digital products |

## 12. Success Metrics & KPIs

### 12.1 UX Metrics

- Homepage-to-learn click-through.
- Lesson completion proxy болон related-product click-through.
- Search success, zero-result rate, filter use.
- Checkout abandonment, payment retry, download success.
- Library revisit болон repeat download.

### 12.2 Business Metrics

- Сарын 3,000+ visitor.
- 5,000+ free lesson view.
- 1,000+ product page view.
- 2-5% purchase conversion.
- Сард 30-100+ order, 100+ email signup, 10%+ repeat purchase.

### 12.3 Technical Metrics

- LCP < 2.5s, CLS < 0.1.
- Payment webhook processing success 99%+.
- Authorized download success 95%+.
- Broken localized route болон public private-file URL: 0.

## 13. Design Agent Collaboration

- Pencil дээр бүтэн homepage section flow бүхий 2-3 direction preview үүсгэнэ.
- Direction бүр ижил sitemap, content priority, CTA strategy-г хадгалж visual treatment-ээр ялгарна.
- Screenshot эх сурвалжаас dominant color, spacing, imagery pattern-ийг судлах боловч from-scratch strategy-г баримтална.
- Homepage сонголт батлагдсаны дараа learn, lesson, shop, product detail, checkout, auth/library, about page-үүдийг нэг design system-д өргөжүүлнэ.
- Desktop болон mobile critical state, payment status, empty/error/loading state-ийг design package-д тусгана.
- Design review, edit, explicit approval хүртэл frontend build эхлэхгүй.

## 14. Assumptions & Constraints

### Assumptions

- Mobile нь үндсэн төхөөрөмж бөгөөд нийт traffic-ийн 70%+ байна.
- Хэрэглэгч social эсвэл search-ээс deep lesson page руу шууд орж болно.
- Product preview, cover, үнэ, агуулгын мэдээлэл design хийх үед бэлэн байна.
- Монгол нь default locale; Англи, Солонгос navigation болон content мөн дэмжигдэнэ.

### Constraints

- MVP-ийн үндсэн architecture нь `business` template дээр custom digital commerce шаардлагатай.
- Payment provider-ийн production behavior credential/API бэлэн байдлаас хамаарна.
- PDF хамгаалалт нь access control, signed URL-ээр хязгаарлагдана; DRM биш.
- Homepage болон navigation-д бүх ирээдүйн feature-г зэрэг гаргаж complexity үүсгэхгүй.
- Screenshot reference нь desktop-centric тул mobile behavior-ийг шинээр зохионо.

## 15. Next Steps

1. Энэхүү UX research-ийг stakeholder review хийж батална.
2. User-ээс motion level болон visual direction сонголт авна.
3. Pencil дээр бүтэн homepage бүхий 2-3 design direction үүсгэнэ.
4. Сонгосон direction-ийг бүх MVP page, responsive state, critical interaction руу өргөжүүлнэ.
5. Final Pencil design package-г user-ээр батлуулсны дараа frontend build эхлүүлнэ.
