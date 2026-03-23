"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function RootPage() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to default locale 'en'
    router.replace("/en/");
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <p className="text-muted-foreground animate-pulse">Redirecting...</p>
    </div>
  );
}
