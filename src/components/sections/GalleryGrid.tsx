import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

export interface GalleryItem {
  id: string;
  title: string;
  titleId?: string;
  category: string;
  image: string;
  description?: string;
}

interface GalleryGridProps {
  items: GalleryItem[];
  columns?: 2 | 3 | 4;
}

export function GalleryGrid({ items, columns = 3 }: GalleryGridProps) {
  const gridCols = {
    2: "md:grid-cols-2",
    3: "md:grid-cols-2 lg:grid-cols-3",
    4: "md:grid-cols-2 lg:grid-cols-4",
  };

  return (
    <div className={`grid grid-cols-1 ${gridCols[columns]} gap-6`}>
      {items.map((item) => (
        <GalleryCard key={item.id} item={item} />
      ))}
    </div>
  );
}

function GalleryCard({ item }: { item: GalleryItem }) {
  return (
    <Card className="group overflow-hidden border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
      <div className="relative aspect-video bg-muted overflow-hidden">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-primary/90 text-primary-foreground text-xs font-medium">
          {item.category}
        </div>
      </div>
      <CardContent className="p-4">
        <h3 className="font-semibold text-foreground">{item.title}</h3>
        {item.titleId && (
          <p className="text-sm text-muted-foreground">{item.titleId}</p>
        )}
        {item.description && (
          <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
            {item.description}
          </p>
        )}
      </CardContent>
    </Card>
  );
}

export function GallerySection({ title, items }: { title: string; items: GalleryItem[] }) {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-foreground">{title}</h2>
      <GalleryGrid items={items} />
    </div>
  );
}
