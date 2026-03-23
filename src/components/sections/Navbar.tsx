"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { COMPANY_INFO } from "@/lib/seo";
import { useLocale, useTranslations } from "next-intl";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

interface NavbarProps {
  locale: string;
  translatedLinks: Array<{ href: string; label: string }>;
  contactLabel: string;
}

export function Navbar({ locale, translatedLinks, contactLabel }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container mx-auto px-4 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href={`/${locale}/`} className="flex items-center gap-2 group">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-transparent overflow-hidden">
              <Image src="/Logo.svg" alt="Logo" width={40} height={40} className="object-contain" />
            </div>
            <div className="hidden sm:block">
              <p className="text-sm font-bold leading-tight text-foreground">
                {COMPANY_INFO.name}
              </p>
              <p className="text-xs text-muted-foreground">
                {COMPANY_INFO.tagline}
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {translatedLinks.map((link) => (
              <Link
                key={link.href}
                href={`/${locale}${link.href}`}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Button & Language Switcher */}
          <div className="hidden lg:flex items-center gap-3">
            <LanguageSwitcher locale={locale} />
            <Button asChild variant="outline" size="sm">
              <a href={`tel:${COMPANY_INFO.phone.replace(/\s/g, "")}`}>
                <Phone className="h-4 w-4 mr-2" />
                {contactLabel}
              </a>
            </Button>
            <Button asChild size="sm">
              <a
                href={`https://wa.me/${COMPANY_INFO.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <LanguageSwitcher locale={locale} />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-foreground"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "lg:hidden overflow-hidden transition-all duration-300 ease-in-out",
            isOpen ? "max-h-96 pb-4" : "max-h-0"
          )}
        >
          <div className="flex flex-col gap-2 pt-4">
            {translatedLinks.map((link) => (
              <Link
                key={link.href}
                href={`/${locale}${link.href}`}
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary hover:bg-muted rounded-lg"
              >
                {link.label}
              </Link>
            ))}
            <div className="flex flex-col gap-2 pt-4 px-4">
              <Button asChild variant="outline" size="sm" className="w-full">
                <a href={`tel:${COMPANY_INFO.phone.replace(/\s/g, "")}`}>
                  <Phone className="h-4 w-4 mr-2" />
                  {contactLabel}
                </a>
              </Button>
              <Button asChild size="sm" className="w-full">
                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
