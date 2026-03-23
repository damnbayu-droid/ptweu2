import type { Metadata } from "next";
import { ProductCardLarge, type Product } from "@/components/sections/ProductCard";
import { CTASection } from "@/components/sections/CTASection";
import { generatePageMetadata, generateProductSchema } from "@/lib/seo";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { QualitySection } from "@/components/sections/QualitySection";
import { GalleryGrid, type GalleryItem } from "@/components/sections/GalleryGrid";

export const metadata: Metadata = generatePageMetadata({
  title: "Produk - Products",
  description: "PT Wira Energi Utama menyediakan berbagai produk batu kapur dan kalsium karbonat berkualitas tinggi: Limestone, Calcium Carbonate, Burn Lime, Hydrated Lime, dan PCC.",
  keywords: ["limestone indonesia", "calcium carbonate supplier", "burn lime", "hydrated lime", "CaCO3", "kapur industri"],
  path: "/products",
});

const PRODUCTS: Product[] = [
  {
    id: "limestone",
    name: "Limestone",
    nameId: "Batu Kapur / Gamping",
    description: "Batu kapur alam berkualitas tinggi untuk berbagai kebutuhan industri dan konstruksi. Material ini merupakan bahan baku utama untuk produksi semen, baja, dan berbagai produk turunan kalsium. Deposit batu kapur kami memiliki kandungan CaCO3 yang tinggi dengan kemurnian yang konsisten.",
    applications: [
      "Cement Manufacturing",
      "Steel Production",
      "Construction Materials",
      "Power Plant Flue Gas Desulfurization",
      "Road Base Material",
      "Soil Stabilization",
    ],
    image: "/images/limestone.jpg",
  },
  {
    id: "caco3",
    name: "Calcium Carbonate",
    nameId: "Kalsium Karbonat",
    chemicalFormula: "CaCO3",
    description: "Kalsium karbonat industri berkualitas tinggi dengan kemurnian CaCO3 yang optimal. Tersedia dalam berbagai ukuran partikel dan grade sesuai dengan kebutuhan aplikasi industri. Produk ini digunakan secara luas dalam industri kertas, plastik, cat, dan farmasi.",
    applications: [
      "Paper Industry",
      "Plastics & Polymers",
      "Paints & Coatings",
      "Pharmaceuticals",
      "Food Industry",
      "Rubber Industry",
    ],
    image: "/images/calcium-carbonate.jpg",
  },
  {
    id: "burn-lime",
    name: "Burn Lime",
    nameId: "Kapur Bakar / Quicklime",
    chemicalFormula: "CaO",
    description: "Kapur bakar (quicklime) dengan kandungan CaO tinggi hasil dari proses kalsinasi batu kapur pada suhu terkontrol. Produk ini memiliki reaktivitas tinggi dan tersedia dalam berbagai ukuran partikel untuk aplikasi industri yang beragam.",
    applications: [
      "Water & Wastewater Treatment",
      "Steel Manufacturing",
      "Chemical Industry",
      "Construction & Mortar",
      "Sugar Refining",
      "Flue Gas Treatment",
    ],
    image: "/images/burn-lime.jpg",
  },
  {
    id: "hydrated-lime",
    name: "Hydrated Lime",
    nameId: "Kapur Hidrat / Slaked Lime",
    chemicalFormula: "Ca(OH)2",
    description: "Kapur hidrat dengan kemurnian tinggi yang dihasilkan dari proses hidrasi kapur bakar. Produk ini mudah diaplikasikan, memiliki kelarutan yang baik dalam air, dan ideal untuk aplikasi pengolahan air dan lingkungan.",
    applications: [
      "Water Treatment",
      "Flue Gas Desulfurization",
      "Soil Stabilization",
      "Sugar Refining",
      "Construction",
      "Chemical Processing",
    ],
    image: "/images/hydrated-lime.jpg",
  },
  {
    id: "pcc",
    name: "Precipitated Calcium Carbonate",
    nameId: "Kalsium Karbonat Presipitat",
    chemicalFormula: "CaCO3",
    description: "Precipitated Calcium Carbonate (PCC) adalah kalsium karbonat sintetis dengan kontrol ukuran partikel dan morfologi yang presisi. Produk ini memberikan kecerahan tinggi dan karakteristik fisik yang konsisten untuk aplikasi premium.",
    applications: [
      "Paper Coating",
      "Pharmaceuticals",
      "Food Additives",
      "Cosmetics",
      "Sealants & Adhesives",
      "High-Performance Plastics",
    ],
    image: "/images/pcc.jpg",
  },
];

