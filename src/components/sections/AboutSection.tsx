import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Target, Eye, Shield, Leaf, Users, Cog, TreePine } from "lucide-react";

interface VisionMissionProps {
  showCTA?: boolean;
}

const MISSIONS = [
  {
    icon: <Target className="h-5 w-5" />,
    text: "Memupuk budaya cepat, produktif, efektif, dan efisien.",
    textEn: "Fostering a fast, productive, effective, and efficient culture.",
  },
  {
    icon: <Shield className="h-5 w-5" />,
    text: "Mengutamakan kesehatan, keselamatan kerja, dan lingkungan dalam setiap aktivitas operasional.",
    textEn: "Prioritizing health, safety, and environment in all operational activities.",
  },
  {
    icon: <Users className="h-5 w-5" />,
    text: "Memelihara tata kelola perusahaan tambang yang baik untuk meningkatkan kepercayaan masyarakat.",
    textEn: "Maintaining good mining governance to increase public trust.",
  },
  {
    icon: <Cog className="h-5 w-5" />,
    text: "Menyediakan lingkungan belajar untuk meningkatkan kompetensi dan kesejahteraan karyawan.",
    textEn: "Providing a learning environment to improve employee competence and welfare.",
  },
  {
    icon: <Leaf className="h-5 w-5" />,
    text: "Menggunakan teknologi yang berwawasan lingkungan.",
    textEn: "Using environmentally friendly technology.",
  },
  {
    icon: <TreePine className="h-5 w-5" />,
    text: "Melaksanakan reklamasi dan penghijauan sesuai peraturan yang berlaku.",
    textEn: "Implementing reclamation and reforestation according to applicable regulations.",
  },
];

export function AboutSummary() {
  return (
    <section className="py-16 lg:py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              Tentang Perusahaan
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              PT Wira Energi Utama adalah perusahaan yang bergerak di bidang pertambangan dan penyedia batu kapur (limestone) serta produk turunan kalsium karbonat untuk kebutuhan industri, konstruksi, dan pembangunan infrastruktur.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Dengan lokasi operasional di Sulawesi Utara, Indonesia, perusahaan ini berfokus pada penyediaan material batu kapur berkualitas tinggi untuk berbagai kebutuhan industri seperti konstruksi, pembangunan infrastruktur, pembangkit listrik, serta industri pengolahan mineral.
            </p>
            <Button asChild>
              <Link href="/about">
                Selengkapnya / Learn More
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-2xl bg-muted overflow-hidden">
              {/* Placeholder for company image */}
              <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/80 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-20 h-20 mx-auto rounded-full bg-primary/20 flex items-center justify-center mb-4">
                    <Eye className="h-10 w-10 text-primary" />
                  </div>
                  <p className="text-muted-foreground text-sm">
                    Mining Operations in North Sulawesi
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function VisionMission({ showCTA = true }: VisionMissionProps) {
  return (
    <section className="py-16 lg:py-20 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Vision */}
          <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-lg bg-primary text-primary-foreground flex items-center justify-center">
                  <Eye className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Visi / Vision</h3>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Menjadi perusahaan industri pertambangan kapur / gamping global terkemuka yang tumbuh berkelanjutan.
              </p>
              <p className="text-sm text-muted-foreground/70 mt-2 italic">
                To become a leading global limestone mining company that grows sustainably.
              </p>
            </CardContent>
          </Card>

          {/* Mission */}
          <Card className="border-border/50">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-lg bg-secondary text-secondary-foreground flex items-center justify-center">
                  <Target className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Misi / Mission</h3>
              </div>
              <ul className="space-y-4">
                {MISSIONS.map((mission, index) => (
                  <li key={index} className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                      {mission.icon}
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{mission.text}</p>
                      <p className="text-xs text-muted-foreground/60 mt-1 italic">
                        {mission.textEn}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {showCTA && (
          <div className="mt-12 text-center">
            <Button asChild size="lg">
              <Link href="/about">
                About Our Company
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
