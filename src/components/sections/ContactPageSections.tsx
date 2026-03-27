"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Building2, Plus, Minus, MapPin, Mail, Phone, Clock, Headphones, Bolt, ShieldAlert, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

export function LocationsGrid() {
  const locations = [
    { type: "Headquarters & Mine", name: "Sulawesi Utara Plant", address: "Ratatotok, Minahasa Tenggara, Indonesia", phone: "+62 811-4344-168", email: "sulawesi@ptweu.company" },
    { type: "Regional Office", name: "Jakarta Representative", address: "Sudirman Central Business District, Jakarta", phone: "+62 21-XXXX-XXXX (Coming Soon)", email: "jakarta@ptweu.company" },
    { type: "Logistics Hub", name: "Surabaya Port facility", address: "Tanjung Perak, Surabaya, Indonesia", phone: "+62 31-XXXX-XXXX (Coming Soon)", email: "logistics@ptweu.company" },
  ];

  return (
    <section className="py-20 lg:py-24 bg-background border-t border-border/40">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Global Network</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Operating from the heart of Indonesia with expanding regional offices to serve you better.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {locations.map((loc, idx) => (
            <Card key={idx} className={`border-border/50 hover:border-primary/50 transition-colors ${idx === 0 ? 'bg-primary/5 border-primary/20' : ''}`}>
               <CardContent className="p-8">
                 <Building2 className={`w-10 h-10 mb-6 ${idx === 0 ? 'text-primary' : 'text-muted-foreground'}`} />
                 <span className="text-xs font-bold text-primary/70 uppercase tracking-wider mb-2 block">{loc.type}</span>
                 <h3 className="text-xl font-bold mb-6">{loc.name}</h3>
                 <ul className="space-y-4 text-sm text-muted-foreground">
                   <li className="flex items-start gap-3">
                     <MapPin className="w-4 h-4 mt-1 shrink-0" />
                     <span>{loc.address}</span>
                   </li>
                   <li className="flex items-center gap-3">
                     <Phone className="w-4 h-4 shrink-0" />
                     <span>{loc.phone}</span>
                   </li>
                   <li className="flex items-center gap-3">
                     <Mail className="w-4 h-4 shrink-0" />
                     <span>{loc.email}</span>
                   </li>
                 </ul>
               </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export function GeneralFAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  
  const faqs = [
    { q: "How quickly can I get a quotation?", a: "To get a quotation, simply fill out the contact form or message us on WhatsApp. Our sales team typically responds within 1-2 hours during business operations." },
    { q: "Do you arrange international shipping?", a: "Yes, we handle FOB, CIF, and CFR shipments. Our logistics team will work closely with you to arrange the most efficient sea freight options." },
    { q: "Can I request product samples before ordering?", a: "We provide product samples (up to 5kg) for lab testing. You only need to cover the international or domestic courier fees." },
    { q: "What payment terms do you accept?", a: "For domestic orders, we accept bank transfers with standard terms. For international exports, we typically require T/T or Irrevocable L/C at sight." },
    { q: "Can I visit your mining site or processing facility?", a: "Yes, we welcome prospect B2B partners. Please schedule a visit through our sales team at least 2 weeks in advance for safety and security clearance." },
  ];

  return (
    <section className="py-20 lg:py-24 bg-secondary/10 border-y border-border/40">
      <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Common Inquiries</h2>
          <p className="text-muted-foreground">Find answers to the most common questions our clients ask.</p>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border border-border/50 rounded-xl overflow-hidden bg-background">
              <button 
                className="w-full px-6 py-5 text-left font-semibold flex items-center justify-between hover:bg-secondary/20 transition-colors text-lg text-foreground/90"
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
              >
                {faq.q}
                <div className="text-primary ml-4 shrink-0">
                  {openIdx === idx ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                </div>
              </button>
              {openIdx === idx && (
                <div className="px-6 pb-6 text-muted-foreground border-t border-transparent pt-2">
                  <p className="leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SupportInfo() {
  return (
    <section className="py-20 lg:py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Service Level Agreements</h2>
            <p className="text-muted-foreground">We are dedicated to providing responsive and reliable support for all our partners.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-primary text-primary-foreground border-none shadow-lg">
              <CardContent className="p-8">
                <Bolt className="w-12 h-12 mb-6 text-primary-foreground/80" />
                <h3 className="text-2xl font-bold mb-4">Sales & Quotations</h3>
                <ul className="space-y-4">
                  <li className="flex justify-between border-b border-primary-foreground/20 pb-2">
                    <span>Initial Response</span>
                    <span className="font-bold">&lt; 2 Hours</span>
                  </li>
                  <li className="flex justify-between border-b border-primary-foreground/20 pb-2">
                    <span>Detailed Quotation</span>
                    <span className="font-bold">24 Hours</span>
                  </li>
                  <li className="flex justify-between pb-2">
                    <span>Sample Dispatch</span>
                    <span className="font-bold">1-3 Days</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-secondary/40 border-border/50 hover:bg-secondary/60 transition-colors">
              <CardContent className="p-8">
                <ShieldAlert className="w-12 h-12 mb-6 text-primary" />
                <h3 className="text-2xl font-bold mb-4">Operational Support</h3>
                <ul className="space-y-4 text-muted-foreground">
                  <li className="flex justify-between border-b border-border/50 pb-2 text-foreground">
                    <span>Logistics Updates</span>
                    <span className="font-bold">Real-time</span>
                  </li>
                  <li className="flex justify-between border-b border-border/50 pb-2 text-foreground">
                    <span>Quality Check Results</span>
                    <span className="font-bold">Pre-shipment</span>
                  </li>
                  <li className="flex justify-between pb-2 text-foreground">
                    <span>Emergency Contact</span>
                    <span className="font-bold">24/7 Availability</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

export function NewsletterBanner() {
  return (
    <section className="py-20 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="bg-primary/5 border border-primary/20 rounded-3xl p-8 md:p-16 text-center max-w-5xl mx-auto relative overflow-hidden">
          <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
             <Send className="w-64 h-64 -rotate-12" />
          </div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Stay Informed</h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8 text-lg">
              Subscribe to our newsletter for the latest updates on production capacity, new product lines, and industry insights.
            </p>
            <form className="flex flex-col sm:flex-row max-w-md mx-auto gap-4" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="flex h-12 w-full rounded-lg border border-input bg-background px-4 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                required
              />
              <Button type="submit" size="lg" className="h-12 w-full sm:w-auto">
                Subscribe
              </Button>
            </form>
            <p className="text-xs text-muted-foreground mt-4">We respect your privacy. No spam, ever.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function BusinessHours() {
  const hours = [
    { day: "Monday", time: "08:00 - 17:00", status: "Open" },
    { day: "Tuesday", time: "08:00 - 17:00", status: "Open" },
    { day: "Wednesday", time: "08:00 - 17:00", status: "Open" },
    { day: "Thursday", time: "08:00 - 17:00", status: "Open" },
    { day: "Friday", time: "08:00 - 17:00", status: "Open" },
    { day: "Saturday", time: "08:00 - 12:00", status: "Half Day" },
    { day: "Sunday", time: "Closed", status: "Closed" },
  ];

  return (
    <section className="py-20 lg:py-24 bg-muted/10 border-t border-border/40">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <Headphones className="w-12 h-12 text-primary mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-4">Business & Operational Hours</h2>
          <p className="text-muted-foreground">Our corporate office and customer support working hours. Our mining operations may run on different schedules depending on fulfillment needs.</p>
        </div>
        <div className="max-w-xl mx-auto bg-background rounded-2xl border border-border shadow-sm overflow-hidden">
          <div className="divide-y divide-border">
            {hours.map((h, i) => (
              <div key={i} className="flex justify-between items-center p-6 hover:bg-secondary/20 transition-colors">
                <span className="font-medium">{h.day}</span>
                <div className="text-right">
                  <span className={`text-sm mr-4 ${h.status === 'Closed' ? 'text-destructive' : 'text-muted-foreground'}`}>{h.time}</span>
                  <span className={`text-xs px-2 py-1 rounded-full ${h.status === 'Closed' ? 'bg-destructive/10 text-destructive' : h.status === 'Half Day' ? 'bg-orange-500/10 text-orange-500' : 'bg-green-500/10 text-green-500'}`}>{h.status}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
