import type { Metadata } from "next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { QualitySection } from "@/components/sections/QualitySection";
import { CTASection } from "@/components/sections/CTASection";
import { generatePageMetadata } from "@/lib/seo";

export const metadata: Metadata = generatePageMetadata({
  title: "Quality Assurance - Jaminan Kualitas",
  description: "PT Wira Energi Utama berkomitmen pada kualitas produk dengan pengujian laboratorium tersertifikasi: XRF Analysis, Chemical Composition, LOI, dan pengujian material lainnya.",
  keywords: ["quality assurance", "laboratory testing", "XRF analysis", "material testing", "limestone quality"],
  path: "/quality",
});

const CERTIFICATIONS = [
  {
    title: "ISO Standards Compliance",
    description: "Operational processes follow international standards",
  },
  {
    title: "Regular Quality Testing",
    description: "Consistent product quality verification",
  },
  {
    title: "Third-Party Verification",
    description: "Independent laboratory certifications",
  },
];

const QUALITY_METRICS = [
  {
    metric: "CaCO3 Content",
    value: ">95%",
    description: "High calcium carbonate purity",
  },
  {
    metric: "Moisture Content",
    value: "<2%",
    description: "Low moisture for better handling",
  },
  {
    metric: "Particle Size",
    value: "Custom",
    description: "Available in various grades",
  },
];

export default function QualityPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-secondary text-secondary-foreground py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Quality Assurance
            </h1>
            <p className="text-lg opacity-90">
              Jaminan Kualitas - Committed to Excellence in Every Product
            </p>
          </div>
        </div>
      </section>

      {/* Quality Commitment */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Our Quality Commitment
            </h2>
            <p className="text-lg text-muted-foreground">
              Setiap produk kami melalui proses pengujian ketat di laboratorium tersertifikasi untuk memastikan kualitas dan konsistensi yang optimal.
            </p>
          </div>

          {/* Quality Metrics */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
            {QUALITY_METRICS.map((item, index) => (
              <Card key={index} className="text-center border-primary/20">
                <CardContent className="p-8">
                  <p className="text-4xl font-bold text-primary mb-2">{item.value}</p>
                  <p className="font-semibold text-foreground mb-1">{item.metric}</p>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Certifications */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {CERTIFICATIONS.map((cert, index) => (
              <Card key={index} className="border-border/50">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{cert.title}</h3>
                  <p className="text-sm text-muted-foreground">{cert.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testing Labs Section */}
      <QualitySection />

      {/* Testing Process */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <Card className="max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle>Testing & Analysis Process</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 rounded-lg bg-muted">
                  <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold shrink-0">1</div>
                  <div>
                    <p className="font-semibold text-foreground">Sample Collection</p>
                    <p className="text-sm text-muted-foreground">Representative samples collected from production batches</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-lg bg-muted">
                  <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold shrink-0">2</div>
                  <div>
                    <p className="font-semibold text-foreground">Laboratory Analysis</p>
                    <p className="text-sm text-muted-foreground">Comprehensive testing using certified laboratory equipment</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-lg bg-muted">
                  <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold shrink-0">3</div>
                  <div>
                    <p className="font-semibold text-foreground">Quality Verification</p>
                    <p className="text-sm text-muted-foreground">Results compared against specifications and standards</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-lg bg-muted">
                  <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold shrink-0">4</div>
                  <div>
                    <p className="font-semibold text-foreground">Certification & Release</p>
                    <p className="text-sm text-muted-foreground">Products released with quality certification documentation</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </>
  );
}
