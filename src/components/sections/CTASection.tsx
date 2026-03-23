import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle, Phone } from "lucide-react";
import { COMPANY_INFO } from "@/lib/seo";

interface CTASectionProps {
  title?: string;
  titleEn?: string;
  description?: string;
  variant?: "default" | "dark" | "red";
}

export function CTASection({
  title = "Hubungi Kami Sekarang",
  titleEn = "Contact Our Team",
  description = "Dapatkan penawaran terbaik untuk kebutuhan batu kapur dan kalsium karbonat industri Anda.",
  variant = "default",
}: CTASectionProps) {
  const bgStyles = {
    default: "bg-primary text-primary-foreground",
    dark: "bg-secondary text-secondary-foreground",
    red: "bg-primary text-primary-foreground",
  };

  return (
    <section className={`${bgStyles[variant]} py-16 lg:py-20`}>
      <div className="container mx-auto px-4 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-2">{title}</h2>
        <p className="text-lg opacity-80 mb-2">{titleEn}</p>
        <p className="text-base opacity-70 max-w-2xl mx-auto mb-8">
          {description}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            asChild
            size="lg"
            variant={variant === "dark" ? "default" : "outline"}
            className={variant !== "dark" ? "bg-background text-foreground hover:bg-background/90" : ""}
          >
            <Link href="/contact">
              Hubungi Kami / Contact Us
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className={variant === "dark" ? "border-secondary-foreground/30 text-secondary-foreground hover:bg-secondary-foreground/10 bg-transparent" : "border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"}
          >
            <a
              href={`https://wa.me/${COMPANY_INFO.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="mr-2 h-4 w-4" />
              WhatsApp
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className={variant === "dark" ? "border-secondary-foreground/30 text-secondary-foreground hover:bg-secondary-foreground/10 bg-transparent" : "border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"}
          >
            <a href={`tel:${COMPANY_INFO.phone.replace(/\s/g, "")}`}>
              <Phone className="mr-2 h-4 w-4" />
              {COMPANY_INFO.phone}
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
