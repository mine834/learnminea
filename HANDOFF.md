# Learnminea Design Handoff

## 0. Approval Record

- Homepage options shown: A `Seoul Study Club`, B `Korean Editorial Notebook`, C `K-Culture Pulse`.
- Selected option: A.
- Approved visual evolution: Deta Surf atmospheric hero plus Steep editorial typography and peach/sienna accents.
- User gave a direct instruction to build and deploy without another Pencil edit round.
- Preview artifacts: `designs/homepage-option-a.png`, `designs/homepage-option-b.png`, `designs/homepage-option-c.png`.
- Preview Pencil project: `designs/homepage-directions.pen`.
- Final Pencil project: `designs/design.pen`.
- Final export: `designs/design.png`.
- Homepage previews covered the full homepage section flow.
- `design.pen` contains 12 desktop route designs and 5 critical mobile screens.
- All Pencil page frames passed clipping and collapsed-layout validation before build approval.
- The frontend must preserve the sky-gradient editorial hero, restrained blue action color, serif/sans hierarchy, peach callouts, pill actions, and airy layout.

## 1. Frontend Build Map

Homepage sequence:

1. Transparent header over the atmospheric hero.
2. Hero: `Хэл сурахад ихийг биш, зөвийг сур.` with search/composer CTA and floating content artifacts.
3. Explore: `Өөрийнхөөрөө эхэл` with Vocabulary, Grammar, Real Conversation, and K-Drama.
4. Practical Korean: `Солонгос хэлийг амьд хэрэглээнээс сур`.
5. Digital Library: `Хаана ч авч явах сурах материал`.
6. Learning Style assessment: 15-20 minute survey, method, program, balanced skills.
7. Why LearnMinea: useful rather than everything, understanding rather than memorization, time efficiency, digital materials plus guidance.
8. Real-life visual: language that works in cafes, school, work, transport, and everyday life.
9. FAQ accordion.
10. Language-agnostic final CTA: `Хэл сурах нэг л зөв арга гэж байхгүй.`
11. Footer.

Digital Library items required in code and CMS:

- Анхан шатны 1000 үг.
- TOPIK тактик.
- Ханзны мастер.
- K-Drama хэллэг.
- Real Conversation in Korea / Солонгос дахь амьд харилцан яриа.

Routes:

- `/`
- `/learn`
- `/learn/vocabulary`
- `/learn/grammar`
- `/learn/conversation`
- `/learn/kdrama`
- `/topik`
- `/shop`
- `/shop/[slug]`
- `/cart`
- `/checkout`
- `/checkout/success`
- `/login`
- `/signup`
- `/account`
- `/library`
- `/about`
- `/contact`

Shared components:

- Header, mobile navigation, language switcher, footer.
- SkyGradientHero and floating content artifacts.
- PillButton and composer-style search.
- Learning category card, lesson card, digital library card.
- LearningStyleAssessment and WhyLearnminea.
- FaqAccordion.
- Product detail, order summary, checkout, success, library cards.

## Motion And Interaction

- Motion level: 2 (`Alive`).
- Use Framer Motion and `react-intersection-observer` for section reveals.
- Sections slide upward 28px and fade in as the user scrolls; alternate visual blocks may slide from left/right by 32px.
- Stagger cards by 80ms.
- Use Lenis for subtle smooth scrolling, disabled for `prefers-reduced-motion`.
- Floating hero artifacts have gentle static rotations and a maximum 4px hover lift.
- Buttons use 160ms interaction feedback and retain pill geometry.
- No theatrical text splitting, parallax, or heavy WebGL effects.

## Responsive Behavior

- Desktop content max width: 1200px.
- Mobile gutter: 20px; desktop gutter: 40px.
- Desktop 2-3 column groups collapse to one column on mobile.
- Checkout becomes a single-column flow with the order total visible before payment.
- Product purchase CTA becomes a mobile bottom action bar.
- Mobile navigation exposes Learn, TOPIK, K-Drama, Digital Library, My Library, and Cart.
- Preserve 44px minimum touch targets and 200% zoom support.

## Typography And Color

- Display: Noto Serif, regular weight, for H1/H2 and editorial statements.
- Body/UI: Noto Sans, regular/medium only, with Cyrillic and Hangul coverage.
- Primary action only: Surf Blue `#009afc`; pressed/inset: `#006dc8`.
- Hero atmosphere: `#4a9eff` to `#a8d5ff` sky gradient.
- Editorial accent: Blush Peach `#fbe1d1`, with Sienna `#5d2a1a` text.
- Main surfaces: Paper `#ffffff`, Mist `#f3f4f6`, Fog `#fafafb`.
- Borders: `#e5e7eb`; muted text: `#777b86` and `#a3a6af`.

## 2. erxes CMS Field Map

Homepage CMS content order:

- `hero`: headline, summary, primary CTA, secondary CTA.
- `services`: learning categories, practical lesson groups, learning-style assessment, Why LearnMinea.
- `pricing`: Digital Library title, summary, five products, pricing, preview metadata.
- `about`: real-life philosophy and LearnMinea positioning.
- `faq`: common questions and answers.

CMS pages and slugs:

- `home`, `learn`, `vocabulary`, `grammar`, `conversation`, `kdrama`, `topik`, `shop`, `about`, `contact`, `faq`.
- Products/ebooks may use CMS posts with the `ebook` category until a custom product type is added.
- Lesson content uses posts categorized by vocabulary, grammar, conversation, K-Drama, and TOPIK.
- Header and footer menus must use identical slugs across `mn`, `en`, and `ko`.
- All primary content is Mongolian; English and Korean are complete translations, not mixed UI fallbacks.

## Content Tone

- Helpful, direct, and calm; avoid hype, awkward slogans, and school-center language.
- Explain the user outcome in concrete terms.
- Use Korean examples naturally with Mongolian explanation.
- Position LearnMinea as a future multi-language learning platform, not only a Korean ebook store.

## Locked Constraints

- Do not replace the hero with a generic stock-photo split layout.
- Do not turn every section into a dense card grid.
- Do not use blue as a decorative surface outside the atmospheric hero and functional actions.
- Do not add font weights above medium to the editorial system.
- Keep Digital Library products clearly identifiable as downloadable digital products.
- Keep private ebook delivery, payment verification, and library access server-authorized.
