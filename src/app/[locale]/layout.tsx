import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { COMPANY_INFO, SITE_CONFIG, generateOrganizationSchema, generateLocalBusinessSchema } from "@/lib/seo";
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  icons: {
    icon: "/Logo.svg",
    apple: "/Logo.svg",
  },
  title: {
    default: `${COMPANY_INFO.name} - Supplier Batu Kapur & Kalsium Karbonat`,
    template: `%s | ${COMPANY_INFO.name}`,
  },
  description: COMPANY_INFO.description,
  keywords: [
    "batu kapur",
  ],
  authors: [{ name: COMPANY_INFO.name }],
  creator: COMPANY_INFO.name,
  publisher: COMPANY_INFO.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "id" }];
}

const NAV_LINKS = [
  { href: "/", labelKey: "home" },
  { href: "/about", labelKey: "about" },
  { href: "/products", labelKey: "products" },
  { href: "/contact", labelKey: "contact" },
];

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!["en", "id"].includes(locale)) {
    notFound();
  }

  const messages = (await import(`../../../messages/${locale}.json`)).default;
  const t = (key: string) => messages.Header?.[key] || key;
  const f = (key: string) => messages.Footer?.[key] || key;

  const translatedNavLinks = NAV_LINKS.map(link => ({
    ...link,
    label: t(link.labelKey)
  }));

  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Navbar locale={locale} translatedLinks={translatedNavLinks} contactLabel={t("contact")} />
        <main className="flex-1">
          {children}
        </main>
        <Footer 
          locale={locale} 
          translatedNavLinks={translatedNavLinks} 
          rightsLabel={f("rights")} 
          profileLabel={f("companyProfile")} 
        />
      </div>
    </>
  );
}
