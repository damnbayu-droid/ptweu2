import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSummary } from "@/components/sections/AboutSection";
import { ProductCard, type Product } from "@/components/sections/ProductCard";
import { QualitySection } from "@/components/sections/QualitySection";
import { GalleryGrid, type GalleryItem } from "@/components/sections/GalleryGrid";
import { CTASection } from "@/components/sections/CTASection";
import { generatePageMetadata } from "@/lib/seo";

export const metadata: Metadata = generatePageMetadata({
  title: "Supplier Batu Kapur & Kalsium Karbonat Indonesia",
  description: "PT Wira Energi Utama adalah perusahaan penyedia batu kapur (limestone) dan kalsium karbonat berkualitas tinggi untuk industri, konstruksi, dan infrastruktur di Indonesia.",
  keywords: ["batu kapur", "limestone supplier", "calcium carbonate", "kapur industri"],
  path: "/",
});

const PRODUCTS: Product[] = [
  {
    id: "limestone",
    name: "Limestone",
    nameId: "Batu Kapur / Gamping",
    description: "Batu kapur alam berkualitas tinggi untuk berbagai kebutuhan industri dan konstruksi. Material utama untuk produksi kalsium karbonat dan kapur olahan.",
    applications: ["Construction", "Cement Industry", "Steel Industry", "Power Plants"],
    image: "/images/limestone.jpg",
  },
  {
    id: "caco3",
    name: "Calcium Carbonate",
    nameId: "Kalsium Karbonat",
    chemicalFormula: "CaCO3",
    description: "Kalsium karbonat berkualitas industri untuk aplikasi berbagai sektor. Tersedia dalam berbagai grade sesuai kebutuhan.",
    applications: ["Paper Industry", "Plastics", "Paints & Coatings", "Pharmaceuticals"],
    image: "/images/calcium-carbonate.jpg",
  },
  {
    id: "burn-lime",
    name: "Burn Lime",
    nameId: "Kapur Bakar",
    chemicalFormula: "CaO",
    description: "Kapur bakar (quicklime) dengan kandungan CaO tinggi untuk aplikasi industri. Diproduksi melalui proses kalsinasi terkontrol.",
    applications: ["Water Treatment", "Steel Manufacturing", "Chemical Industry", "Construction"],
    image: "/images/burn-lime.jpg",
  },
  {
    id: "hydrated-lime",
    name: "Hydrated Lime",
    nameId: "Kapur Hidrat",
    chemicalFormula: "Ca(OH)2",
    description: "Kapur hidrat dengan kemurnian tinggi untuk aplikasi industri dan lingkungan. Mudah diaplikasikan dan larut dalam air.",
    applications: ["Water Treatment", "Flue Gas Desulfurization", "Soil Stabilization", "Sugar Refining"],
    image: "/images/hydrated-lime.jpg",
  },
];

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "quarry",
    title: "Quarry Location",
    titleId: "Lokasi Tambang",
    category: "Quarry",
    description: "Mining site with high-quality limestone deposits",
    image: "/images/quarry.jpg",
  },
  {
    id: "crusher",
    title: "Crusher Plant",
    titleId: "Pabrik Penghancur",
    category: "Facility",
    description: "Modern crushing and processing facility",
    image: "/images/crusher-plant.jpg",
  },
  {
    id: "heavy-equipment",
    title: "Heavy Equipment",
    titleId: "Alat Berat",
    category: "Equipment",
    description: "Fleet of heavy machinery for mining operations",
    image: "/images/heavy-equipment.jpg",
  },
  {
    id: "fleet",
    title: "Operational Fleet",
    titleId: "Armada Operasional",
    category: "Transport",
    description: "Transportation fleet for product delivery",
    image: "/images/fleet.jpg",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection />

      {/* About Summary */}
      <AboutSummary />

      {/* Products Section */}
      <section className="py-16 lg:py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Produk Kami / Our Products
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Material berkualitas tinggi untuk berbagai kebutuhan industri
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PRODUCTS.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Quality Assurance Section */}
      <QualitySection />

      {/* Operations & Facilities Section */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Operations & Facilities
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Fasilitas operasional modern untuk menjamin kualitas dan pasokan yang handal
            </p>
          </div>

          <GalleryGrid items={GALLERY_ITEMS} columns={4} />
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </>
  );
}
