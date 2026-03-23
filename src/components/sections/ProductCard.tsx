import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useLocale } from "next-intl";

export interface Product {
  id: string;
  name: string;
  nameId?: string;
  chemicalFormula?: string;
  description: string;
  applications: string[];
  image: string;
}

interface ProductCardProps {
  product: Product;
  locale: string;
}

export function ProductCard({ product, locale }: ProductCardProps) {
  const isId = locale === "id";
  const displayName = isId && product.nameId ? product.nameId : product.name;

  return (
    <Card className="group overflow-hidden border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
      {/* Image */}
      <div className="relative h-48 bg-muted overflow-hidden">
        <Image
          src={product.image}
          alt={displayName}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {product.chemicalFormula && (
          <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-primary/90 text-primary-foreground text-xs font-medium">
            {product.chemicalFormula}
          </div>
        )}
      </div>

      <CardContent className="p-6">
        {/* Title */}
        <h3 className="text-xl font-bold text-foreground mb-1">{displayName}</h3>
        {isId && product.nameId && product.name !== product.nameId && (
          <p className="text-sm text-muted-foreground mb-3">{product.name}</p>
        )}
        {!isId && product.nameId && (
          <p className="text-sm text-muted-foreground mb-3">{product.nameId}</p>
        )}

        {/* Description */}
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {product.description}
        </p>

        {/* Applications */}
        <div className="mb-4">
          <p className="text-xs font-semibold text-foreground mb-2">Industrial Applications:</p>
          <div className="flex flex-wrap gap-1">
            {product.applications.slice(0, 3).map((app, index) => (
              <span
                key={index}
                className="inline-flex px-2 py-1 rounded-md bg-muted text-xs text-muted-foreground"
              >
                {app}
              </span>
            ))}
            {product.applications.length > 3 && (
              <span className="inline-flex px-2 py-1 rounded-md bg-muted text-xs text-muted-foreground">
                +{product.applications.length - 3} more
              </span>
            )}
          </div>
        </div>

        {/* CTA */}
        <Button asChild variant="outline" size="sm" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
          <Link href={`/${locale}/products#${product.id}`}>
            Learn More
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}

export function ProductCardLarge({ product, locale }: ProductCardProps) {
  const isId = locale === "id";
  const displayName = isId && product.nameId ? product.nameId : product.name;

  return (
    <Card id={product.id} className="overflow-hidden border-border/50 hover:border-primary/50 transition-all duration-300">
      <div className="grid md:grid-cols-2 gap-0">
        {/* Image */}
        <div className="relative h-64 md:h-80 bg-muted">
          <Image
            src={product.image}
            alt={displayName}
            fill
            className="object-cover"
          />
          {product.chemicalFormula && (
            <div className="absolute top-4 left-4 px-4 py-2 rounded-lg bg-primary text-primary-foreground font-medium">
              {product.chemicalFormula}
            </div>
          )}
        </div>

        {/* Content */}
        <CardContent className="p-8 flex flex-col justify-center">
          <h3 className="text-2xl font-bold text-foreground mb-2">{displayName}</h3>
          {isId && product.nameId && product.name !== product.nameId && (
            <p className="text-base text-muted-foreground mb-4">{product.name}</p>
          )}
          {!isId && product.nameId && (
            <p className="text-base text-muted-foreground mb-4">{product.nameId}</p>
          )}

          <p className="text-muted-foreground mb-6 leading-relaxed">
            {product.description}
          </p>

          <div className="mb-6">
            <p className="text-sm font-semibold text-foreground mb-3">Industrial Applications:</p>
            <div className="flex flex-wrap gap-2">
              {product.applications.map((app, index) => (
                <span
                  key={index}
                  className="inline-flex px-3 py-1.5 rounded-lg bg-primary/10 text-primary text-sm font-medium"
                >
                  {app}
                </span>
              ))}
            </div>
          </div>

          <Button asChild className="w-fit">
            <a href={`https://wa.me/628114344168?text=Inquiry about ${displayName}`} target="_blank" rel="noopener noreferrer">
              Request Quote / Minta Penawaran
            </a>
          </Button>
        </CardContent>
      </div>
    </Card>
  );
}
