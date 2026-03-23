"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, ChevronRight } from "lucide-react";
import { COMPANY_INFO } from "@/lib/seo";
import { useLocale, useTranslations } from "next-intl";

const NAV_LINKS = [
  { href: "/", labelKey: "home" },
  { href: "/about", labelKey: "about" },
  { href: "/products", labelKey: "products" },
  { href: "/quality", labelKey: "quality" },
  { href: "/gallery", labelKey: "gallery" },
  { href: "/contact", labelKey: "contact" },
];

const PRODUCTS = [
  { id: "limestone", label: "Limestone" },
  { id: "caco3", label: "Calcium Carbonate" },
  { id: "burn-lime", label: "Burn Lime" },
  { id: "hydrated-lime", label: "Hydrated Lime" },
];

interface FooterProps {
  locale: string;
  translatedNavLinks: Array<{ href: string; label: string }>;
  rightsLabel: string;
  profileLabel: string;
}

export function Footer({ locale, translatedNavLinks, rightsLabel, profileLabel }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground mt-auto">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link href={`/${locale}/`} className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-transparent overflow-hidden">
                <Image src="/Logo.svg" alt="Logo" width={40} height={40} className="object-contain" />
              </div>
              <div>
                <p className="text-sm font-bold leading-tight">
                  {COMPANY_INFO.name}
                </p>
                <p className="text-xs text-secondary-foreground/70">
                  {COMPANY_INFO.tagline}
                </p>
              </div>
            </Link>
            <p className="text-sm text-secondary-foreground/80 leading-relaxed">
              {COMPANY_INFO.description}
            </p>
            <div className="pt-2">
              <Link
                href={`/${locale}/company-profile`}
                className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors inline-flex items-center gap-1 group font-medium"
              >
                {profileLabel}
                <ChevronRight className="h-3 w-3 translate-x-0 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              {translatedNavLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={`/${locale}${link.href}`}
                    className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-semibold mb-4">Products</h3>
            <ul className="space-y-2">
              {PRODUCTS.map((product) => (
                <li key={product.id}>
                  <Link
                    href={`/${locale}/products#${product.id}`}
                    className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors"
                  >
                    {product.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-primary" />
                <span className="text-sm text-secondary-foreground/80">
                  {COMPANY_INFO.address.street}, {COMPANY_INFO.address.village},{" "}
                  {COMPANY_INFO.address.district}, {COMPANY_INFO.address.regency},{" "}
                  {COMPANY_INFO.address.province}, {COMPANY_INFO.address.country}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-primary" />
                <a
                  href={`tel:${COMPANY_INFO.phone.replace(/\s/g, "")}`}
                  className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors"
                >
                  {COMPANY_INFO.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-primary" />
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors"
                >
                  {COMPANY_INFO.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-secondary-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-secondary-foreground/60">
              &copy; {currentYear} {COMPANY_INFO.name}. {rightsLabel}
            </p>
            <p className="text-xs text-secondary-foreground/40">
              Supplier Batu Kapur & Kalsium Karbonat Berkualitas Tinggi
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
