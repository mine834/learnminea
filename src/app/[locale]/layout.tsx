import type { Metadata } from "next";
import { Noto_Sans_KR, Noto_Serif_KR } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";
import ApolloClientProvider from "@/lib/apollo/provider";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ExperienceProvider } from "@/components/layout/Providers";
import { routing } from "@/i18n/routing";
import "../globals.css";

const notoSans = Noto_Sans_KR({
  variable: "--font-ui",
  weight: ["400", "500"],
  subsets: ["latin", "cyrillic"],
});

const notoSerif = Noto_Serif_KR({
  variable: "--font-display",
  weight: ["400"],
  subsets: ["latin", "cyrillic"],
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });
  return { metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://learnminea.com"), title: t("title"), description: t("description") };
}

export default async function LocaleLayout({
  children,
  params,
}: { children: React.ReactNode; params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html
      lang={locale}
      className={`${notoSans.variable} ${notoSerif.variable} h-full antialiased`}
    >
      <body>
        <NextIntlClientProvider messages={messages}>
          <ApolloClientProvider>
            <ExperienceProvider>
              <Header locale={locale} />
              <main className="site-main">{children}</main>
              <Footer locale={locale} />
            </ExperienceProvider>
          </ApolloClientProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