const CERTIFICATIONS = [
  { title: "ISO Standards Compliance", description: "Operational processes follow international standards" },
  { title: "Regular Quality Testing", description: "Consistent product quality verification" },
  { title: "Third-Party Verification", description: "Independent laboratory certifications" },
];

const QUALITY_METRICS = [
  { metric: "CaCO3 Content", value: ">95%", description: "High calcium carbonate purity" },
  { metric: "Moisture Content", value: "<2%", description: "Low moisture for better handling" },
  { metric: "Particle Size", value: "Custom", description: "Available in various grades" },
];

const GALLERY_CATEGORIES: Record<string, GalleryItem[]> = {
  "Quarry Location": [
    { id: "quarry-1", title: "Main Quarry Site", titleId: "Lokasi Tambang Utama", category: "Quarry", description: "Primary limestone extraction site with high-quality deposits", image: "/images/quarry-1.jpg" },
    { id: "quarry-2", title: "Quarry Operations", titleId: "Operasi Tambang", category: "Quarry", description: "Active mining operations at the quarry site", image: "/images/quarry-2.jpg" },
  ],
  "Crusher Plant": [
    { id: "crusher-1", title: "Primary Crusher", titleId: "Crusher Primer", category: "Facility", description: "Main crushing facility for processing raw limestone", image: "/images/crusher-1.jpg" },
    { id: "crusher-2", title: "Processing Plant", titleId: "Pabrik Pengolahan", category: "Facility", description: "Material processing and sizing equipment", image: "/images/crusher-2.jpg" },
  ],
  "Heavy Equipment": [
    { id: "equipment-1", title: "Excavators", titleId: "Ekskavator", category: "Equipment", description: "Heavy excavators for quarry operations", image: "/images/equipment-1.jpg" },
    { id: "equipment-2", title: "Wheel Loaders", titleId: "Loader", category: "Equipment", description: "Wheel loaders for material handling", image: "/images/equipment-2.jpg" },
  ],
};

export default async function ProductsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  return (
    <>
      {/* Hero Section */}
      <section className="bg-secondary text-secondary-foreground py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Produk Kami
            </h1>
            <p className="text-lg opacity-90">
              Our Products - High Quality Limestone & Calcium Carbonate Products
            </p>
          </div>
        </div>
      </section>

      {/* Products List */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="space-y-12">
            {PRODUCTS.map((product) => (
              <div key={product.id}>
                <script
                  type="application/ld+json"
                  dangerouslySetInnerHTML={{
                    __html: JSON.stringify(generateProductSchema(product)),
                  }}
                />
                <ProductCardLarge product={product} locale={locale} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Commitment Section */}
      <section className="py-16 lg:py-20 bg-muted/30 border-t border-border/50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Quality Commitment</h2>
            <p className="text-lg text-muted-foreground">Every single component goes through continuous third party testing safely with certifications audits.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
            {QUALITY_METRICS.map((item, index) => (
              <Card key={index} className="text-center border-primary/20 bg-card">
                <CardContent className="p-8">
                  <p className="text-4xl font-bold text-primary mb-2">{item.value}</p>
                  <p className="font-semibold text-foreground mb-1">{item.metric}</p>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {CERTIFICATIONS.map((cert, index) => (
              <Card key={index} className="border-border/50">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                   <h3 className="font-semibold text-foreground mb-2 text-md">{cert.title}</h3>
                   <p className="text-xs text-muted-foreground">{cert.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testing Labs Section */}
      <QualitySection />

      {/* Gallery Sections */}
      <section className="py-16 lg:py-20 bg-muted/20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="space-y-16">
            {Object.entries(GALLERY_CATEGORIES).map(([category, items]) => (
              <div key={category}>
                <h2 className="text-2xl font-bold text-foreground mb-6">{category}</h2>
                <GalleryGrid items={items} columns={3} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </>
  );
}
