"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Settings, Truck, Package, ShieldCheck, Hammer, Factory, ArrowRight, ChevronDown, CheckCircle2, Quote, BarChart3 } from "lucide-react";

export function ProcessSteps() {
  const steps = [
    { icon: Hammer, title: "Quarrying", desc: "Extracting high-grade limestone from our environmentally managed sites." },
    { icon: Settings, title: "Crushing & Screening", desc: "Initial processing to break down raw materials into manageable sizes." },
    { icon: Factory, title: "Calcination/Milling", desc: "Advanced thermal processing or fine milling depending on the final product grade." },
    { icon: ShieldCheck, title: "Quality Control", desc: "Rigorous lab testing to ensure purity, moisture levels, and particle size." },
    { icon: Package, title: "Packaging", desc: "Automated bagging or bulk loading for safe and efficient transport." },
    { icon: Truck, title: "Distribution", desc: "Timely delivery to domestic and international clients via our logistics network." },
  ];

  return (
    <section className="py-20 lg:py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Manufacturing Process</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">From raw extraction to final delivery, our process ensures maximum purity and efficiency.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div key={idx} className="relative group">
                {idx < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 -right-4 text-primary/30 z-10 group-hover:text-primary group-hover:translate-x-2 transition-all">
                    <ArrowRight className="w-8 h-8" />
                  </div>
                )}
                <Card className="h-full border-border/50 hover:border-primary/40 hover:shadow-lg transition-all text-center">
                  <CardContent className="p-8">
                    <div className="w-20 h-20 mx-auto rounded-2xl bg-secondary/40 flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform">
                      <Icon className="w-10 h-10" />
                    </div>
                    <span className="text-sm font-bold text-primary/60 mb-2 block">STEP {idx + 1}</span>
                    <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                    <p className="text-muted-foreground text-sm">{step.desc}</p>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function ApplicationsHoverCards() {
  const applications = [
    { name: "Construction & Infrastructure", desc: "Essential for cement, asphalt, and structural building materials." },
    { name: "Agriculture", desc: "Used for soil pH adjustment and fertilizers to improve crop yields." },
    { name: "Paper & Pulp", desc: "Acts as a premium filler and coating pigment to enhance brightness." },
    { name: "Plastics & Rubber", desc: "Improves heat resistance, stiffness, and reduces production costs." },
    { name: "Water Treatment", desc: "Crucial for regulating pH, softening water, and removing impurities." },
    { name: "Paints & Coatings", desc: "Provides opacity, weather resistance, and color retention." },
  ];

  return (
    <section className="py-20 lg:py-24 bg-secondary/20 border-y border-border/40">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Industries We Serve</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Our versatile calcium carbonate and limestone products power diverse global industries.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {applications.map((app, idx) => (
            <div key={idx} className="group relative overflow-hidden rounded-2xl bg-background border border-border p-8 hover:bg-primary hover:text-primary-foreground transition-colors duration-300">
              <div className="relative z-10">
                <CheckCircle2 className="w-8 h-8 text-primary mb-4 group-hover:text-primary-foreground transition-colors" />
                <h3 className="text-xl font-bold mb-3">{app.name}</h3>
                <p className="text-sm text-muted-foreground group-hover:text-primary-foreground/80 transition-colors">{app.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function PackagingInfo() {
  return (
    <section className="py-20 lg:py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Packaging & Logistics Options</h2>
            <p className="text-muted-foreground mb-8 text-lg">
              We offer flexible packaging solutions tailored to your operational scale and logistics requirements. All packaging guarantees moisture protection and material integrity.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Package className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">25kg / 50kg Paper & PP Bags</h4>
                  <p className="text-sm text-muted-foreground">Ideal for smaller industrial applications and easier manual handling.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Package className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">1 Ton Jumbo Bags (FIBC)</h4>
                  <p className="text-sm text-muted-foreground">Perfect for medium to large scale operations requiring forklift handling.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Truck className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Bulk Tanker / Loose Delivery</h4>
                  <p className="text-sm text-muted-foreground">Direct pneumatic pumping into silos for massive industrial plants.</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="lg:w-1/2 w-full grid grid-cols-2 gap-4">
             <div className="bg-secondary/40 rounded-2xl h-48 sm:h-64 flex items-center justify-center border border-border">
                <Package className="w-16 h-16 text-muted-foreground/30" />
             </div>
             <div className="bg-primary/5 rounded-2xl h-48 sm:h-64 flex items-center justify-center border border-primary/20 translate-y-8">
                <Truck className="w-16 h-16 text-primary/50" />
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function TestimonialCarousel() {
  const testimonials = [
    { quote: "The quality of Burn Lime supplied has drastically improved our steel manufacturing efficiency.", author: "Production Manager", company: "National Steel Corp" },
    { quote: "Consistent particle size and fast delivery times. Extremely reliable partner for our paper coating needs.", author: "Procurement Head", company: "Asia Pulp & Paper Solutions" },
    { quote: "Their pure calcium carbonate has been instrumental in our agricultural fertilizer production line.", author: "Operations Director", company: "AgriTech Indonesia" },
  ];

  return (
    <section className="py-20 lg:py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8 text-center max-w-5xl">
        <Quote className="w-16 h-16 text-primary-foreground/20 mx-auto mb-8" />
        <h2 className="text-3xl md:text-4xl font-bold mb-12">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {testimonials.map((t, idx) => (
            <div key={idx} className="bg-primary-foreground/10 p-8 rounded-2xl backdrop-blur-sm border border-primary-foreground/20">
              <p className="text-lg italic mb-6">"{t.quote}"</p>
              <div>
                <p className="font-bold">{t.author}</p>
                <p className="text-sm text-primary-foreground/70">{t.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ProductFAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  
  const faqs = [
    { q: "What is the minimum order quantity (MOQ) for international shipments?", a: "Our standard MOQ for international shipping is 1 FCL (Full Container Load), which typically holds around 20-25 tonnes depending on the packaging." },
    { q: "Can you provide custom particle sizes for Calcium Carbonate?", a: "Yes, we offer custom milling and sizing based on your specific requirements ranging from coarse granules to ultra-fine powders." },
    { q: "Do you provide Material Safety Data Sheets (MSDS)?", a: "Absolutely. COA (Certificate of Analysis) and MSDS accompany every shipment and are available upon request during the inquiry phase." },
    { q: "How long is the typical lead time for an order?", a: "For domestic orders, lead times are usually 3-7 days. For international exports, it depends on the destination and shipping schedules, typically 2-4 weeks." },
  ];

  return (
    <section className="py-20 lg:py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-muted-foreground">Common queries regarding our products and operations.</p>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border border-border rounded-xl overflow-hidden">
              <button 
                className="w-full px-6 py-4 text-left font-semibold flex items-center justify-between bg-secondary/10 hover:bg-secondary/30 transition-colors"
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
              >
                {faq.q}
                <ChevronDown className={`w-5 h-5 transition-transform ${openIdx === idx ? 'rotate-180' : ''}`} />
              </button>
              {openIdx === idx && (
                <div className="px-6 py-4 bg-background text-muted-foreground border-t border-border">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CapacityChart() {
  return (
    <section className="py-20 lg:py-24 bg-secondary/10 border-t border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2">
             <div className="bg-background rounded-2xl p-8 border border-border shadow-sm">
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-xl font-bold">Monthly Production Limit Target</h3>
                  <BarChart3 className="w-6 h-6 text-primary" />
                </div>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="font-medium">Limestone Extraction</span>
                      <span className="text-muted-foreground">80,000 MT</span>
                    </div>
                    <div className="w-full bg-secondary rounded-full h-2.5">
                      <div className="bg-primary h-2.5 rounded-full" style={{ width: '85%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="font-medium">Calcium Carbonate Milling</span>
                      <span className="text-muted-foreground">45,000 MT</span>
                    </div>
                    <div className="w-full bg-secondary rounded-full h-2.5">
                      <div className="bg-primary h-2.5 rounded-full" style={{ width: '70%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="font-medium">Burn Lime (Quicklime)</span>
                      <span className="text-muted-foreground">30,000 MT</span>
                    </div>
                    <div className="w-full bg-secondary rounded-full h-2.5">
                      <div className="bg-primary h-2.5 rounded-full" style={{ width: '60%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="font-medium">Hydrated Lime</span>
                      <span className="text-muted-foreground">20,000 MT</span>
                    </div>
                    <div className="w-full bg-secondary rounded-full h-2.5">
                      <div className="bg-primary h-2.5 rounded-full" style={{ width: '45%' }}></div>
                    </div>
                  </div>
                </div>
             </div>
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Scalable Production for Any Need</h2>
            <p className="text-muted-foreground mb-6">
              With our expansive reserves and ongoing investments in state-of-the-art milling equipment, we have the capacity to scale operations rapidly to meet sudden increases in market demand.
            </p>
            <p className="text-muted-foreground">
              Our continuous optimization of plant logistics ensures that peak production periods do not compromise the rigorous quality control standards our clients expect.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
