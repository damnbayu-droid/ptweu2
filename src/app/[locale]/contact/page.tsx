import type { Metadata } from "next";
import { Card, CardContent } from "@/components/ui/card";
import { ContactForm } from "@/components/sections/ContactForm";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import { COMPANY_INFO, generatePageMetadata } from "@/lib/seo";

export const metadata: Metadata = generatePageMetadata({
  title: "Contact - Hubungi Kami",
  description: "Hubungi PT Wira Energi Utama untuk kebutuhan batu kapur dan kalsium karbonat. Kontak: +62 811 4344 168, email: contact@wiraenergiutama.com. Lokasi: Sulawesi Utara, Indonesia.",
  keywords: ["kontak PT Wira Energi Utama", "limestone supplier contact", "batu kapur sulawesi utara"],
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-secondary text-secondary-foreground py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Hubungi Kami / Contact Us
            </h1>
            <p className="text-lg opacity-90">
              Get in touch with our team for inquiries about our products and services
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-6">
              {/* Company Info */}
              <Card className="border-border/50">
                <CardContent className="p-6">
                  <h2 className="text-xl font-bold text-foreground mb-4">{COMPANY_INFO.name}</h2>
                  <p className="text-sm text-muted-foreground mb-6">{COMPANY_INFO.tagline}</p>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                        <MapPin className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground text-sm">Location</p>
                        <p className="text-xs text-muted-foreground mt-1">
                          {COMPANY_INFO.address.street}<br />
                          {COMPANY_INFO.address.village}<br />
                          {COMPANY_INFO.address.district}<br />
                          {COMPANY_INFO.address.regency}<br />
                          {COMPANY_INFO.address.province}<br />
                          {COMPANY_INFO.address.country}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                        <Phone className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground text-sm">Phone</p>
                        <a href={`tel:${COMPANY_INFO.phone.replace(/\s/g, "")}`} className="text-xs text-muted-foreground hover:text-primary transition-colors">
                          {COMPANY_INFO.phone}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                        <Mail className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground text-sm">Email</p>
                        <a href={`mailto:${COMPANY_INFO.email}`} className="text-xs text-muted-foreground hover:text-primary transition-colors">
                          {COMPANY_INFO.email}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                        <Clock className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground text-sm">Business Hours</p>
                        <p className="text-xs text-muted-foreground">
                          Monday - Friday: 08:00 - 17:00<br />
                          Saturday: 08:00 - 12:00
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* WhatsApp CTA */}
              <Card className="bg-green-50 border-green-200">
                <CardContent className="p-6 text-center">
                  <MessageCircle className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-foreground mb-2">Quick Contact via WhatsApp</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Hubungi kami langsung via WhatsApp untuk respons cepat
                  </p>
                  <Button asChild className="w-full bg-green-600 hover:bg-green-700">
                    <a
                      href={`https://wa.me/${COMPANY_INFO.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="mr-2 h-4 w-4" />
                      Hubungi via WhatsApp / Contact via WhatsApp
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="py-16 lg:py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-2">Our Location</h2>
            <p className="text-muted-foreground">Lokasi Kami di Sulawesi Utara, Indonesia</p>
          </div>
          <Card className="overflow-hidden">
            <div className="aspect-[16/9] bg-muted flex items-center justify-center">
              <div className="text-center p-8">
                <MapPin className="h-16 w-16 text-primary mx-auto mb-4" />
                <p className="font-semibold text-foreground mb-2">
                  {COMPANY_INFO.address.regency}, {COMPANY_INFO.address.province}
                </p>
                <p className="text-sm text-muted-foreground">
                  {COMPANY_INFO.address.country}
                </p>
                <Button asChild variant="outline" className="mt-4">
                  <a
                    href="https://maps.google.com/?q=Ratatotok,Minahasa+Tenggara,Sulawesi+Utara,Indonesia"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Open in Google Maps
                  </a>
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </>
  );
}
