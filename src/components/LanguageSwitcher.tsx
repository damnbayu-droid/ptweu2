"use client";

import { useLocale } from "next-intl";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface LanguageSwitcherProps {
  locale: string;
}

export function LanguageSwitcher({ locale }: LanguageSwitcherProps) {
  const pathname = usePathname();

  // Function to replace current locale in pathname
  const getSwitchedPath = (targetLocale: string) => {
    if (!pathname) return `/${targetLocale}/`;
    
    // Remove trailing slash for consistency in matching
    const cleanPath = pathname.endsWith("/") && pathname !== "/" 
      ? pathname.slice(0, -1) 
      : pathname;
      
    // Match /en or /id at the start
    const match = cleanPath.match(/^\/(en|id)(\/|$)/);
    
    if (match) {
      return cleanPath.replace(/^\/(en|id)/, `/${targetLocale}`);
    }
    
    // Fallback if somehow there's no locale prefix (should not happen on proper pages)
    return `/${targetLocale}${cleanPath}`;
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="flex items-center gap-1">
          <Globe className="h-4 w-4" />
          <span className="uppercase text-xs font-semibold">{locale}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem asChild disabled={locale === "en"}>
          <Link href={getSwitchedPath("en")} className="w-full text-sm">
            English (EN)
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild disabled={locale === "id"}>
          <Link href={getSwitchedPath("id")} className="w-full text-sm">
            Indonesia (ID)
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
