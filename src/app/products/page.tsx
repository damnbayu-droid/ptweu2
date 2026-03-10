import type { Metadata } from "next";
import { ProductCardLarge, type Product } from "@/components/sections/ProductCard";
import { CTASection } from "@/components/sections/CTASection";
import { generatePageMetadata, generateProductSchema } from "@/lib/seo";

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

export default function ProductsPage() {
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
                <ProductCardLarge product={product} />
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
