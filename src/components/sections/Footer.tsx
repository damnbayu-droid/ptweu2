import Link from "next/link";
import { Mountain, Mail, Phone, MapPin } from "lucide-react";
import { COMPANY_INFO } from "@/lib/seo";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/products", label: "Products" },
  { href: "/quality", label: "Quality" },
  { href: "/gallery", label: "Operations" },
  { href: "/contact", label: "Contact" },
];

const PRODUCTS = [
  { href: "/products#limestone", label: "Limestone" },
  { href: "/products#caco3", label: "Calcium Carbonate" },
  { href: "/products#burn-lime", label: "Burn Lime" },
  { href: "/products#hydrated-lime", label: "Hydrated Lime" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground mt-auto">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <Mountain className="h-6 w-6" />
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
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
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
                <li key={product.href}>
                  <Link
                    href={product.href}
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
              &copy; {currentYear} {COMPANY_INFO.name}. All rights reserved.
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
