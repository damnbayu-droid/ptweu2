import type { Metadata } from "next";
import { GalleryGrid, type GalleryItem } from "@/components/sections/GalleryGrid";
import { CTASection } from "@/components/sections/CTASection";
import { generatePageMetadata } from "@/lib/seo";

export const metadata: Metadata = generatePageMetadata({
  title: "Operations & Facilities - Operasi & Fasilitas",
  description: "Galeri operasi dan fasilitas PT Wira Energi Utama: lokasi tambang (quarry), crusher plant, alat berat, dan armada operasional untuk produksi batu kapur berkualitas.",
  keywords: ["quarry", "crusher plant", "heavy equipment", "mining operations", "limestone quarry indonesia"],
  path: "/gallery",
});

const GALLERY_CATEGORIES: Record<string, GalleryItem[]> = {
  "Quarry Location": [
    {
      id: "quarry-1",
      title: "Main Quarry Site",
      titleId: "Lokasi Tambang Utama",
      category: "Quarry",
      description: "Primary limestone extraction site with high-quality deposits",
      image: "/images/quarry-1.jpg",
    },
    {
      id: "quarry-2",
      title: "Quarry Operations",
      titleId: "Operasi Tambang",
      category: "Quarry",
      description: "Active mining operations at the quarry site",
      image: "/images/quarry-2.jpg",
    },
  ],
  "Crusher Plant": [
    {
      id: "crusher-1",
      title: "Primary Crusher",
      titleId: "Crusher Primer",
      category: "Facility",
      description: "Main crushing facility for processing raw limestone",
      image: "/images/crusher-1.jpg",
    },
    {
      id: "crusher-2",
      title: "Processing Plant",
      titleId: "Pabrik Pengolahan",
      category: "Facility",
      description: "Material processing and sizing equipment",
      image: "/images/crusher-2.jpg",
    },
  ],
  "Heavy Equipment": [
    {
      id: "equipment-1",
      title: "Excavators",
      titleId: "Ekskavator",
      category: "Equipment",
      description: "Heavy excavators for quarry operations",
      image: "/images/equipment-1.jpg",
    },
    {
      id: "equipment-2",
      title: "Wheel Loaders",
      titleId: "Loader",
      category: "Equipment",
      description: "Wheel loaders for material handling",
      image: "/images/equipment-2.jpg",
    },
    {
      id: "equipment-3",
      title: "Drilling Equipment",
      titleId: "Peralatan Bor",
      category: "Equipment",
      description: "Drilling rigs for extraction operations",
      image: "/images/equipment-3.jpg",
    },
  ],
  "Operational Vehicles": [
    {
      id: "fleet-1",
      title: "Dump Trucks",
      titleId: "Dump Truck",
      category: "Transport",
      description: "Heavy-duty dump trucks for material transport",
      image: "/images/fleet-1.jpg",
    },
    {
      id: "fleet-2",
      title: "Delivery Fleet",
      titleId: "Armada Pengiriman",
      category: "Transport",
      description: "Delivery trucks for customer shipments",
      image: "/images/fleet-2.jpg",
    },
  ],
  "Mining Operations": [
    {
      id: "mining-1",
      title: "Extraction Process",
      titleId: "Proses Ekstraksi",
      category: "Operations",
      description: "Limestone extraction operations",
      image: "/images/mining-1.jpg",
    },
    {
      id: "mining-2",
      title: "Material Loading",
      titleId: "Pemuatan Material",
      category: "Operations",
      description: "Loading operations at the quarry",
      image: "/images/mining-2.jpg",
    },
  ],
  "Site Infrastructure": [
    {
      id: "infra-1",
      title: "Site Office",
      titleId: "Kantor Lapangan",
      category: "Infrastructure",
      description: "Administrative and operational offices",
      image: "/images/infra-1.jpg",
    },
    {
      id: "infra-2",
      title: "Storage Facilities",
      titleId: "Fasilitas Penyimpanan",
      category: "Infrastructure",
      description: "Material storage and stockpile areas",
      image: "/images/infra-2.jpg",
    },
  ],
};

export default function GalleryPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-secondary text-secondary-foreground py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Operations & Facilities
            </h1>
            <p className="text-lg opacity-90">
              Operasi & Fasilitas - Modern Mining Operations & Infrastructure
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Sections */}
      <section className="py-16 lg:py-20">
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
