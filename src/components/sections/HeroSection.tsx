import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";
import { COMPANY_INFO } from "@/lib/seo";

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  description?: string;
  primaryCta?: {
    text: string;
    textEn: string;
    href: string;
  };
  secondaryCta?: {
    text: string;
    textEn: string;
    href: string;
  };
}

export function HeroSection({
  title = COMPANY_INFO.name,
  subtitle = "Perusahaan Penyedia Batu Kapur / Gamping Berkualitas untuk Industri dan Konstruksi",
  description,
  primaryCta = {
    text: "Hubungi Kami",
    textEn: "Contact Us",
    href: "/contact",
  },
  secondaryCta = {
    text: "Hubungi via WhatsApp",
    textEn: "Contact via WhatsApp",
    href: `https://wa.me/${COMPANY_INFO.whatsapp}`,
  },
}: HeroSectionProps) {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image Placeholder */}
      <div className="absolute inset-0 bg-secondary industrial-pattern">
        {/* Mining/Quarry Visual Placeholder */}
        <div className="absolute inset-0 bg-gradient-to-br from-secondary via-secondary/95 to-primary/20" />
        <div className="absolute inset-0 bg-[url('/hero-bg.jpg')] bg-cover bg-center opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 py-20 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            {COMPANY_INFO.tagline}
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight">
            {title}
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-secondary-foreground/90 max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>

          {/* Description */}
          {description && (
            <p className="text-base text-secondary-foreground/70 max-w-2xl mx-auto">
              {description}
            </p>
          )}

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button asChild size="lg" className="min-w-48">
              <Link href={primaryCta.href}>
                {primaryCta.text} / {primaryCta.textEn}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="min-w-48 bg-transparent border-secondary-foreground/30 text-secondary-foreground hover:bg-secondary-foreground/10">
              <a
                href={secondaryCta.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="mr-2 h-4 w-4" />
                {secondaryCta.text} / {secondaryCta.textEn}
              </a>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 mt-12 border-t border-secondary-foreground/10">
            {[
              { value: "High", label: "Quality Products" },
              { value: "Sulawesi", label: "Location" },
              { value: "Industrial", label: "Grade" },
              { value: "Export", label: "Ready" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-2xl sm:text-3xl font-bold text-primary">
                  {stat.value}
                </p>
                <p className="text-sm text-secondary-foreground/70">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
