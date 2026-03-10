import type { Metadata } from "next";

// Company Information
export const COMPANY_INFO = {
  name: "PT Wira Energi Utama",
  tagline: "General Trade, Mining & Supplier",
  description: "Perusahaan penyedia batu kapur / gamping berkualitas tinggi untuk industri, konstruksi, dan pembangunan infrastruktur di Indonesia.",
  email: "contact@wiraenergiutama.com",
  phone: "+62 811 4344 168",
  whatsapp: "628114344168",
  address: {
    street: "Jalan Ratatotok Morea Soyowan",
    village: "Desa Ratatotok Satu",
    district: "Kecamatan Ratatotok",
    regency: "Kabupaten Minahasa Tenggara",
    province: "Sulawesi Utara",
    country: "Indonesia",
  },
  website: "https://wiraenergiutama.com",
} as const;

// SEO Keywords
export const SEO_KEYWORDS = {
  primary: [
    "batu kapur",
    "batu gamping",
    "supplier limestone indonesia",
    "calcium carbonate indonesia",
    "kapur industri",
    "limestone mining indonesia",
  ],
  secondary: [
    "burn lime supplier",
    "hydrated lime supplier",
    "CaCO3 supplier",
    "batu kapur sulawesi utara",
    "supplier kapur industri",
    "pertambangan batu kapur",
  ],
} as const;

// Site Configuration
export const SITE_CONFIG = {
  url: "https://wiraenergiutama.com",
  locale: "id_ID",
  alternateLocale: "en_US",
} as const;

// Page Metadata Generator
export function generatePageMetadata(options: {
  title: string;
  description: string;
  keywords?: string[];
  path?: string;
  image?: string;
}): Metadata {
  const { title, description, keywords = [], path = "", image = "/og-image.jpg" } = options;
  
  const fullTitle = `${title} | ${COMPANY_INFO.name}`;
  const url = `${SITE_CONFIG.url}${path}`;
  const imageUrl = `${SITE_CONFIG.url}${image}`;
  
  const allKeywords = [...SEO_KEYWORDS.primary, ...SEO_KEYWORDS.secondary, ...keywords];
  
  return {
    title: fullTitle,
    description,
    keywords: allKeywords,
    authors: [{ name: COMPANY_INFO.name }],
    creator: COMPANY_INFO.name,
    publisher: COMPANY_INFO.name,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: COMPANY_INFO.name,
      locale: SITE_CONFIG.locale,
      type: "website",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [imageUrl],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

// JSON-LD Structured Data
export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: COMPANY_INFO.name,
    alternateName: "Wira Energi Utama",
    description: COMPANY_INFO.description,
    url: SITE_CONFIG.url,
    logo: `${SITE_CONFIG.url}/logo.svg`,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: COMPANY_INFO.phone,
      contactType: "customer service",
      availableLanguage: ["Indonesian", "English"],
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: COMPANY_INFO.address.street,
      addressLocality: COMPANY_INFO.address.village,
      addressRegion: COMPANY_INFO.address.province,
      addressCountry: "ID",
    },
    sameAs: [],
  };
}

export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: COMPANY_INFO.name,
    description: COMPANY_INFO.description,
    url: SITE_CONFIG.url,
    telephone: COMPANY_INFO.phone,
    email: COMPANY_INFO.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: COMPANY_INFO.address.street,
      addressLocality: COMPANY_INFO.address.village,
      addressRegion: COMPANY_INFO.address.province,
      addressCountry: "ID",
    },
    priceRange: "$$",
    openingHours: "Mo-Fr 08:00-17:00",
    geo: {
      "@type": "GeoCoordinates",
      latitude: "1.0833",
      longitude: "124.5833",
    },
  };
}

export function generateProductSchema(product: {
  name: string;
  description: string;
  applications: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    brand: {
      "@type": "Brand",
      name: COMPANY_INFO.name,
    },
    manufacturer: {
      "@type": "Organization",
      name: COMPANY_INFO.name,
    },
    category: "Industrial Materials",
    additionalProperty: product.applications.map((app) => ({
      "@type": "PropertyValue",
      name: "Industrial Application",
      value: app,
    })),
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      seller: {
        "@type": "Organization",
        name: COMPANY_INFO.name,
      },
    },
  };
}
