import type { Metadata } from "next";
import { Card, CardContent } from "@/components/ui/card";
import { VisionMission } from "@/components/sections/AboutSection";
import { CTASection } from "@/components/sections/CTASection";
import { CompanyTimeline, CoreValuesCards, StatsChart, GlobalReachMap, AwardsGrid } from "@/components/sections/AboutPageSections";
import { generatePageMetadata } from "@/lib/seo";

export const metadata: Metadata = generatePageMetadata({
  title: "Tentang Perusahaan - About Us",
  description: "PT Wira Energi Utama adalah perusahaan industri pertambangan batu kapur / gamping yang beroperasi di Sulawesi Utara, Indonesia. Menyediakan material berkualitas tinggi untuk industri dan konstruksi.",
  keywords: ["tentang PT Wira Energi Utama", "perusahaan tambang kapur", "limestone mining company"],
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-secondary text-secondary-foreground py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Tentang Perusahaan
            </h1>
            <p className="text-lg opacity-90">
              About Our Company
            </p>
          </div>
        </div>
      </section>

      {/* Company Description */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              PT Wira Energi Utama merupakan perusahaan yang bergerak di bidang industri pertambangan batu kapur / gamping yang beroperasi di wilayah Sulawesi Utara, Indonesia.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Perusahaan ini berfokus pada penyediaan material batu kapur berkualitas tinggi untuk berbagai kebutuhan industri seperti konstruksi, pembangunan infrastruktur, pembangkit listrik, serta industri pengolahan mineral.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Dengan memperhatikan kondisi geografis dan potensi sumber daya alam yang ada, PT Wira Energi Utama berkomitmen untuk menjalankan kegiatan operasional secara profesional, berkelanjutan, dan ramah lingkungan.
            </p>
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <CompanyTimeline />

      {/* Vision & Mission */}
      <VisionMission showCTA={false} />

      {/* Core Values */}
      <CoreValuesCards />

      {/* Stats & Growth Chart */}
      <StatsChart />

      {/* Company Registration */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <Card className="max-w-2xl mx-auto border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">
                Company Registration
              </h3>
              <p className="text-sm text-muted-foreground mb-6">
                Perusahaan Terdaftar Resmi
              </p>
              <div className="p-6 rounded-xl bg-background border border-border">
                <p className="text-sm text-muted-foreground mb-2">Nomor Induk Berusaha (NIB)</p>
                <p className="text-lg font-mono font-bold text-primary">
                  Officially Registered Company
                </p>
                <p className="text-xs text-muted-foreground mt-2">
                  PT Wira Energi Utama terdaftar secara resmi dan memiliki izin usaha yang valid dari pemerintah Indonesia.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Global Reach */}
      <GlobalReachMap />

      {/* Awards & Certifications */}
      <AwardsGrid />

      {/* CTA Section */}
      <CTASection />
    </>
  );
}
